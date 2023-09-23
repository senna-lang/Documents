import React from "react";
import ContactCard from "./ContactCard";

const Aside = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/notion`, { next: { revalidate: 10 } });
  const posts = await res.json();

  const getTags:string[] = posts.flatMap((post: any) => {
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
  const tagList:string[] = Array.from(set);
  const slicedTagList = tagList.slice(0,4);
  

  return (
    <aside className="w-full">
      <div className="bg-white border rounded p-4 mt-8 w-full">
        <h3 className="font-bold text-gray-900 mb-2">Category</h3>
        <ul className="text-gray-600 mt-2">
          {slicedTagList.map((tag) => (
            <li key={tag}>
              <a href={`/allposts/tag/${tag}/1`}>{tag}</a>
            </li>
          ))}
        </ul>
      </div>
      <ContactCard />
    </aside>
  );
};

export default Aside;
