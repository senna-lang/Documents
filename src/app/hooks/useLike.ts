import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import axios from "axios";
import { useCallback } from "react";

const url = "/api/likes";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("エラーが発生しました", error);
  }
);

const getFetcher = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};
const patchFetcher = async (url: string) => {
  const response = await axios.patch(url);

  return response.data;
};

export const useLike = (page_id: string) => {
  const { data, isLoading, error, mutate } = useSWR(
    page_id ? `${url}/${page_id}` : null,
    getFetcher
  );

  const revalidate = useCallback(() => mutate(), [mutate]);

  const {
    trigger,
    isMutating,
    error: mutateError,
  } = useSWRMutation(page_id ? `${url}/${page_id}` : null, patchFetcher, {
    onSuccess: revalidate,
  });

  return {
    data: data || 0,
    revalidate,
    isLoading,
    error,
    trigger,
    isMutating,
    mutateError,
  };
};
