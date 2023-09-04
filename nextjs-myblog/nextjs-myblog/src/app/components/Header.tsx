import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="py-5 px-5 border-b flex justify-between items-center">
      <div>
        <Link href='/blog'>
          <h1 className="text-2xl font-extrabold">Next.js13 Blog</h1>
        </Link>
      </div>
      <div>
         <nav className="text-sm font-medium">
            <Link href='#' className="bg-orange-300 px-3 py-3 rounded-md">
               記事を書く
            </Link>
         </nav>
      </div>
    </header>
  );
};

export default Header;
