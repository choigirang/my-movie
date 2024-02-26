import { createTheme } from "@mui/material";
import { customComponentsStyle } from "./customComponents";

export const createCustomTheme = () =>
  createTheme({
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
