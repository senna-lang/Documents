import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="mb-8 py-5 px-5 border-b flex justify-between items-center lg:mx-36">
      <nav>
        <Link href='/'>
          <h1 className="text-2xl font-extrabold">SENN'S BLOG</h1>
        </Link>

      </nav>
     
    </header>
  );
};

export default Header;
