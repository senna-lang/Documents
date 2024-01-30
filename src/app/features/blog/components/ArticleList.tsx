import React from "react";
import { Article } from "@/app/types/types";
import ArticleCard from "./ArticleCard";

type ArticleListProps = {
  articles: Article[];
  normal: boolean;
};

const ArticleList = ({ articles, normal }: ArticleListProps) => {
  const style = normal
    ? "items-center sm:grid sm:gap-2 md:grid-cols-2 lg:mb-4n"
    : "grid gap-2 md:grid-cols-3 lg:mb-4";
  return (
    <div>
      <div className={style}>
        {articles.map((article) => (
          <ArticleCard article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
