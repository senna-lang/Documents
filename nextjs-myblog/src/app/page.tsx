// "use client";

import ArticleList from "./components/ArticleList";
import Aside from "./components/Aside";
import React from "react";
import Link from "next/link";
import MainVisual from "./components/MainVisual";

const blog = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/notion`, { next: { revalidate: 10 } });
  const posts = await res.json();
  const sixPosts = posts.slice(0, 6);

  // console.log(posts);
  const metaData = sixPosts.map((post: any) => {
    const getTags = (tags: any) => {
      const allTags = tags.map((tag: any) => {
        return tag.name;
      });
      return allTags;
    };

    const meta = {
      id: post.properties.Name.title[0].plain_text,
      description: post.properties.Description.rich_text[0].plain_text,
      date: post.properties.Date.date.start,
      slug: post.properties.Slug.rich_text[0].plain_text,
      tags: getTags(post.properties.Tags.multi_select),
    };
    return meta;
  });
  // console.log(metaData);

  return (
    <div>
      <MainVisual/>
      <div className="h-auto xl:flex xl:mx-36">
        <section className="w-full items-center px-3 xl:w-[70%]">
          <div className="text-center my-8">
            <h1 className="text-5xl font-playfairDisplay ">NEW POSTS</h1>
          </div>
          <ArticleList articles={metaData} normal={true} />
          <div className="text-center mt-5 mb-10">
            <Link href={`/allposts`}>
              <button className=" relative inline-block bg-black text-white border-black font-semibold py-4 px-16 my-3 mx-auto cursor-pointer transition-all duration-500 hover:bg-opacity-70 hover:text-white hover:tracking-[5px]">
                MORE
              </button>
            </Link>
          </div>
        </section>
        <section className=" flex flex-col items-center mt-32 px-3 xl:w-[30%]">
          <Aside />
        </section>
      </div>
    </div>
  );
};

export default blog;
