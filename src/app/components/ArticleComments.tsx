"use client";
import React, { useState } from "react";
import { useLike } from "@/hooks/useLike";
import { Button } from "@mantine/core";

type LikesProps = {
  id: string;
};

const ArticleComments = ({ id }: LikesProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const { data, trigger, isMutating } = useLike(id);

  return (
    <div className=" mt-2 rounded-lg bg-white p-3">
      <Button
        variant="fill"
        color="indigo"
        onClick={() =>
          trigger(null, {
            onSuccess: () => setIsLiked(true),
          })
        }
        disabled={isLiked}
        loading={isMutating}
      >
        Smash the 🧡 button
      </Button>

      <div>
        <p>Likes : {data ? data : 0}</p>
      </div>
    </div>
  );
};

export default ArticleComments;
