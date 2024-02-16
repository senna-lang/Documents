import Link from "next/link";
import notFound from "../../not-found";
import Aside from "@/components/layouts/Aside";
import TocBot from "@/components/elements/TocBot";
import * as blog from "@/features/blog/components/index";
import { createMetaData } from "@/common/utils/metaData";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { getPostDetail, getAllPosts } from "@/common/lib/notion";
import rehypeSlug from "rehype-slug";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import type { ExtraProps } from "react-markdown";
import type { HTMLAttributes } from "react";
import { Article } from "@/common/types/types";

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
  const detailArticle = await getPostDetail(params.slug);

  if (!detailArticle) {
    notFound();
  }

  const { page, mbString } = detailArticle;

  const createMetaData = (page: any) => {
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
      <div className=" flex flex-col items-center text-center">
        <h1 className=" w-full text-3xl font-bold">{metaData.id}</h1>
        <p className=" mt-6 text-gray-500">Published {metaData.date}</p>
        <div className="mb-12 flex">
          <div className="mr-2 mt-3">
            <BiSolidPurchaseTagAlt />
          </div>
          {metaData.tags.map((tag: string) => (
            <p className="mt-2 inline-block rounded-xl border px-2 text-black" key={tag}>
              <Link href={`/allposts/tag/${tag}/1`}>{tag}</Link>
            </p>
          ))}
        </div>
      </div>

      <div className=" mb-6 h-auto xl:mx-36 xl:flex">
        <div className="post-detail w-full items-center rounded-lg bg-white px-3 sm:px-7 xl:w-[70%]">
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
          <div className=" sticky left-0 top-8 mb-4 flex w-full flex-col justify-center">
            <TocBot />
            <blog.ArticleComments id={detailArticle.page.id} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Post;
