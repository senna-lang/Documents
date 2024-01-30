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
    <div
      className="my-2 min-h-[500px] translate-y-2 cursor-pointer bg-white transition-transform duration-500 hover:translate-y-[-2] hover:shadow-lg"
      key={article.id}
    >
      <Link
        href={`/articles/${article.slug}`}
        className=" before: relative block pt-[56.25%] before:block before:content-[''] hover:opacity-75"
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
          className=" absolute left-0 top-0 h-full w-full object-cover"
        />
      </Link>
      <div className=" flex flex-col justify-start px-6 pt-6">
        <div className="flex">
          <div className="mr-2 mt-1">
            <BiSolidPurchaseTagAlt />
          </div>
          <div className="grid grid-cols-3 place-items-center sm:grid-cols-4">
            {article.tags.map((tag) => (
              <Link
                href={`/allposts/tag/${tag}/1`}
                className="mr-2 pb-4 font-bold text-blue-600"
                key={tag}
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        <Link
          href={`/articles/${article.slug}`}
          className="min-h-[70px] pb-2 text-xl font-bold text-slate-900 hover:text-gray-700 sm:text-2xl"
        >
          {article.id}
        </Link>

        <Link href={`/articles/${article.slug}`} className="mt-2 h-[110px] pb-10 text-slate-900">
          {article.description}
        </Link>

        <Link href={`/articles/${article.slug}`} className="text-pink-800 hover:text-black">
          続きを読む
        </Link>

        <span className="mb-4 flex justify-end">
          <span className="mr-1 mt-[3.7px] text-xs ">
            <TfiTime />
          </span>
          <p className="text-sm text-slate-900 opacity-70">{article.date}</p>
        </span>
      </div>
    </div>
  );
};

export default ArticleCard;
