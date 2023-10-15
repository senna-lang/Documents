import React from "react";
import { getAllPosts } from "@/lib/notion";
import ComboBox from "./ComboBox";
import TagSearch from "./TagSearch";

const Aside = async () => {
  const posts = await getAllPosts();

  const getTags: string[] = posts.flatMap((post: any) => {
    const getTag = (tags: any) => {
      const allTags = tags.map((tag: any) => {
        return tag.name;
      });
      return allTags;
    };

    const tags = getTag(post.properties.Tags.multi_select);
    return tags;
  });
  const set = new Set(getTags);
  const tagList: string[] = Array.from(set);

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
      <div className="bg-white border rounded-lg p-4 w-full mb-2">
        <h3 className="font-bold text-gray-900 mb-4 text-xl ">Category</h3>
        <ComboBox catList={slicedCatList} />
      </div>
      <div className="bg-white border rounded-lg p-4 w-full mb-2">
        <h3 className="font-bold text-gray-900 mb-4 text-xl ">Tags</h3>
        <TagSearch tagList={tagList} />
      </div>
    </aside>
  );
};

export default Aside;
