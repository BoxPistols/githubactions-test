import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#7dd3fc",
      main: "#eb0eeb",
      dark: "#0369a1",
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
      styleOverrides: {
        root: {
          borderRadius: "2px",
          textTransform: "none",
          transition: "all 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-1px)",
          },
        },
      },
    },
  },
});
