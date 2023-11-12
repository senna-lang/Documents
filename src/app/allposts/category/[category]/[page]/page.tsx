import ArticleList from "../../../../components/ArticleList";
import PageNation from "../../../../components/PageNation";
import React from "react";
import { createMetaData } from "@/utils/metaData";
import { getAllPosts } from "@/lib/notion";

const categoryPageList = async ({ params }: { params: { category: string; page: number } }) => {
  const currentCat = params?.category;
  const posts = await getAllPosts();

  const metaData = createMetaData(posts);

  const filteredData: any = metaData.filter((data: any) =>
    data.category.find((cat: string) => cat === currentCat)
  );

  const numberOfPage = Math.floor(filteredData.length / 6) + (filteredData.length % 6 > 0 ? 1 : 0);

  const currentPage: number = params?.page;
  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 6;
  const postsByPage = filteredData.slice(startIndex, endIndex);

  return (
    <div className="h-auto xl:mx-40">
      <section className="w-full items-center px-3 ">
        <div className="text-center my-7">
          <h1 className="text-5xl font-PlayFairDisplay">{currentCat}</h1>
        </div>
        <ArticleList articles={postsByPage} normal={false} />
      </section>
      <PageNation numberOfPage={numberOfPage} tag={currentCat} currentPage={currentPage} />
    </div>
  );
};
export default categoryPageList;
