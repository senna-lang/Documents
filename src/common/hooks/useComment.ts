import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import axios from "axios";
import { isMutatingState } from "@/common/atoms/isMutating";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

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

const postFetcher = async (url: string, text: string) => {
  const response = await axios.post(url, text);
  return response.data;
};

export const useComment = (block_id: string, text: string) => {
  const [commentMutating, setCommentMutating] = useRecoilState(isMutatingState);

  const { data, isLoading, error, mutate } = useSWR(
    block_id ? `${url}/${block_id}` : null,
    getFetcher
  );

  const revalidate = useCallback(() => mutate(), [mutate]);

  const {
    trigger,
    error: mutateError,
    isMutating,
  } = useSWRMutation(block_id ? `${url}/${block_id}` : null, (url) => postFetcher(url, text), {
    onSuccess: () => {
      setCommentMutating(false);
      revalidate;
    },
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
