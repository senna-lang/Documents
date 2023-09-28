"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/types";
import { useRouter } from "next/navigation";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  const router = useRouter();
  return (
    <article
      className="my-2 bg-white min-h-[500px] cursor-pointer hover:shadow-lg transition-transform duration-500 translate-y-2 hover:translate-y-[-2]"
      key={article.id}
    >
      <div className="hover:opacity-75" onClick={() => router.push(`/articles/${article.slug}`)}>
        <Image
          src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
          width={1280}
          height={300}
          alt=""
          priority
        />
      </div>
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
                key={article.slug}
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>

        <div
          className="text-slate-900 text-3xl font-bold min-h-[80px] hover:text-gray-700 pb-2"
          onClick={() => router.push(`/articles/${article.slug}`)}
        >
          {article.id}
        </div>

        <div
          className="text-slate-900 pb-10 mt-2 h-[120px]"
          onClick={() => router.push(`/articles/${article.slug}`)}
        >
          {article.description}
          {/* {article.description.length > 70 ? article.description.substring(0, 70) + "..." : article.description} */}
        </div>

        <div
          className="text-pink-800 hover:text-black"
          onClick={() => router.push(`/articles/${article.slug}`)}
        >
          続きを読む
        </div>
        <p className="text-sm text-slate-900 text-right pb-4">{article.date}</p>
      </div>
    </article>
  );
};

export default ArticleCard;
