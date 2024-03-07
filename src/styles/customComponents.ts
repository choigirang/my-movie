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
    minWidth: 0,
    padding: 0,

    "&:hover": {
      color: "#ffffff",
    },

    "& .MuiButton-startIcon": {
      margin: 0,
      padding: 5,
    },
  }),
};
