import React from "react";
import Aside from "@/app/components/Aside";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Link from "next/link";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";

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
    <div>
      <div className=" text-center flex flex-col items-center my-9">
        <h2 className=" w-full text-3xl font-bold">{metaData.id}</h2>
        <p className=" text-gray-500 mt-6">Published {metaData.date}</p>
        <div className="flex mb-12">
          <div className="mt-3 mr-2">
            <BiSolidPurchaseTagAlt />
          </div>
          {metaData.tags.map((tag: string) => (
            <p className="text-black border rounded-xl mt-2 px-2 inline-block" key={metaData.slug}>
              <Link href={`/allposts/tag/${tag}/1`}>{tag}</Link>
            </p>
          ))}
        </div>
      </div>

      <div className=" h-auto mb-6 xl:flex xl:mx-36">
        <div className="news-detail bg-white w-full items-center px-3 xl:w-[70%]">
          <div className="mt-2 font-medium">
            <ReactMarkdown>{mbString.parent}</ReactMarkdown>
          </div>
        </div>
        <section className=" flex flex-col items-center px-3 xl:w-[30%]">
          <Aside />
        </section>
      </div>
    </div>
  );
};

export default Post;
