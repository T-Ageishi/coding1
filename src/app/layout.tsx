import "./global.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";

export const metadata: Metadata = {
  title: "フロントエンドコーディング試験１",
};

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
