

import ArticleList from "../components/ArticleList";
import PageNation from "../components/PageNation";
import React from "react";

const allPosts = async (context:any) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/notion`, { next: { revalidate: 10 } });
  const posts = await res.json();
  const numberOfPage = Math.floor(posts.length / 6) + (posts.length % 6 > 0 ? 1 : 0);
  const postsByPage = posts.slice(0,6);


  // console.log(posts);
  const metaData = postsByPage.map((post: any) => {
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
  

  return (
    <div className="h-auto xl:mx-40">
      <section className="w-full items-center px-3 ">
        <div className="text-center my-7">
          <h1 className="text-5xl font-playfairDisplay ">All POSTS</h1>
        </div>
        <ArticleList articles={metaData} normal={false} />
      </section>
        <PageNation numberOfPage={numberOfPage} tag={null}/>
    </div>
  );
};

export default allPosts;
