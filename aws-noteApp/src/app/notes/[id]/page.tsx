import React from 'react';
import Link from 'next/link';
import Note from './Note';
import { getDetailNote, getNotesList } from '../../../../lib/client';

export async function generateStaticParams() {
  const { contents } = await getNotesList();
  return contents.map(note => ({
    id: note.id,
}));
}

const Page = async ({ params }: { params: { id: string } }) => {
  const note = await getDetailNote(params.id);

  return (
    <main className=" mx-2 sm:mx-4">
      <Link href="/">← Back</Link>
      <h2 className="my-4 text-gray-400 text-xs">view note</h2>
      <Note note={note} />
    </main>
  );
};

export default Page;
