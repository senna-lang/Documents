import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Article } from "@/types";

type ArticleCardProps = {
  article: Article;
  normal:boolean
};

const ArticleCard = ({ article,normal }: ArticleCardProps,) => {
  const twoCol = "my-2 mx-2 bg-white min-h-[500px] hover:shadow-lg  transition-transform duration-500 translate-y-2 hover:translate-y-[-2] md:w-[47%] "
  const threeCol= "my-2 mx-2 bg-white min-h-[500px] hover:shadow-lg  transition-transform duration-500 translate-y-2 hover:translate-y-[-2] md:w-[30%] "
  const style = normal ? twoCol :threeCol;
  return (
    <article
      className={style}
      key={article.id}
    >
      <Link href={`articles/${article.slug}`} className="hover:opacity-75">
        <Image
          src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
          width={1280}
          height={300}
          alt=""
          priority
        />
      </Link>
      <div className=" flex flex-col justify-start pt-6 px-6">
        <div className="flex">
          {article.tags.map((tag) => (
            <Link href="#" className="text-blue-700 pb-4 font-bold mr-2" key={article.slug}>
              {tag}
            </Link>
          ))}
        </div>

        <Link
          href={`articles/${article.slug}`}
          className="text-slate-900 text-3xl font-bold min-h-[80px] hover:text-gray-700 pb-2"
        >
          {article.id}
        </Link>

        <Link href={`articles/${article.slug}`} className="text-slate-900 pb-10 mt-2 h-[120px]">
          {article.description}
          {/* {article.description.length > 70 ? article.description.substring(0, 70) + "..." : article.description} */}
        </Link>

        <Link href={`articles/${article.slug}`} className="text-pink-800 hover:text-black">
          続きを読む
        </Link>
        <p className="text-sm text-slate-900 text-right pb-4">{article.date}</p>
      </div>
    </article>
  );
};

export default ArticleCard;
