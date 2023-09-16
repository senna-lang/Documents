import React from "react";
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
  // console.log(detailArticle);

  return (
    <section className="container lg:px-2 px-5 h-screen lg:w2/5 mx-auto mt-20 ">
      <h2 className=" w-full text-2xl font-medium">タイトル</h2>
      <div className=" border-b-2 w-1/3 mt-1 border-sky-900"></div>
      <span className=" text-gray-500">date</span>
      <br />
      <p className="text-white bg-sky-900 rounded-xl font-medium mt-2 px-2 inline-block">tag</p>
      <div className="mt-10 font-medium"></div>
    </section>
  );
};

export default Post;
