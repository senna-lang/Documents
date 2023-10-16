import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { cache } from "react";

export const revalidate = 60;

const notionSecret = "secret_XHu8WmO9WYmfE1MU2pG1dkz0qUG57eiij94gxPDOz5V";
const notionDataBaseId = "b7afe30eb0fe48e0b2d4a11da3bb3a21";

const notion = new Client({
  auth: notionSecret,
});

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

const n2m = new NotionToMarkdown({ notionClient: notion });

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
  // console.log(page)
  const mbBlocks = await n2m.pageToMarkdown(page.id);
  // console.log(page.id)
  const mbString = n2m.toMarkdownString(mbBlocks);
  // console.log(mbString.parent);
  return {
    page,
    mbString,
  };
});
