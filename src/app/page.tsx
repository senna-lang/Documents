import React from "react";
import Link from "next/link";
import MainVisual from "./components/layouts/MainVisual";
import Aside from "./components/layouts/Aside";
import * as blog from './features/blog/components/index';
import { createMetaData } from "@/app/utils/metaData";
import { getAllPosts } from "@/app/lib/notion";

const Blog = async () => {
  const posts = await getAllPosts();
  if (!posts) {
    console.log("記事の取得に失敗しました。");
    return;
  }
  const postsByPage = posts.slice(0, 6);
  const metaData = createMetaData(postsByPage);

  return (
    <div>
      <MainVisual />
      <div className="h-auto lg:mx-28 xl:mx-36 xl:flex">
        <section className="w-full items-center px-3 xl:w-[70%]">
          <div className="my-10 text-center">
            <h1 className="font-PlayFairDisplay text-5xl">NEW POSTS</h1>
          </div>
          <blog.ArticleList articles={metaData} normal={true} />
          <div className="mb-6 mt-5 text-center lg:mb-10">
            <Link href={`/allposts/1`}>
              <button className=" relative mx-auto my-3 inline-block cursor-pointer border-black bg-black px-16 py-4 font-semibold text-white transition-all duration-500 hover:bg-opacity-70 hover:tracking-[5px] hover:text-white">
                MORE
              </button>
            </Link>
          </div>
        </section>
        <section className=" flex flex-col items-center px-3 lg:mt-32 xl:w-[30%]">
          <Aside />
          <blog.ContactCard />
        </section>
      </div>
    </div>
  );
};

export default Blog;
