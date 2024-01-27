"use client";
import React from "react";

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <div className="border-1-4 mx-auto mt-4 max-w-md rounded border-red-500 bg-red-100 p-2 text-red-700 shadow-md">
      <h3 className="mb-2 text-center font-bold">エラーが発生しました</h3>
      <button
        onClick={() => reset()}
        className="rounded bg-red-600 px-4 py-2 text-white  transition duration-200 hover:bg-red-500"
      >
        reload
      </button>
    </div>
  );
};

export default Error;
