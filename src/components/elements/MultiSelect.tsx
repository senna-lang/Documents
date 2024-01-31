"use client";
import { MultiSelect } from "@mantine/core";
import { FC } from "react";
import { useState } from "react";
import { Switch } from "@mantine/core";
import { ScrollArea } from "@mantine/core";

type Props = {
  tagList: string[];
};
const TagSearch: FC<Props> = ({ tagList }) => {
  const slicedTagList = tagList.slice(0, 6);
  const TagList = new Array(...slicedTagList);
  const [tag, setTag] = useState<string[]>(TagList);
  const [state, setState] = useState<boolean>(true);

  const changeTagList = (tagArr: string[]) => {
    if (tagArr.length == 0) {
      setTag(slicedTagList);
    } else {
      setTag(tagArr);
    }
  };

  return (
    <div>
      <div className="mb-4 flex items-end justify-between">
        <h3 className="font-sourceCodePro text-xl font-bold text-gray-900">Tags</h3>
        <Switch
          label="All tags"
          onChange={() => {
            setState(!state);
            if (state) {
              setTag(tagList);
            } else {
              setTag(slicedTagList);
            }
          }}
        />
      </div>
      <ScrollArea.Autosize mah={200} offsetScrollbars scrollbarSize={6} scrollHideDelay={500}>
        <div className="mb-2 grid gap-2 md:grid-cols-2">
          {tag.map((tag) => (
            <div
              key={tag}
              className=" flex h-7 cursor-pointer flex-col items-center justify-center rounded-lg border text-sm transition-all duration-500 hover:bg-slate-300 hover:font-medium hover:tracking-widest"
            >
              <a href={`/allposts/tag/${tag}/1`}>{tag}</a>
            </div>
          ))}
        </div>
      </ScrollArea.Autosize>
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
