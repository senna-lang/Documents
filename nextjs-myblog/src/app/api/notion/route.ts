import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notionSecret = "secret_XHu8WmO9WYmfE1MU2pG1dkz0qUG57eiij94gxPDOz5V";
const notionDataBaseId = "b7afe30eb0fe48e0b2d4a11da3bb3a21";
const notion = new Client({
  auth: notionSecret,
});

export async function GET(req: Request, res: Response) {
  const posts = await notion.databases.query({
    database_id: notionDataBaseId,
    page_size: 100,
    filter: {
      property : 'Published',
      checkbox: {
        equals: true
      }
    },
    sorts: [
      {
        property :'Date',
        direction:'descending'
      }
    ]
  });
  const allPosts = posts.results;
  return NextResponse.json(allPosts);
}





