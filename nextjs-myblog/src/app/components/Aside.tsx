import React from "react";
import ContactCard from "./ContactCard";
import { getAllPosts } from "@/lib/notion";

const Aside = async () => {
  const posts = await getAllPosts()

  // const getTags: string[] = posts.flatMap((post: any) => {
  //   const getTag = (tags: any) => {
  //     const allTags = tags.map((tag: any) => {
  //       return tag.name;
  //     });
  //     return allTags;
  //   };

  //   const tags = getTag(post.properties.Tags.multi_select);
  //   return tags;
  // });
  // const set = new Set(getTags);
  // const tagList: string[] = Array.from(set);
  // const slicedTagList = tagList.slice(0, 4);

  const getCat: string[] = posts.flatMap((post: any) => {
    const getCat = (cat: any) => {
      const allCat = cat.map((cat: any) => {
        return cat.name;
      });
      return allCat;
    };

    const cat = getCat(post.properties.Category.multi_select);
    return cat;
  });
  const setCat = new Set(getCat);
  const catList: string[] = Array.from(setCat);
  const slicedCatList = catList.slice(0, 4);

  return (
    <aside className="w-full">
      <div className="bg-white border rounded-lg p-4 w-full ">
        <h3 className="font-bold text-gray-900 mb-4 text-xl ">Category</h3>
        <div className="grid gap-2 md:grid-cols-2">
          {slicedCatList.map((cat) => (
            <div key={cat} className=" border rounded-lg h-10 flex flex-col items-center justify-center hover:bg-slate-300 hover:tracking-widest hover:font-medium cursor-pointer transition-all duration-500">
              <a href={`/allposts/category/${cat}/1`}>
                {cat}
              </a>
            </div>
          ))}
        </div>
      </div>
      <ContactCard />
    </aside>
  );
};

export default Aside;
