"use client";
import React, { useState } from "react";
import { useComment } from "@/hooks/useComment";


type CommentProps = {
  id: string;
};

const CommentForm = ({ id }: CommentProps) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [comment, setComment] = useState('');
  const { trigger, isMutating } = useComment(id,comment);

  
  const handleCommentChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
   setComment(e.target.value)
  }

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
   e.preventDefault();
   trigger();
   setComment('');
  }


  return (
    <div className=" mt-2 rounded-lg bg-white p-3">
      <form onSubmit={handleSubmit}>
        <label>
          コメント:
          <textarea value={comment} onChange={handleCommentChange} />
        </label>
        <button type="submit">コメントを投稿</button>
      </form>
    </div>
  );
};

export default CommentForm;
