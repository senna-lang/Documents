import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Image from "next/image";
import { Article } from "@/types";

// const Article = async ({ params }: { params: { id: string } }) => {

//   const API_URL = process.env.NEXT_PUBLIC_API_URL;
//   const res = await fetch(`${API_URL}/api/blog/${params.id}`, { next: {
//     revalidate: 10,
//   } });
//   const detailArticle = await res.json();

//   return (
//     <div className="max-w-3xl mx-auto p-5">
//       <Image
//         src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${detailArticle.id}`}
//         width={1280}
//         height={300}
//         alt=""
//         priority
//       />
//       <h1 className="text-4xl text-center mb-10 mt-10 ">{detailArticle.title}</h1>
//       <div className="text-lg leading-relaxed text-justify">
//         <p>{detailArticle.content}</p>
//       </div>
//       <div className="text-right mt-3">
//         <DeleteButton id={detailArticle.id}/>
//       </div>
//     </div>
//   );
// };

// export default Article;

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
    <section className="container lg:px-2 px-5 h-screen lg:w2/5 mx-auto mt-20 ">
      <h2 className=" w-full text-2xl font-medium">{metaData.id}</h2>
      <div className=" border-b-2 w-1/3 mt-1 border-sky-900"></div>
      <span className=" text-gray-500">Published {metaData.date}</span>
      <br />
      {metaData.tags.map((tag:string) => (
        <p className="text-white bg-sky-900 rounded-xl font-medium mt-2 mr-2 px-2 inline-block" key={metaData.slug}>
          {tag}
        </p>
      ))}
      <div className="mt-10 font-medium">
        {/* {mbString} */}
        <ReactMarkdown >{mbString.parent}</ReactMarkdown>
      </div>
    </section>
  );
};

export default Post;
