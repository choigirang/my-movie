import type { Metadata } from "next";
import "../style/global.css";
import ScrollBtn from "./(common)/scrollBtn";
import Nav from "./(common)/nav";
import ReduxProvider from "../provider/redux";
import QueryProvider from "@/provider/query";
import SessionProvider from "@/provider/session";

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
    <ReduxProvider>
      <QueryProvider>
        <SessionProvider>
          <html lang="kr">
            <body>
              <Nav />
              {children}
              <ScrollBtn />
            </body>
          </html>
        </SessionProvider>
      </QueryProvider>
    </ReduxProvider>
  );
}
