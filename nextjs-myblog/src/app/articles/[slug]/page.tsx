import React from "react";
import Aside from "@/app/components/Aside";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Link from "next/link";

const Post = async ({ params }: { params: { slug: string } }) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/notion/${params.slug}`, { next: { revalidate: 10 } });
  if (!res.ok) {
    throw new Error("Failed to fetch article");
  }
  const detailArticle = await res.json();
  const { page, mbString } = detailArticle;
  // console.log(mbString.parent);

  const createMetaData = (page: any) => {
    const getTags = (tags: any) => {
      const allTags = tags.map((tag: any) => {
        return tag.name;
      });
      return allTags;
    };
    const meta = {
      id: page.properties.Name.title[0].plain_text,
      description: page.properties.Description.rich_text[0].plain_text,
      date: page.properties.Date.date.start,
      slug: page.properties.Slug.rich_text[0].plain_text,
      tags: getTags(page.properties.Tags.multi_select),
    };
    return meta;
  };

  const metaData = createMetaData(page);
  // console.log(metaData);

  return (

    <div className=" h-auto xl:flex xl:mx-36">
      <div className="news-detail w-full items-center px-3 xl:w-[70%]">
        <h2 className=" w-full text-2xl font-medium">{metaData.id}</h2>
        <div className=" border-b-2 w-1/3 mt-1 border-sky-900"></div>
        <span className=" text-gray-500">Published {metaData.date}</span>
        <br />
        {metaData.tags.map((tag: string) => (
          <p
            className="text-white bg-sky-900 rounded-xl font-medium mt-2 mr-2 px-2 inline-block"
            key={metaData.slug}
          >
            <Link href={`/allposts/tag/${tag}/1`}>{tag}</Link>
          </p>
        ))}
        <div className="mt-10 font-medium">
          <ReactMarkdown>{mbString.parent}</ReactMarkdown>
        </div>
      </div>
      <section className=" flex flex-col items-center px-3 xl:w-[30%]">
        <Aside />
      </section>
    </div>
  );
};

export default Post;
