"use client";
// import Link from "next/link";
// import React from "react";

// const Header = () => {
//   return (
//     <header className="mb-8 py-5 px-5 border-b flex justify-between items-center lg:mx-36">
//       <nav>
//         <Link href='/'>
//           <h1 className="text-2xl font-extrabold">SENN'S BLOG</h1>
//         </Link>

//       </nav>

//     </header>
//   );
// };

import { Autocomplete, Group, Burger, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";

const links = [
  { link: "/allposts", label: "All Posts" },
  { link: "/pricing", label: "About Me" },
  { link: "/learn", label: "Git Hub" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    // <a
    //   key={link.label}
    //   href={link.link}
    //   className="link"
    //   onClick={(event) => event.preventDefault()}
    // >
    //   {link.label}
    // </a>
    <Link href={link.link} key={link.label}>
      <p className="link">{link.label}</p>
    </Link>
  ));

  return (
    <header className="header mb-8 py-5 px-5 border-b lg:mx-36">
      <div className="inner">
        <Link href="/">
          <h1 className="text-2xl font-extrabold">SENN'S BLOG</h1>
        </Link>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          {/* <MantineLogo size={28} /> */}
        </Group>

        <Group>
          <Group ml={50} gap={5} className="links" visibleFrom="sm">
            {items}
          </Group>
          <Autocomplete
            className="search"
            placeholder="Search"
            leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            data={["React", "Angular", "Vue", "Next.js", "Riot.js", "Svelte", "Blitz.js"]}
            visibleFrom="xs"
          />
        </Group>
      </div>
    </header>
  );
}

export default Header;
