import { getAllArticles } from "@/blogAPI";
import ArticleList from "../components/ArticleList";
import Aside from "../components/Aside";
import React from "react";

const blog = async() => {
  const articles = await getAllArticles();

  return (
    <div className="md:flex">
      <section className="w-full md:w-2/3 flex flex-col items-center px-3">
        <ArticleList articles={articles}/>
      </section>
      <section className="md:w-1/3 flex flex-col items-center px-3 md:pl-6">
        <Aside />
      </section>
    </div>
  );
};

export default blog;
