"use client";
import React from "react";
import { useRouter } from "next/navigation";

type Props = {
  numberOfPage: number;
  tag: string | null;
  currentPage: number;
};

const PageNation = (props: Props) => {
  const router = useRouter();
  const { numberOfPage, tag, currentPage } = props;
  let pages: number[] = [];
  let count = 0;

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
    <section className="mx-auto mb-8 rounded-md p-5 lg:w-1/2">
      <ul className="flex items-center justify-center gap-4">
        {pages.map((page) => (
          <li
            className={`relative h-9 w-9 cursor-pointer rounded-full bg-black ${page == currentPage ? "" : "opacity-20 duration-300 hover:opacity-100"}`}
            onClick={
              tag
                ? () => router.replace(`/allposts/tag/${tag}/${page}`)
                : () => router.replace(`/allposts/${page}`)
            }
            key={page}
          >
            <p className="absolute left-2/4 top-2/4 block -translate-x-2/4 -translate-y-2/4 text-xs text-white">
              {page}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PageNation;
