import type { Metadata } from "next";
import "../styles/globals.css";
import ScrollBtn from "./(common)/scrollBtn";
import Nav from "./(home)/nav";
import ReduxProvider from "../provider/redux";
import MuiProvider from "../provider/mui";
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
              <MuiProvider>
                <Nav />
                {children}
                <ScrollBtn />
              </MuiProvider>
            </SessionProvider>
          </QueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
