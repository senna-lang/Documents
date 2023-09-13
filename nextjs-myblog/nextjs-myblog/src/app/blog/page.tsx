import { getAllArticles } from "@/blogAPI";
import ArticleList from "../components/ArticleList";
import Aside from "../components/Aside";
import React from "react";
import { supabase } from "@/utils/supabaseClient";

const blog = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/blog`, { cache: "no-store" });
  const articles = await res.json();

  return (
    <div className="h-auto xl:flex xl:mx-36">
      <section className="w-full items-center px-3 xl:w-[70%]">
        <ArticleList articles={articles} />
      </section>
      <section className=" flex flex-col items-center px-3 xl:w-[30%]">
        <Aside />
      </section>
    </div>
  );
};

export default blog;
