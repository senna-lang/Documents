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
