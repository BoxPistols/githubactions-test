import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#f3e8ee",
      main: "#eb0eeb",
      dark: "#9b0b9b",
      contrastText: "#fff",
    },
    secondary: {
      light: "#f3f4f6",
      main: "#9ca3af",
      dark: "#4b5563",
      contrastText: "#000",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderWidth: "4px",
          textTransform: "none",
          "&:hover": {
            transform: "translateY(-1px)",
          },
        },
      },
    },
  },
});
