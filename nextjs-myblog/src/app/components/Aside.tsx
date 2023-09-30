import React from "react";
import ContactCard from "./ContactCard";

const Aside = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api/notion`, { next: { revalidate: 10 } });
  const posts = await res.json();

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
  const slicedTagList = tagList.slice(0, 4);

  return (
    <aside className="w-full">
      <div className="bg-white border rounded p-4 w-full ">
        <h3 className="font-bold text-gray-900 mb-4 text-xl ">Category</h3>
        <div className="grid gap-2 md:grid-cols-2">
          {slicedTagList.map((tag) => (
            <div key={tag} className=" border rounded-md h-10 flex flex-col items-center justify-center hover:bg-slate-300 hover:tracking-widest hover:font-medium cursor-pointer transition-all duration-500">
              <a href={`/allposts/tag/${tag}/1`}>
                {tag}
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
