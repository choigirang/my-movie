import { PaletteMode } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Noto_Sans_KR } from "next/font/google";

const notoSans = Noto_Sans_KR({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const theme = (mode: PaletteMode) =>
  createTheme({
    typography: {
      fontFamily: notoSans.style.fontFamily,
      subtitle1: {
        fontSize: 16,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "*": {
            boxSizing: "border-box",
            margin: 0,
            padding: 0,
          },
          html: {
            height: "100%",
            width: "100%",
          },
          body: {
            height: "100%",
            width: "100%",
          },
          "#root": {
            height: "100%",
            width: "100%",
          },
        },
      },
    },
    palette: {
      mode,
      primary: {},
    },
  });
