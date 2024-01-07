import ArticleList from "./components/ArticleList";
import Aside from "./components/Aside";
import React from "react";
import Link from "next/link";
import MainVisual from "./components/MainVisual";
import { createMetaData } from "@/app/utils/metaData";
import { getAllPosts } from "@/app/lib/notion";
import ContactCard from "./components/ContactCard";

const Blog = async () => {
  const posts = await getAllPosts();
  if(!posts) {
    console.log('記事の取得に失敗しました。')
    return
  }
  const postsByPage = posts.slice(0, 6);
  const metaData = createMetaData(postsByPage);

  return (
    <div>
      <MainVisual />
      <div className="h-auto xl:flex lg:mx-28 xl:mx-36">
        <section className="w-full items-center px-3 xl:w-[70%]">
          <div className="text-center my-10">
            <h1 className="text-5xl font-PlayFairDisplay">NEW POSTS</h1>
          </div>
          <ArticleList articles={metaData} normal={true} />
          <div className="text-center mt-5 mb-6 lg:mb-10">
            <Link href={`/allposts/1`}>
              <button className=" relative inline-block bg-black text-white border-black font-semibold py-4 px-16 my-3 mx-auto cursor-pointer transition-all duration-500 hover:bg-opacity-70 hover:text-white hover:tracking-[5px]">
                MORE
              </button>
            </Link>
          </div>
        </section>
        <section className=" flex flex-col items-center lg:mt-32 px-3 xl:w-[30%]">
          <Aside />
          <ContactCard />
        </section>
      </div>
    </div>
  );
};

export default Blog;
