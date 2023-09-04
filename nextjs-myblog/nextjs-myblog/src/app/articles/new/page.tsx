'use client'

import { createArticle } from "@/blogAPI";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CreateNewPage = () => {
  const router = useRouter();
  const [id,setId] = useState<string>('');
  const [title,setTitle] = useState<string>('');
  const [content,setContent] = useState<string>('');



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await createArticle(id,title,content);
    router.push('/blog');
    router.refresh();
  }

  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">ブログ新規作成</h2>

      <form className="bg-slate-200 p-6 rounded shadow-lg" onSubmit={handleSubmit}>
        <div className="mb-4 ">
          <label className="text-gray-700 text-sm font-bold mb-2">URL</label>
          <input
            type="text"
            onChange={(e) => setId(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          />
        </div>
        <div className="mb-4 ">
          <label className="text-gray-700 text-sm font-bold mb-2">タイトル</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          />
        </div>
        <div className="mb-4 ">
          <label className="text-gray-700 text-sm font-bold mb-2">本文</label>
          <textarea  onChange={(e) => setContent(e.target.value)} className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" />
        </div>

        <button type="submit" className="py-2 px-4 border rounded-md !bg-orange-300">
          投稿
        </button>
      </form>
    </div>
  );
};

export default CreateNewPage;
