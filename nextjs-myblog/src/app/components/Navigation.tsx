"use client";

import Link from "next/link";
import type { Session } from "@supabase/auth-helpers-nextjs";

//ナビゲーション
const Navigation = ({ session }: { session: Session | null }) => {
  return (
    <>
      {session ? (
        <div>
          <Link href="#">ブログページへ</Link>
        </div>
      ) : (
        <div>
          <Link href="#">ログイン</Link>
        </div>
      )}
    </>
  );
};

export default Navigation;
