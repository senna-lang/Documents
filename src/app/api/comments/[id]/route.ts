import { NextRequest, NextResponse } from "next/server";
import { createComment, getComments } from "@/common/lib/notion";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const block_id = params.id;
    const result = await getComments(block_id);
    const currentComments = NextResponse.json(result);
    return currentComments;
  } catch (err) {
    return NextResponse.json(err);
  }
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const page_id = params.id;

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
    return NextResponse.json(err);
  }
}
