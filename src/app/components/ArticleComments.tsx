"use client";
import React, { useState } from "react";
import { useLike } from "@/hooks/useLike";

type LikesProps = {
  id: string;
};

const ArticleComments = ({ id }: LikesProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const { data, trigger, isMutating } = useLike(id);
  console.log(data)

  return (
    <div className=" mt-2 rounded-lg bg-white p-3">
      <div className={isLiked ? "bg-orange-200 rounded-lg" : " bg-orange-400 rounded-lg"}>
        <button className="text-xl m-4  text-white" onClick={() => trigger()} disabled={isLiked}>
          Smash the 🧡 button
        </button>
      </div>

      <div>
        <p>Likes : {data ? data : 0}</p>
      </div>
    </div>
  );
};

export default ArticleComments;
