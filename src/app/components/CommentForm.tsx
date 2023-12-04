"use client";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { useComment } from "@/app/hooks/useComment";
import { Modal, Button, Textarea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notificationState } from "../atoms/notification";

type CommentProps = {
  id: string;
};

const CommentForm = ({ id }: CommentProps) => {
  const [notification, setNotification] = useRecoilState(notificationState);

  const [comment, setComment] = useState("");
  const { trigger } = useComment(id, comment);
  const [opened, { open, close }] = useDisclosure(false);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    trigger();
    setComment("");
    setNotification(!notification);
    close();
  };

  return (
    <div>
      <Modal opened={opened} onClose={close} title="記事にコメントする" size="lg" trapFocus={false}>
        <form onSubmit={handleSubmit}>
          <Textarea
            placeholder="write down your comment"
            value={comment}
            onChange={handleCommentChange}
          />
          <div className="mt-2">
            <Button type="submit" fullWidth>投稿</Button>
          </div>
        </form>
      </Modal>

      <Button onClick={open} size="sm" fullWidth>
        コメントする
      </Button>
    </div>
  );
};

export default CommentForm;
