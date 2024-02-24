import { PaletteMode, Theme, createTheme, makeStyles } from "@mui/material";
import { Noto_Sans_KR } from "next/font/google";

const notoSans = Noto_Sans_KR({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

function componentsStyle(name: string, styles: Record<string, any>) {
  return {
    [name]: {
      styleOverrides: {
        root: {
          ...styles,
        },
      },
    },
  };
}

const customComponentsStyle = {
  ...componentsStyle("MuiContainer", {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    paddingLeft: 0,
  }),
  MuiGrid: {
    styleOverrides: {
      root: {},
    },
  },
};

export const createCustomTheme = () =>
  createTheme({
    typography: {
      fontFamily: notoSans.style.fontFamily,
      subtitle1: {
        fontSize: 16,
      },
    },
    components: customComponentsStyle,
    palette: {
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
