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

export const customComponentsStyle = {
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
  ...componentsStyle("MuiButton", {
    backgroundColor: "#ffffff",

    "&:hover": {
      color: "#ffffff",
    },
  }),
};
