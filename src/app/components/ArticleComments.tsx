"use client";
import React from "react";
import { updateLikes } from "@/lib/notion";

type LikesProps = {
  likes: any;
  id: string;
};

const ArticleComments = ({ likes, id }: LikesProps) => {
  const handleLikes = () => {
    updateLikes(id);
  };

  return (
    <div className=" mt-2 rounded-lg bg-white p-3">
      <div className=" bg-orange-400 rounded-lg">
        <button className="text-xl m-4  text-white" onClick={() => handleLikes()}>
          Smash the 🧡 button
        </button>
      </div>

      <div>
        <p>Likes{likes}</p>
      </div>
    </div>
  );
};

export default ArticleComments;
