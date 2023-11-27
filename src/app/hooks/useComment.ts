import useSWRMutation from "swr/mutation";
import axios from "axios";

const url = "/api/comments";

const postFetcher = async (url: string,text:string) => {
  const response = await axios.post(url,text);

  return response.data;
};

export const useComment = (page_id: string,text:string) => {
  const {
    trigger,
    isMutating,
    error: mutateError,
  } = useSWRMutation(page_id ? `${url}/${page_id}` : null,
  (url) => postFetcher(url,text)
  );

  return {
    trigger,
    isMutating,
    mutateError,
  };
};
