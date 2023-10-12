"use client";
import React from "react";
import tocbot from "tocbot";
import { useEffect } from "react";

const TocBot = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".news-detail",
      headingSelector: "h2,h3",
    });

    return () => tocbot.destroy();
  }, []);
  return (
    <div className=" mb-4 sticky top-8 left-0 w-full rounded-lg bg-white flex flex-col justify-center p-3">
      <h1 className=" font-bold text-xl mb-4 text-center">Table Of Content</h1>
      <nav className="toc" />
    </div>
  );
};

export default TocBot;
