import { APIUrl } from "@/constants/env";
import axios, { AxiosError } from "axios";
import { useState } from "react";

export const usePostRequest = <T, R>() => {
  const [data, setData] = useState<R | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown | null>(null);
  const postRequest = async (path: string, formData: T) => {
    try {
      setIsLoading(true);
      const res = await axios.post<R>(`${APIUrl + path}`, formData);
      setData(res.data as R);
      setIsLoading(false);
      console.log("data", data);
      return res.data as R;
    } catch (e) {
      setIsLoading(false);
      if ((e as AxiosError).response!.status > 500) {
        setError(e);
        return;
      } else {
        setData(((e as AxiosError).response?.data as R) ?? null);
        return (e as AxiosError).response?.data as R;
      }
    }
  };

  const resetData = () => {
    setData(null);
    setError(null);
    setIsLoading(false);
  };
  return { postRequest, data, isLoading, error, resetData };
};
