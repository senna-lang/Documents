"use client";
import React from "react";
import axios from "axios";

type LikesProps = {
  likes: any;
  id: string;
};

const ArticleComments = ({ likes, id }: LikesProps) => {
  const updateLikes = (id: string) => {
    axios.patch(`/api/likes/${id}`)
      .then((response) => {
        console.log("リクエストが成功しました:", response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.error("サーバーエラー:", error.response.status, error.response.data);
        } else if (error.request) {
          console.error(
            "リクエストが送信されましたが、レスポンスがありませんでした:",
            error.request
          );
        } else {
          console.error("エラーが発生しました:", error.message);
        }
      });
  };

  

  return (
    <div className=" mt-2 rounded-lg bg-white p-3">
      <div className=" bg-orange-400 rounded-lg">
        <button
          className="text-xl m-4  text-white"
          onClick={() => updateLikes(id)}
        >
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
