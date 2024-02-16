import "../common/styles/mantineBase.css";
import "../common/styles/globals.scss";
import "@mantine/core/styles.css";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";
import { ScrollToTop } from "../components/elements/ScrollToTop";
import Loading from "./loading";
import { Suspense } from "react";
import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";
import { Noto_Sans_JP, Playfair_Display } from "next/font/google";

const NoteSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  preload: true,
  subsets: ["latin"],
});

const PlayfairDisplay = Playfair_Display({
  weight: ["400", "700"],
  preload: true,
  subsets: ["latin"],
  variable: "--font-PlayFairDisplay",
});

export const metadata: Metadata = {
  title: "SENNABLOG",
  description: "Senna's NotionBlog",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head />
      <body
        className={`bg-slate-100  text-black ${NoteSansJP.className} ${PlayfairDisplay.variable}`}
      >
        <MantineProvider>
          <main className="container mx-auto">
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-grow">
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </main>
              <div className="sp:p-2 sticky bottom-0 py-4 text-right">
                <ScrollToTop />
              </div>
              <Footer />
            </div>
          </main>
        </MantineProvider>
      </body>
    </html>
  );
}
