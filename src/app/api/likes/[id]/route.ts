import { getPage, updatePage } from "@/app/lib/notion";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const page_id = params.id;
    const result = await getPage(page_id);
    const currentLikes = NextResponse.json(result);
    return currentLikes;
  } catch (err) {
    return NextResponse.json(err);
  }
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const page_id = params.id;
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
    return NextResponse.json(err);
  }
}
