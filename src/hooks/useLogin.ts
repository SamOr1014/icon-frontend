import { APIUrl } from "@/constants/env";
import axios from "axios";

type UseLogin = () => {
  fetcher: (email: string, password: string) => Promise<Response>;
};

type Response = {
  success: boolean;
  message: string;
};

const DEFAULT_ERROR_RETURN: Response = {
  success: false,
  message: "error",
};

export const useLogin: UseLogin = () => {
  const loginFetcher = async (email: string, password: string) => {
    try {
      const { data } = await axios.post<Response>(`${APIUrl}/auth/login`, {
        email,
        password,
      });
      return data;
    } catch (e) {
      //error handling
      alert(e);
      return DEFAULT_ERROR_RETURN;
    }
  };

  return {
    fetcher: loginFetcher,
  };
};
