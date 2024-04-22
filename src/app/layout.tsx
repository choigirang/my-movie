import type { Metadata } from "next";
import "../style/global.css";
import ScrollBtn from "./(common)/scrollBtn";
import Nav from "./(common)/nav";
import ReduxProvider from "../provider/redux";
import QueryProvider from "@/provider/query";
import SessionProvider from "@/provider/session";
import { Session } from "next-auth";

export const metadata: Metadata = {
  title: "나의 영화 일지",
  description: "영화 기록하기",
};

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: Session;
}>) {
  return (
    <html lang="kr">
      <body>
        <ReduxProvider>
          <QueryProvider>
            <SessionProvider session={session}>
              <Nav />
              {children}
              <ScrollBtn />
            </SessionProvider>
          </QueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
