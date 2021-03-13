import { API, APIPaths } from 'api/instance';
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
  const res: AxiosResponse<LoginResponse> = await API.post(APIPaths.login, {
    username,
    password,
  });
  return res.data;
};

export const useAuth = (params: LoginParams) => {
  return useQuery('login', () => login(params), {
    enabled: Boolean(params.username) && Boolean(params.password),
    cacheTime: 0,
  });
};
