import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const ContactCard = () => {
  return (
    <div className="relative w-full rounded-lg border bg-white text-center">
      <div className="relative h-60 w-full ">
        <Image
          src="/images/profileback.jpeg"
          alt="background"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, 50vw, 1024px"
          className="rounded-t-lg object-cover"
        />
      </div>
      <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-75%] transform md:translate-y-[-50%] lg:translate-y-[-70%]">
        <Image
          className="h-24 w-24 rounded-full object-cover"
          src="/images/avatar.JPG"
          width={60}
          height={60}
          alt="Avatar"
        />
        <p className="mt-4 text-2xl font-bold text-gray-600">せん</p>
      </div>
      <div className="mt-14 w-full rounded bg-white p-4 lg:mt-24">
        <h3 className="mb-2 font-bold text-gray-900">About me</h3>
        <p className="text-gray-600">
          長野県　安曇野市出身 24歳
          <br />
          趣味でプログラミングをしているものです。昨年４月から本格的に勉強を開始し、React,Next.js,Typescriptなどのモダンなフロントエンド技術を中心に更なる成長を求めて勉強中です。
        </p>
      </div>
      <div className="mb-4 flex justify-around py-2">
        <Link href="https://github.com/senna-lang" target="_blank">
          <FaGithub className=" cursor-pointer text-2xl" />
        </Link>
        <Link href="/" target="_blank">
          <FaXTwitter className=" cursor-pointer text-2xl" />
        </Link>
        <Link href="/" target="_blank">
          <FaInstagram className=" cursor-pointer text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default ContactCard;
