"use client";

import { Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";

const links = [
  { link: "/allposts", label: "All Posts" },
  { link: "/pricing", label: "About Me" },
  { link: "https://github.com/senna-lang", label: "Git Hub" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
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
        </Group>

        <Group>
          <Group ml={50} gap={5} className="links" visibleFrom="sm">
            {items}
          </Group>
        </Group>
      </div>
    </header>
  );
}

export default Header;
