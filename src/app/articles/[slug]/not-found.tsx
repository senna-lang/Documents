import React from "react";

export const notFound = () => {
  return (
    <div className="mt-20 flex items-center justify-center">
      <div className="rounded-lg bg-white p-8 text-center shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-gray-800">404</h1>
        <p className="text-gray-600">ページが見つかりませんでした。</p>
      </div>
    </div>
  );
};

export default notFound;
