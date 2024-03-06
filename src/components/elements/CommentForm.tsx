"use client";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Modal, Button, Textarea } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { notificationState } from "../../common/atoms/notification";
import { isMutatingState } from "@/common/atoms/isMutating";
import { sendComment } from "@/common/actions/actions";

type CommentProps = {
  id: string;
};

const CommentForm = ({ id }: CommentProps) => {
  const [notification, setNotification] = useRecoilState(notificationState);
  const [commentMutating, setCommentMutating] = useRecoilState(isMutatingState);
  const [comment, setComment] = useState("");
  const [opened, { open, close }] = useDisclosure(false);

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  //コメントの送信
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await sendComment({ id, comment });
    if (res) {
      setCommentMutating(false);
    } else {
      setCommentMutating(true);
    }
    console.log(res);
    setComment("");
    setNotification(!notification);
    close();
  };

  return (
    <div>
      <Modal
        opened={opened}
        onClose={close}
        title="記事にコメントする"
        size="lg"
        trapFocus={false}
        centered
      >
        <form onSubmit={handleSubmit}>
          <Textarea
            placeholder="write down your comment"
            value={comment}
            onChange={handleCommentChange}
          />
          <div className="mt-2">
            <Button type="submit" fullWidth>
              投稿
            </Button>
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
