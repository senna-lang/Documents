import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/types";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className=" my-2 mx-2 w-[47%] hover:shadow-lg  transition-transform duration-500 translate-y-2 hover:translate-y-[-2] " key={article.id}>
      <Link href={`articles/${article.id}`} className="hover:opacity-75">
        <Image
          src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
          width={1280}
          height={300}
          alt=""
          priority
        />
      </Link>
      <div className="bg-white flex flex-col justify-start p-6">
        <Link href="#" className="text-blue-700 pb-4 font-bold">
          Technology
        </Link>
        <div className="min-h-[72px]">
          <Link
            href={`articles/${article.id}`}
            className="text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4"
          >
            {article.title}
          </Link>
        </div>

        <Link href={`articles/${article.id}`} className="text-slate-900 pb-6 mt-2">
          {article.content.length > 70 ? article.content.substring(0, 70) + "..." : article.content}
        </Link>
        <Link href={`articles/${article.id}`} className="text-pink-800 hover:text-black">
          続きを読む
        </Link>
        <p className="text-sm pb-3 text-slate-900 text-right">{article.createdAt}</p>
      </div>
    </article>
  );
};

export default ArticleCard;
