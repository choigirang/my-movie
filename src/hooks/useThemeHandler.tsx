import { ThemeProvider } from "@mui/material";
import { useMemo, useState } from "react";
import { createContext } from "vm";

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function useThemeHandler() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
