import { MicroCMSQueries, createClient } from 'microcms-js-sdk';
import { Note } from '@/app/notes/type';

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN || '',
  apiKey: process.env.NEXT_PUBLIC_API_KEY || '',
});

//ノート一覧を取得
export const getNotesList = async () => {
  const noteLists = await client.getList<Note>({
    endpoint: 'notes-test',
  });

  return noteLists;
};
//ノート詳細を取得
export const getDetailNote = async ( contentId:string, queries?:MicroCMSQueries) => {
  const detailNote = await client.getListDetail<Note>({
    endpoint: 'notes-test',
    contentId,
    queries
  });

  return detailNote;
};
