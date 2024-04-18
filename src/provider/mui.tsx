"use client";

import { StyledEngineProvider } from "@mui/styled-engine";
import React from "react";

export default function MuiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
}
