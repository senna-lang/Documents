"use client";

import Link from "next/link";
import { Group, Burger, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const links = [
  { link: "/allposts/1", label: "All Posts" },
  { link: "https://senna-portforio.vercel.app", label: "About Me" },
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
    <header className="header mb-4 border-b px-5 py-5 md:mb-8 lg:mx-28 xl:mx-36">
      <div className="flex items-center justify-between">
        <Link href="/">
          <h1 className="sm:text-md text-2xl font-extrabold">SENNA BLOG</h1>
        </Link>

        <Group>
          <Group ml={50} gap={5} className="links" visibleFrom="sm">
            {items}
          </Group>
          <Group>
            <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          </Group>
        </Group>
        <Drawer
          opened={opened}
          onClose={toggle}
          title="SENNA BLOG"
          overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        >
          <ul className="px-4 pt-[78px] font-bold">
            <li className="mb-4">
              <Link href="/allposts/1" onClick={toggle}>All Posts</Link>
            </li>
            <li className="mb-4">
              <Link href="https://senna-portforio.vercel.app/" onClick={toggle}>About Me</Link>
            </li>
            <li className="mb-4">
              <Link href="https://github.com/senna-lang" onClick={toggle}>Git Hub</Link>
            </li>
          </ul>
        </Drawer>
      </div>
    </header>
  );
}

export default Header;
