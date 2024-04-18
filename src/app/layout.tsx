import type { Metadata } from "next";
import "../styles/globals.css";
import ScrollBtn from "./(common)/scrollBtn";
import Nav from "./(home)/nav";

export const metadata: Metadata = {
  title: "나의 영화 일지",
  description: "영화 기록하기",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body>
        <Nav />
        {children}
        <ScrollBtn />
      </body>
    </html>
  );
}
