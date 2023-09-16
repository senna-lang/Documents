import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notionSecret = "secret_XHu8WmO9WYmfE1MU2pG1dkz0qUG57eiij94gxPDOz5V";
const notionDataBaseId = "b7afe30eb0fe48e0b2d4a11da3bb3a21";
const notion = new Client({
  auth: notionSecret,
});

export async function GET(req: Request, res: Response) {
  const slug = req.url.split("/notion/")[1];
  console.log(slug);
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

  return NextResponse.json(page);
}
