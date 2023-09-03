import { apiClients } from "@/utils/axiosInstance";
import { AxiosError } from "axios";
import { useState } from "react";

type AxiosConfig = {
  params?: Record<string, any>;
};

export const useGetRequest = <T,>() => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown | null>(null);
  const getRequest = async (path: string, option?: AxiosConfig) => {
    try {
      setIsLoading(true);
      const response = await apiClients.get(`${path}`, {
        params: option?.params,
      });
      setData(response.data as T);
      setIsLoading(false);
      return response.data as T;
    } catch (e) {
      setIsLoading(false);
      if ((e as AxiosError).response!.status > 500) {
        setError(e);
        return;
      } else {
        setData(((e as AxiosError).response?.data as T) ?? null);
        return (e as AxiosError).response?.data as T;
      }
    }
  };
  const resetData = () => {
    setData(null);
    setError(null);
    setIsLoading(false);
  };
  return { getRequest, data, isLoading, error, resetData };
};
