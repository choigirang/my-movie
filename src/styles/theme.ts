import { createTheme } from "@mui/material";

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
  ...componentsStyle("MuiGrid", {
    width: "100%",
    marginLeft: 0,
    marginTop: 0,
    "& .MuiGrid-item": {
      display: "flex",
      alignItem: "center",
      justifyContent: "center",
      paddingLeft: 0,
      paddingTop: 0,
    },
  }),
};

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
