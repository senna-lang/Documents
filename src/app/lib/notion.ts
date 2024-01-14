import { notFound } from "next/navigation";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { cache } from "react";
import type {
  UpdatePageParameters,
  CreateCommentParameters,
} from "@notionhq/client/build/src/api-endpoints";
import { PropertyItemsResponse } from "@/app/types/types";

export const revalidate = 60;

const notionSecret = process.env.NOTION_TOKEN!;
const notionDataBaseId = process.env.NOTION_DATABASE_ID!;

//Notionクライアント 初期化
const notion = new Client({
  auth: notionSecret,
});
// notion to markdown 初期化
const n2m = new NotionToMarkdown({ notionClient: notion });

//すべての投稿取得
export const getAllPosts = cache(async () => {
  const posts = await notion.databases.query({
    database_id: notionDataBaseId,
    page_size: 100,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });
  const allPosts = posts.results;
  return allPosts;
});

//記事詳細の取得
export const getPostDetail = cache(async (slug: string) => {
  const response = await notion.databases.query({
    database_id: notionDataBaseId,
    filter: {
      property: "Slug",
      formula: {
        string: {
          equals: slug,
        },
      },
    },
  });
  const page = response.results[0];
  if (!page) {
    notFound();
  }

  const mbBlocks = await n2m.pageToMarkdown(page.id);

  const mbString = n2m.toMarkdownString(mbBlocks);
  return {
    page,
    mbString,
  };
});

//notionDBからページ情報取得
export const getPage = async (page_id: string) => {
  const propertyId = "vLhm";
  const response = await notion.pages.properties.retrieve({ page_id, property_id: propertyId });
  const likes = (response as PropertyItemsResponse).number;
  return likes;
};

//notionDBのページ情報更新
export const updatePage = async (params: UpdatePageParameters) => {
  try {
    await notion.pages.update(params);
  } catch (err) {
    console.log("エラーが発生しました。", err);
  }
};

//Notionにコメント
export const createComment = async (params: CreateCommentParameters) => {
  try {
    const response = await notion.comments.create(params);
    return response;
  } catch (err) {
    console.log("エラーが発生しました。", err);
  }
};
