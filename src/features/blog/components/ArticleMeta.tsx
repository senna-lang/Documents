"use client";
import CommentForm from "@/components/elements/CommentForm";
import React, { useState } from "react";
import { useLike } from "@/common/hooks/useLike";
import { useComment } from "../../../common/hooks/useComment";
import { Button } from "@mantine/core";
import { FcLike } from "react-icons/fc";

type MetaProps = {
  id: string;
};

const ArticleComments = ({ id }: MetaProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const { data: likes, trigger, isMutating } = useLike(id);
  const { data: comments } = useComment(id);

  return (
    <div className="mt-2 rounded-lg bg-white p-5">
      <div className="flex items-center justify-between">
        <div className=" mx-4 w-full">
          <div className="flex justify-between">
            <span>いいね</span>
            <span>{likes}件</span>
          </div>
          <div className="flex justify-between">
            <span>コメント</span>
            <span>{comments}件</span>
          </div>
        </div>
        <div>
          <Button
            variant="light"
            color="indigo"
            size="lg"
            onClick={() =>
              trigger(null, {
                onSuccess: () => setIsLiked(true),
                optimisticData: [likes + 1],
              })
            }
            disabled={isLiked}
            loading={isMutating}
          >
            {isLiked ? (
              "Thanks!!"
            ) : (
              <>
                <span className="mr-1">
                  <FcLike />
                </span>
                + 1 ?
              </>
            )}
          </Button>
        </div>
      </div>
      <div className="mt-2">
        <CommentForm id={id} />
      </div>
    </div>
  );
};

export default ArticleComments;
