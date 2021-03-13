import { API, APIPaths } from 'api/utils/instance';
import { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

export interface LoginParams {
  username: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
}

export const login = async ({ username, password }: LoginParams) => {
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  const res: AxiosResponse<LoginResponse> = await API.post(
    APIPaths.login,
    formData,
    {
      headers: { 'Content-Type': 'multipart/form-data' },
    },
  );
  return res.data;
};

export const useAuth = (params: LoginParams) => {
  return useQuery('login', () => login(params), {
    enabled: Boolean(params.username) && Boolean(params.password),
    cacheTime: 0,
    refetchInterval: false,
    refetchOnWindowFocus: false,
  });
};
