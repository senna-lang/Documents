import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Article } from "@/types";
import ArticleCard from "./ArticleCard";

type ArticleListProps = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div>
      <div className="text-center my-7">
        <h1 className="text-5xl font-playfairDisplay ">NEW POSTS</h1>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between md:flex-wrap lg:justify-normal lg:mb-4">
        {articles.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
