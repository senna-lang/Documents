"use client";
import React from "react";
import tocbot from "tocbot";
import { useEffect } from "react";

const TocBot = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".post-detail",
      headingSelector: "h2,h3",
    });

    return () => tocbot.destroy();
  }, []);
  return (
    <div className="max-h-[80vh] overflow-y-auto rounded-lg bg-white p-3">
      <h1 className=" mb-4 text-center font-sourceCodePro text-xl font-bold">Table Of Content</h1>
      <nav className="toc" />
    </div>
  );
};

export default TocBot;
