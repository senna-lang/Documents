"use client";

import { Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

const links = [
  { link: "/allposts/1", label: "All Posts" },
  { link: "/pricing", label: "About Me" },
  { link: "https://github.com/senna-lang", label: "Git Hub" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <Link href={link.link} key={link.label}>
      <p className="link font-sourceCodePro">{link.label}</p>
    </Link>
  ));

  return (
    <header className="header mb-4 md:mb-8 py-5 px-5 border-b lg:mx-28 xl:mx-36">
      <div className="flex items-center justify-between">
        <Link href="/">
          <h1 className="text-2xl font-extrabold sm:text-md">SENNA BLOG</h1>
        </Link>

        <Group>
          <Group ml={50} gap={5} className="links" visibleFrom="sm">
            {items}
          </Group>
          <Group>
            <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          </Group>
        </Group>
      </div>
    </header>
  );
}

export default Header;
