import { Client } from "@notionhq/client";
import axios from "axios";
import { getPage } from "@/lib/notion";
import { NextRequest, NextResponse } from "next/server";

const notionSecret = process.env.NOTION_TOKEN!;

const notion = new Client({
  auth: notionSecret,
});



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
        'Access-Control-Allow-Origin': 'https://next-js13-my-blog.vercel.app', 
        'Access-Control-Allow-Methods': 'POST, OPTIONS, PATCH', 
        'Access-Control-Allow-Headers': 'Content-Type', 
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
