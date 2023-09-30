import ArticleList from "../../../../components/ArticleList";
import PageNation from "../../../../components/PageNation";
import React from "react";

const tagPageList = async (context: any) => {
  const currentTag = context.params?.tag;
  // console.log(currentTag)
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/notion`, { next: { revalidate: 10 } });
  const posts = await res.json();

  const metaData = posts.map((post: any) => {
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
      thumb:
      post.properties.Thumb && post.properties.Thumb.files.length > 0
        ? post.properties.Thumb.files[0].file.url
        : null,
    };
    return meta;
  });
  // console.log(metaData);

  const filteredData: any = metaData.filter((data: any) =>
    data.tags.find((tag: string) => tag === currentTag)
  );

  const numberOfPage = Math.floor(filteredData.length / 6) + (filteredData.length % 6 > 0 ? 1 : 0);

  const currentPage: number = context.params?.page;
  // console.log(currentPage);
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
      <PageNation numberOfPage={numberOfPage} tag={currentTag} currentPage={currentPage}/>
    </div>
  );
};

export default tagPageList;
