import { apiClients } from "@/utils/axiosInstance";
import { AxiosResponse } from "axios";

type UseLogin = () => {
  fetcher: (
    email: string,
    password: string
  ) => Promise<AxiosResponse<Response, any>>;
};

type Response = {
  success: boolean;
  message: string;
};

export const useLogin: UseLogin = () => {
  const loginFetcher = async (email: string, password: string) => {
    const res = await apiClients.post<Response>(`auth/login`, {
      email,
      password,
    });
    return res;
  };

  return {
    fetcher: loginFetcher,
  };
};
