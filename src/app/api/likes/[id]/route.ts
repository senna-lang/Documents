import { Client } from "@notionhq/client";
import axios from "axios";
import { getPage } from "@/lib/notion";
import { NextRequest, NextResponse } from "next/server";

const notionSecret = process.env.NOTION_TOKEN!;

const notion = new Client({
  auth: notionSecret,
});

export const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://notion-blog-juhu27lna-senna-lang.vercel.app', // 許可するオリジン
  'Access-Control-Allow-Methods': 'POST, OPTIONS', // 許可するメソッド
  'Access-Control-Allow-Headers': 'Content-Type', // 許可するリクエストヘッダー
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders })
}


export async function PATCH(req: NextRequest,res:NextResponse) {
  const url = req.url as string;

  const urlParts: string[] = new URL(url).pathname.split("/");

  const page_id: string = urlParts[urlParts.length - 1];

  getPage(page_id).then((result) => {
    const currentLikes: number = result; 

    const options = {
      method: "PATCH",
      url: `https://api.notion.com/v1/pages/${page_id}`,
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        corsHeaders,
        "Notion-Version": "2022-06-28",
        "content-type": "application/json",
      },
      data: {
        properties: {
          Likes: {
            number: currentLikes + 1,
          },
        },
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });
}
