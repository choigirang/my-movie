import { ReactNode, createContext, useMemo, useState, useContext } from "react";
import { ColorModeContextType } from "../type/common";
import { PaletteMode } from "@mui/material";
import { createCustomTheme } from "@/styles/theme";

const ColorModeContext = createContext<ColorModeContextType | undefined>(
  undefined
);

/**
 *
 * @param param0
 * @returns 컬로 모드 변경
 */
export const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>("light");

  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
    }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      {children}
    </ColorModeContext.Provider>
  );
};

/**
 *
 * @returns 컨텍스트 사용
 */
export const useColorMode = (): ColorModeContextType => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error("useColorMode must be used within a ColorModeProvider");
  }
  return context;
};

const { mode } = useColorMode();

// export const theme = useMemo(() => createCustomTheme(mode), [mode]);
