import PageNation from "@/components/elements/PageNation";
import * as blog from "@/features/blog/components/index";
import { createMetaData } from "@/common/utils/metaData";
import { getAllPosts } from "@/common/lib/notion";

const BlogPageList = async ({ params }: { params: { page: number } }) => {
  const posts = await getAllPosts();
  //記事を最新の６つまでに
  const numberOfPage = Math.floor(posts.length / 6) + (posts.length % 6 > 0 ? 1 : 0);
  const currentPage: number = params?.page;
  const startIndex = (currentPage - 1) * 6;
  const endIndex = startIndex + 6;
  const postsByPage = posts.slice(startIndex, endIndex);

  const metaData = createMetaData(postsByPage);

  return (
    <div className="h-auto xl:mx-40">
      <section className="w-full items-center px-3 ">
        <div className="my-7 text-center">
          <h1 className="font-PlayFairDisplay text-5xl">All Posts</h1>
        </div>
        <blog.ArticleList articles={metaData} normal={false} />
      </section>
      <PageNation numberOfPage={numberOfPage} tag={null} currentPage={currentPage} />
    </div>
  );
};

export default BlogPageList;
