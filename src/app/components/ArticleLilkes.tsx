"use client";
import React, { useState } from "react";
import { useLike } from "@/app/hooks/useLike";
import { Button } from "@mantine/core";
import { FcLike } from "react-icons/fc";

type LikesProps = {
  id: string;
};

const ArticleComments = ({ id }: LikesProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const { data, trigger, isMutating } = useLike(id);

  return (
    <div className="flex justify-between items-center mt-2 rounded-lg bg-white p-3">
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
            <span className=" mr-1">
              <FcLike />
            </span>
            + 1 ?
          </>
        )}
      </Button>
    </div>
  );
};

export default ArticleComments;
