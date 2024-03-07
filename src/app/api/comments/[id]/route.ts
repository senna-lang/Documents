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
