"use client";

import { deleteArticle } from "@/blogAPI";
import { useRouter } from "next/navigation";
import React from "react";

type DeleteButtonProps = {
  id: string;
};

const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();
  const handleDelete = async () => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL;
    await fetch(`${API_URL}/api/${id}`, {
      method: "DELETE",
    });

    router.push("/blog");
    router.refresh;
  };

  return (
    <button
      className="bg-red-500 hover:bg-red-600 rounded-md px-2 py-5 inline cursor-pointer"
      onClick={handleDelete}
    >
      DeleteButton
    </button>
  );
};

export default DeleteButton;
