import useSWR from "swr";
import axios from "axios";
import { useCallback } from "react";

const url = "/api/comments";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("エラーが発生しました", error);
  }
);

const getFetcher = async (block_id: string) => {
  const response = await axios.get(block_id);
  return response.data.results.length;
};

export const useComment = (block_id: string) => {

  const { data, isLoading, error, mutate } = useSWR(
    block_id ? `${url}/${block_id}` : null,
    getFetcher
  );

  const revalidate = useCallback(() => mutate(), [mutate]);

  return {
    data: data || 0,
    revalidate,
    isLoading,
    error,
  };
};
