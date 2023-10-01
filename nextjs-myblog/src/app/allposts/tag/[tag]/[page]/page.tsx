import ArticleList from "../../../../components/ArticleList";
import PageNation from "../../../../components/PageNation";
import React from "react";
import { createMetaData } from "@/utils/metaData";

const tagPageList = async (context: any) => {
  const currentTag = context.params?.tag;
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/notion`, { next: { revalidate: 10 } });
  const posts = await res.json();

  const metaData = createMetaData(posts);

  const filteredData: any = metaData.filter((data: any) =>
    data.tags.find((tag: string) => tag === currentTag)
  );

  const numberOfPage = Math.floor(filteredData.length / 6) + (filteredData.length % 6 > 0 ? 1 : 0);

  const currentPage: number = context.params?.page;
  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 6;
  const postsByPage = filteredData.slice(startIndex, endIndex);

  return (
    <div className="h-auto xl:mx-40">
      <section className="w-full items-center px-3 ">
        <div className="text-center my-7">
          <h1 className="text-5xl font-playfairDisplay ">{currentTag}</h1>
        </div>
        <ArticleList articles={postsByPage} normal={false} />
      </section>
      <PageNation numberOfPage={numberOfPage} tag={currentTag} currentPage={currentPage} />
    </div>
  );
};

export default tagPageList;
