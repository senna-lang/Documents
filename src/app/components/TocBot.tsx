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
    <div className="rounded-lg bg-white p-3">
      <h1 className=" font-bold text-xl mb-4 text-center">Table Of Content</h1>
      <nav className="toc" />
    </div>
  );
};

export default TocBot;
