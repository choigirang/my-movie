import { PaletteMode, createTheme } from "@mui/material";
import { Noto_Sans_KR } from "next/font/google";

const notoSans = Noto_Sans_KR({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const createCustomTheme = (mode: PaletteMode) =>
  createTheme({
    typography: {
      fontFamily: notoSans.style.fontFamily,
      subtitle1: {
        fontSize: 16,
      },
    },
    palette: {
      mode,
      common: {
        white: "white",
        black: "black",
      },
      primary: {
        main: "#ffb700",
        dark: "#000f1f",
      },
      secondary: {
        main: "#ffe196",
        dark: "#003892",
      },
      text: {
        primary: "#ffb700",
        secondary: "#000f1f",
      },
      background: {
        default: "#ffe196",
        // dark: '#000f1f',
      },
      error: {
        main: "#FF4545",
        dark: "",
      },
      info: {
        main: "#1A1A1A",
        dark: "",
      },
    },
  });
