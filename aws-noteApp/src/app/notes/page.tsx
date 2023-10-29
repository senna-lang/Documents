import Link from 'next/link';
import React from 'react';
import { getNotesList } from '../../../lib/client';
import { Note } from './type';

type NoteProps = {
  note: Note;
};

const Pages = async () => {
  const noteLists = await getNotesList();

  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-y-10 mt-10">
      {noteLists.contents.map(note => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default Pages;

const NoteItem = ({ note }: NoteProps) => {
  return (
    <div className=" bg-gray-100 rounded-lg p-5">
      <Link href={`/notes/${note.id}`}>
        <h3 className=" text-purple-500 hover:text-purple-700 text-lg md:text-xl font-semibold mb-3 underline">
          {note.title}
        </h3>
        {note.description}
      </Link>
    </div>
  );
};
