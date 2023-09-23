"use client";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  numberOfPage: number;
  tag: string | null;
};

const PageNation = (props: Props) => {
  const router = useRouter();
  const { numberOfPage, tag } = props;
  let pages: number[] = [];
  let count = 0;
  // console.log(numberOfPage);

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
          <li className=" bg-sky-900 rounded-lg w-6 h-8 relative" key={page}>
            <button
              className=" inline-block text-xs absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-gray-100"
              onClick={
                tag
                  ? () => router.replace(`/allposts/tag/${tag}/${page}`)
                  : () => router.replace(`/allposts/${page}`)
              }
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PageNation;
