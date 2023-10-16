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
  const [state, setState] = useState(true);

  const changeTagList = (tagArr: string[]) => {
    if (tagArr.length == 0) {
      setTag(slicedTagList);
    } else {
      setTag(tagArr);
    }
  };

  return (
    <div>
      <div className="flex items-end mb-4 justify-between">
        <h3 className="font-bold text-gray-900 text-xl font-sourceCodePro">Tags</h3>
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
        <div className="grid gap-2 mb-2 md:grid-cols-2">
          {tag.map((tag) => (
            <div
              key={tag}
              className=" border rounded-lg h-7 text-sm flex flex-col items-center justify-center hover:bg-slate-300 hover:tracking-widest hover:font-medium cursor-pointer transition-all duration-500"
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
