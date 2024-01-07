import { getPage, updatePage } from "@/app/lib/notion";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const url = req.url as string;

    const urlParts: string[] = new URL(url).pathname.split("/");

    const page_id: string = urlParts[urlParts.length - 1];

    const result = await getPage(page_id);
    const currentLikes = NextResponse.json(result);

    return currentLikes;
  } catch (err) {
    console.log("エラーが発生しました。", err);
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const url = req.url as string;

    const urlParts: string[] = new URL(url).pathname.split("/");

    const page_id: string = urlParts[urlParts.length - 1];

    const result = await getPage(page_id);
    const currentLikes = result;

    const postRes = await updatePage({
      page_id,
      properties: {
        Likes: {
          number: currentLikes + 1,
        },
      },
    });

    const response = NextResponse.json(postRes);
    return response;
  } catch (err) {
    console.log("エラーが発生しました。", err);
  }
}
