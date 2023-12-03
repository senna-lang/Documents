"use client";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { useComment } from "@/app/hooks/useComment";
import { Modal, Button, Textarea } from "@mantine/core";
import { useDisclosure} from "@mantine/hooks";
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
      <Modal opened={opened} onClose={close} title="Authentication" size="lg" trapFocus={false}>
        <form onSubmit={handleSubmit}>
          <Textarea
            label="Input label"
            description="Input description"
            placeholder="Input placeholder"
            value={comment}
            onChange={handleCommentChange}
          />
          <button type="submit">コメントを投稿</button>
        </form>
      </Modal>

      <Button onClick={open}>Open modal</Button>
    </div>
  );
};

export default CommentForm;
