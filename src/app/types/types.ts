import { PageObjectResponse,PartialPageObjectResponse,PartialDatabaseObjectResponse,DatabaseObjectResponse, } from "@notionhq/client/build/src/api-endpoints";
import { MdStringObject } from "notion-to-md/build/types";

export type Article = {
  id: string;
  description: string;
  date: string;
  slug: string;
  tags: string[];
  category: string[];
  thumb: string;
  likes: number | null;
};
export type PropertyItemsResponse = {
  object: string;
type: string;
id: string;
number: number;
request_id: string;
}

export type PostDetail = {
  page: PageObjectResponse | PartialPageObjectResponse | PartialDatabaseObjectResponse | DatabaseObjectResponse;
  mbString: MdStringObject;
};
export type Post = (PageObjectResponse | PartialPageObjectResponse | PartialDatabaseObjectResponse | DatabaseObjectResponse)

 
