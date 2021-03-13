import { errorHandler } from 'api/utils/handler';
import { API } from 'api/utils/instance';
import { APIPaths } from 'api/utils/path';
import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { LOCALSTORAGE_KEYS } from 'utils/variables';

export interface ItemsResponse {
  id: number;
  created_at: string;
  updated_at: string;
  title: string;
  video: string;
  thumbnail: string;
}

export interface CreateItemParams {
  title: string;
  video: File;
  thumbnail: File;
}

export interface UpdateItemParams extends CreateItemParams {
  id: number;
}

export const fetchItems = async () => {
  try {
    const res: AxiosResponse<ItemsResponse[]> = await API.get(APIPaths.items, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem(
          LOCALSTORAGE_KEYS.accessToken,
        )}`,
      },
    });
    return res.data;
  } catch (error) {
    errorHandler(error);
  }
};

export const createItem = async ({
  title,
  video,
  thumbnail,
}: CreateItemParams) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('video', video);
  formData.append('thumbnail', thumbnail);

  try {
    const res: AxiosResponse<ItemsResponse[]> = await API.post(
      APIPaths.createItem,
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            LOCALSTORAGE_KEYS.accessToken,
          )}`,
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return res.data;
  } catch (error) {
    errorHandler(error);
  }
};

export const updateItem = async ({
  id,
  title,
  video,
  thumbnail,
}: UpdateItemParams) => {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('video', video);
  formData.append('thumbnail', thumbnail);

  try {
    const res: AxiosResponse<ItemsResponse[]> = await API.put(
      APIPaths.updateItem(id.toString()),
      formData,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            LOCALSTORAGE_KEYS.accessToken,
          )}`,
        },
      },
    );
    return res.data;
  } catch (error) {
    errorHandler(error);
  }
};

export const deleteItem = async (id: number) => {
  try {
    const res: AxiosResponse<ItemsResponse[]> = await API.delete(
      APIPaths.deleteItem(id.toString()),
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem(
            LOCALSTORAGE_KEYS.accessToken,
          )}`,
        },
      },
    );
    return res.data;
  } catch (error) {
    errorHandler(error);
  }
};

export const useItems = () => {
  return useQuery('items', () => fetchItems(), {
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};
