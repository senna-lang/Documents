"use client";
import { MultiSelect } from "@mantine/core";
import { FC } from "react";
import { useState } from "react";

type Props = {
  tagList: string[];
};
const TagSearch: FC<Props> = ({ tagList }) => {
  const slicedTagList = tagList.slice(0, 4);
  const TagList = new Array(...slicedTagList);
  const [tag, setTag] = useState<string[]>(TagList);

  const changeTagList = (tagArr: string[]) => {
    console.log(tagArr.length);
    if (tagArr.length == 0) {
      setTag(slicedTagList);
    } else {
      setTag(tagArr);
    }
  };

  return (
    <div>
      <div className="grid gap-2 mb-2 md:grid-cols-2">
        {tag.map((tag) => (
          <div
            key={tag}
            className=" border rounded-lg h-10 flex flex-col items-center justify-center hover:bg-slate-300 hover:tracking-widest hover:font-medium cursor-pointer transition-all duration-500"
          >
            <a href={`/allposts/tag/${tag}/1`}>{tag}</a>
          </div>
        ))}
      </div>
      <MultiSelect
        label="Other tags "
        placeholder="Search tag"
        data={tagList}
        pointer={true}
        maxValues={4}
        withErrorStyles={true}
        searchable={true}
        onChange={(val) => {
          changeTagList(val);
        }}
      />
    </div>
  );
};

export default TagSearch;
