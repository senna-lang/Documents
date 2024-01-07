import { NextRequest, NextResponse } from "next/server";
import { createComment } from "@/app/lib/notion";

export async function POST(req: NextRequest) {
  try {
    const url = req.url as string;

    const urlParts: string[] = new URL(url).pathname.split("/");

    const page_id: string = urlParts[urlParts.length - 1];

    const bodyText = await req.text();

    const postRes = await createComment({
      parent: {
        page_id,
      },
      rich_text: [
        {
          text: {
            content: bodyText,
          },
        },
      ],
    });

    const response = NextResponse.json(postRes);
    return response;
  } catch (err) {
    console.log("エラーが発生しました。", err);
  }
}
