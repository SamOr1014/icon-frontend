import { APIUrl } from "@/constants/env";
import axios, { AxiosResponse } from "axios";

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
    const res = await axios.post<Response>(
      `${APIUrl}/auth/login`,
      {
        email,
        password,
      },
      { validateStatus: (status) => status < 500 }
    );
    return res;
  };

  return {
    fetcher: loginFetcher,
  };
};
