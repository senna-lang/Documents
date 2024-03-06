"use server";
import { createComment } from "../lib/notion";

type CommentProps = {
  id: string;
  comment: string;
};

export const sendComment = async ({ id, comment }: CommentProps) => {
  const result = await createComment({
    parent: {
      page_id: id,
    },
    rich_text: [
      {
        text: {
          content: comment,
        },
      },
    ],
  });
  return result;
};
