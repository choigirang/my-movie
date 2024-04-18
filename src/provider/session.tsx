"use client";

import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";
import React from "react";

export default function SessionProvider({
  children,
  session,
}: {
  children: React.ReactNode;
  session: Session;
}) {
  return <Provider session={session}>{children}</Provider>;
}
