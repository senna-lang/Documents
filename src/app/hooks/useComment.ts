import useSWRMutation from "swr/mutation";
import axios from "axios";
import { isMutatingState } from "@/app/atoms/isMutating";
import { useRecoilState } from "recoil";

const url = "/api/comments";

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log("エラーが発生しました", error);
  }
);

const postFetcher = async (url: string, text: string) => {
  const response = await axios.post(url, text);
  return response.data;
};

export const useComment = (page_id: string, text: string) => {
  const [commentMutating, setCommentMutating] = useRecoilState(isMutatingState);
  const {
    trigger,
    error: mutateError,
    isMutating,
  } = useSWRMutation(page_id ? `${url}/${page_id}` : null, (url) => postFetcher(url, text), {
    onSuccess: () => {
      setCommentMutating(false);
    },
  });

  return {
    trigger,
    isMutating,
    mutateError,
  };
};
