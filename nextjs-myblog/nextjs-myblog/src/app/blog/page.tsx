// "use client";

import ArticleList from "../components/ArticleList";
import Aside from "../components/Aside";
import React from "react";

const blog = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res2 = await fetch(`${API_URL}/api/blog`, { cache: "no-store" });
  const articles = await res2.json();

  const res = await fetch(`${API_URL}/api/notion`, { next: { revalidate: 10 } });
  const posts = await res.json();
  const metaData = posts.map((post:any) => {
    const meta = {
      id: post.properties.Name.title[0].plain_text,
      description: post.properties.Description.rich_text[0].plain_text,
      date: post.properties.Date.date.start,
      slug: post.properties.Slug.rich_text[0].plain_text,
    };
    return meta;
  });
  console.log(metaData);

  return (
    <div className="h-auto xl:flex xl:mx-36">
      <section className="w-full items-center px-3 xl:w-[70%]">
        <ArticleList articles={articles} />
      </section>
      <section className=" flex flex-col items-center px-3 xl:w-[30%]">
        <Aside />
      </section>
    </div>
  );
};

export default blog;
