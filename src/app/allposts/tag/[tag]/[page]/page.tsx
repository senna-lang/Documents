import ArticleList from "../../../../components/ArticleList";
import PageNation from "../../../../components/PageNation";
import React from "react";
import { createMetaData } from "@/app/utils/metaData";
import { getAllPosts } from "@/app/lib/notion";
import { Article } from "@/app/types/types";

const tagPageList = async ({ params }: { params: { tag: string; page: number } }) => {
  const currentTag = params?.tag;
  const posts = await getAllPosts();

  const metaData = createMetaData(posts);

  //タグでフィルター
  const filteredData = metaData.filter((data: Article) =>
    data.tags.find((tag: string) => tag === currentTag)
  );

  //記事を最新の６つまでに
  const numberOfPage = Math.floor(filteredData.length / 6) + (filteredData.length % 6 > 0 ? 1 : 0);
  const currentPage: number = params?.page;
  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 6;
  const postsByPage = filteredData.slice(startIndex, endIndex);

  return (
    <div className="h-auto xl:mx-40">
      <section className="w-full items-center px-3 ">
        <div className="my-7 text-center">
          <h1 className="font-PlayFairDisplay text-5xl">{currentTag}</h1>
        </div>
        <ArticleList articles={postsByPage} normal={false} />
      </section>
      <PageNation numberOfPage={numberOfPage} tag={currentTag} currentPage={currentPage} />
    </div>
  );
};

export default tagPageList;
