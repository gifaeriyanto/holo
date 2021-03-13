import { errorHandler } from 'api/utils/handler';
import { API } from 'api/utils/instance';
import { APIPaths } from 'api/utils/path';
import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { LOCALSTORAGE_KEYS } from 'utils/variables';

export interface UpdateWelcomeParams {
  message: string;
  video: File;
}

export interface WelcomeResponse {
  message: string;
  video: string;
  type: string;
}

export const getWelcome = async () => {
  try {
    const res: AxiosResponse<WelcomeResponse> = await API.get(
      APIPaths.welcome,
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

export const updateWelcome = async ({
  message,
  video,
}: UpdateWelcomeParams) => {
  const formData = new FormData();
  formData.append('message', message);
  formData.append('video', video);

  try {
    const res: AxiosResponse<WelcomeResponse[]> = await API.put(
      APIPaths.updateWelcome,
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

export const useWelcome = () => {
  return useQuery('welcome', () => getWelcome(), {
    cacheTime: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};
