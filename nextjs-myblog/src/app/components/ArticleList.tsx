import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Article } from "@/types";
import ArticleCard from "./ArticleCard";

type ArticleListProps = {
  articles: Article[];
  normal: boolean;
};

const ArticleList = ({ articles, normal }: ArticleListProps) => {
  return (
    <div>

      <div className="flex flex-col md:flex-row md:justify-between md:flex-wrap  lg:justify-normal lg:mb-4">
        {articles.map((article) => (
          <ArticleCard article={article} key={article.id} normal={normal}/>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
