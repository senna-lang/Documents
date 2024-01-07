import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/app/types/types";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import { TfiTime } from "react-icons/tfi";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article
      className="my-2 bg-white min-h-[500px] cursor-pointer hover:shadow-lg transition-transform duration-500 translate-y-2 hover:translate-y-[-2]"
      key={article.id}
    >
      <Link
        href={`/articles/${article.slug}`}
        className=" block hover:opacity-75 relative before:content-[''] before:block before: pt-[56.25%]"
      >
        <Image
          src={
            article.thumb
              ? article.thumb
              : `https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`
          }
          width={1280}
          height={300}
          alt=""
          priority
          className=" absolute top-0 left-0 w-full h-full object-cover"
        />
      </Link>
      <div className=" flex flex-col justify-start pt-6 px-6">
        <div className="flex">
          <div className="mt-1 mr-2">
            <BiSolidPurchaseTagAlt />
          </div>
          <div className="flex">
            {article.tags.map((tag) => (
              <Link
                href={`/allposts/tag/${tag}/1`}
                className="text-blue-600 pb-4 font-bold mr-2"
                key={tag}
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        <Link
          href={`/articles/${article.slug}`}
          className="text-slate-900 text-2xl font-bold min-h-[70px] hover:text-gray-700 pb-2"
        >
          {article.id}
        </Link>

        <Link href={`/articles/${article.slug}`} className="text-slate-900 pb-10 mt-2 h-[110px]">
          {article.description}
        </Link>

        <Link href={`/articles/${article.slug}`} className="text-pink-800 hover:text-black">
          続きを読む
        </Link>

        <span className="flex justify-end mb-4">
          <span className="mr-1 mt-[3.7px] text-xs ">
            <TfiTime />
          </span>
          <p className="text-sm text-slate-900 opacity-70">{article.date}</p>
        </span>
      </div>
    </article>
  );
};

export default ArticleCard;
