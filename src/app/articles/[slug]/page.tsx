import React from "react";
import Aside from "@/app/components/Aside";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import type { ExtraProps } from "react-markdown";
import type { HTMLAttributes } from "react";
import Link from "next/link";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import TocBot from "@/app/components/TocBot";
import rehypeSlug from "rehype-slug";
import { getPostDetail, getAllPosts, getPage } from "@/app/lib/notion";
import { createMetaData } from "@/app/utils/metaData";
import { Article,} from "@/app/types/types";
import ArticleComments from "@/app/components/ArticleMeta";

type Tag = {
  id: string;
  name: string;
  color: string;
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const metaData = createMetaData(posts);
  return metaData.map((data: Article) => ({
    slug: data.slug,
  }));
}

const Post = async ({ params }: { params: { slug: string } }) => {
  const detailArticle = await getPostDetail(params.slug) ;

  if (!detailArticle) {
    console.log("エラーが発生しました。");
    return;
  }

  const { page, mbString } = detailArticle;

  const createMetaData = (page:any) => {
    const getTags = (tags: Tag[]) => {
      const allTags = tags.map((tag: Tag) => {
        return tag.name;
      });
      return allTags;
    };
    const meta = {
      id: page.properties.Name.title[0].plain_text,
      description: page.properties.Description.rich_text[0].plain_text,
      date: page.properties.Date.date.start,
      slug: page.properties.Slug.rich_text[0].plain_text,
      tags: getTags(page.properties.Tags.multi_select),
      likes: page.properties.Likes.number,
    };
    return meta;
  };

  const metaData = createMetaData(page);

  return (
    <div>
      <div className=" text-center flex flex-col items-center">
        <h1 className=" w-full text-3xl font-bold">{metaData.id}</h1>
        <p className=" text-gray-500 mt-6">Published {metaData.date}</p>
        <div className="flex mb-12">
          <div className="mt-3 mr-2">
            <BiSolidPurchaseTagAlt />
          </div>
          {metaData.tags.map((tag: string) => (
            <p className="text-black border rounded-xl mt-2 px-2 inline-block" key={tag}>
              <Link href={`/allposts/tag/${tag}/1`}>{tag}</Link>
            </p>
          ))}
        </div>
      </div>

      <div className=" h-auto mb-6 xl:flex xl:mx-36">
        <div className="post-detail bg-white rounded-lg w-full items-center px-7 xl:w-[70%]">
          <div className="m-3 font-medium">
            <ReactMarkdown
              rehypePlugins={[rehypeSlug]}
              components={{
                code(props: HTMLAttributes<HTMLElement> & ExtraProps) {
                  const { children, className, node, ...rest } = props;
                  const match = /language-(\w+)/.exec(className || "");
                  return match ? (
                    <SyntaxHighlighter PreTag="code" language={match[1]} style={atomOneDark}>
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code {...rest} className={className}>
                      {children}
                    </code>
                  );
                },
              }}
            >
              {mbString.parent}
            </ReactMarkdown>
          </div>
        </div>
        <section className=" flex flex-col items-center px-3 xl:w-[30%]">
          <Aside />
          <div className=" mb-4 sticky top-8 left-0 w-full flex flex-col justify-center">
            <TocBot />
            <ArticleComments id={detailArticle.page.id} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Post;
