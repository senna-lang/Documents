"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  numberOfPage: number;
  tag: string | null;
  currentPage: number;
};

const PageNation = (props: Props) => {
  const router = useRouter();
  const { numberOfPage, tag , currentPage} = props;
  let pages: number[] = [];
  let count = 0;
  console.log(tag);

  if (numberOfPage == 1) {
    for (let i = numberOfPage; count < numberOfPage; i++) {
      pages.push(i);
      count++;
    }
  } else {
    for (let i = numberOfPage - 1; count < numberOfPage; i++) {
      pages.push(i);
      count++;
    }
  }

  return (
    <section className="mb-8 lg:w-1/2 mx-auto rounded-md p-5">
      <ul className="flex items-center justify-center gap-4">
        {pages.map((page) => (
          <li className={`bg-black rounded-full w-8 h-8 relative cursor-pointer ${page==currentPage ? '': 'opacity-20'}`} onClick={
            tag
              ? () => router.replace(`/allposts/tag/${tag}/${page}`)
              : () => router.replace(`/allposts/${page}`)
          } key={page}>
            <p
              className="block text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-white"
              
            >
              {page}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PageNation;
