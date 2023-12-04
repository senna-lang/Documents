"use client";
import CommentForm from "./CommentForm";
import React, { useState } from "react";
import { useLike } from "@/app/hooks/useLike";
import { useComment } from "../hooks/useComment";
import { Button } from "@mantine/core";
import { FcLike } from "react-icons/fc";

type LikesProps = {
  id: string;
};

const ArticleComments = ({ id }: LikesProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const { data : likes, trigger, isMutating } = useLike(id);
  const { data : comment } = useComment(id);

  return (
    <div className="mt-2 rounded-lg bg-white p-5">
      <div className="flex justify-between items-center">
        <div className=" w-full mx-4">
          <div className="flex justify-between">
            <span>いいね</span>
            <span>{likes}件</span>
          </div>
          <div>
            <p>コメント</p>
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
              })
            }
            disabled={isLiked}
            loading={isMutating}
          >
            {isLiked ? (
              "Thank You !!"
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
