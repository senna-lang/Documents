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

export type Tag = {
  id: string;
  name: string;
  color: string;
};

export type PropertyItemsResponse = {
  object: string;
type: string;
id: string;
number: number;
request_id: string;
}


 
