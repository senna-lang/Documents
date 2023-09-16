import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/types";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article
      className="my-2 mx-2 bg-white min-h-[500px] hover:shadow-lg  transition-transform duration-500 translate-y-2 hover:translate-y-[-2] md:w-[47%] "
      key={article.id}
    >
      <Link href={`articles/${article.id}`} className="hover:opacity-75">
        <Image
          src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
          width={1280}
          height={300}
          alt=""
          priority
        />
      </Link>
      <div className=" flex flex-col justify-start pt-6 px-6">
        <Link href="#" className="text-blue-700 pb-4 font-bold">
          {article.tags}
        </Link>

        <Link
          href={`articles/${article.id}`}
          className="text-slate-900 text-3xl font-bold min-h-[80px] hover:text-gray-700 pb-2"
        >
          {article.id}
        </Link>

        <Link href={`articles/${article.id}`} className="text-slate-900 pb-10 mt-2 h-[120px]">
          {article.description}
          {/* {article.description.length > 70 ? article.description.substring(0, 70) + "..." : article.description} */}
        </Link>
        
          <Link href={`articles/${article.id}`} className="text-pink-800 hover:text-black">
            続きを読む
          </Link>
          <p className="text-sm text-slate-900 text-right">{article.date}</p>
        
      </div>
    </article>
  );
};

export default ArticleCard;
