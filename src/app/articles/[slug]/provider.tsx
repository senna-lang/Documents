"use client";
import { useRecoilState } from "recoil";
import { Notification, rem } from "@mantine/core";
import { IconX, IconCheck } from "@tabler/icons-react";
import { notificationState } from "@/app/atoms/notification";
import { isMutatingState } from "@/app/atoms/isMutating";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [notification, setNotification] = useRecoilState(notificationState);
  const [isMutating, setIsMutating] = useRecoilState(isMutatingState);

  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

  return (
    <section className=" relative">
      {children}
      {notification ? (
        isMutating ? (
          <div className="fixed bottom-20 right-20 z-50 w-auto">
            <Notification
              icon={checkIcon}
              color="teal"
              title="メッセージ送信中"
              radius="md"
              loading={isMutating}
              onClose={() => {
                setNotification(false);
                setIsMutating(true);
              }}
            >
              Sending your comment ...
            </Notification>
          </div>
        ) : (
          <div className="fixed bottom-20 right-20 z-50 w-auto">
            <Notification
              icon={checkIcon}
              color="teal"
              title="メッセージ送信完了！！"
              radius="md"
              loading={isMutating}
              onClose={() => {
                setNotification(false);
                setIsMutating(true);
              }}
            >
              Completed !!
            </Notification>
          </div>
        )
      ) : (
        ""
      )}
    </section>
  );
}
