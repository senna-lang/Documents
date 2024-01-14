import React from "react";
import { getAllPosts } from "@/app/lib/notion";
import ComboBox from "./ComboBox";
import TagSearch from "./TagSearch";

type Tag = {
  id: string;
  name: string;
  color: string;
};

const Aside = async () => {
  const posts = await getAllPosts();

  if(!posts){
    console.log('エラーが発生しました。')
    return
  }

  //すべての投稿からタグを取得
  const getTags: string[] = posts.flatMap((post: any) => {
    const getTag = (tags: Tag[]) => {
      const allTags = tags.map((tag: Tag) => {
        return tag.name;
      });
      return allTags;
    };

    const tags = getTag(post.properties.Tags.multi_select);
    return tags;
  });
  const set = new Set(getTags);
  const tagList: string[] = Array.from(set);

  //すべての投稿からカテゴリを取得
  const getCat: string[] = posts.flatMap((post: any) => {
    const getCat = (cat: Tag[]) => {
      const allCat = cat.map((cat: Tag) => {
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
        <h3 className=" font-bold text-gray-900 mb-4 text-xl font-sourceCodePro">Category</h3>
        <ComboBox catList={slicedCatList} />
      </div>
      <div className="bg-white border rounded-lg p-4 w-full mb-2">
        <TagSearch tagList={tagList} />
      </div>
    </aside>
  );
};

export default Aside;
