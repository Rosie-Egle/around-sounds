import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#994ef5",
    },
    secondary: {
      main: "#cc9efb",
    },
    background: {
      paper: "#342d3a",
      default: "#1f1826",
    },
    error: {
      main: "#cf6679",
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: "Lato, sans-serif",
    h1: {
      fontSize: 32,
    },
    h2: {
      fontSize: 24,
    },
    h3: {
      fontSize: 20,
    },
    h4: {
      fontSize: 16,
    },
    body1: {
      fontSize: 16,
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});

export default theme;
