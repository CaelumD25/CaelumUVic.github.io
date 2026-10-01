import { createTheme } from "@mui/material";
import IBMPlexSans from "./fonts/IBMPlexSans-Regular.woff2";

const customTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#2E3440",
      paper: "#3B4252",
    },
    text: {
      primary: "#ECEFF4",
      secondary: "#D8DEE9",
    },
    primary: {
      main: "#88C0D0",
      light: "#8FBCBB",
      dark: "#81A1C1",
    },
    secondary: {
      main: "#A3BE8C",
    },
    divider: "rgba(76, 86, 106, 0.4)",
  },
  typography: {
    fontFamily: "'IBM Plex Sans', -apple-system, BlinkMacSystemFont, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 300,
      color: "#8FBCBB",
      letterSpacing: "0.04em",
      textTransform: "uppercase",
    },
    h2: {
      fontSize: "1.7rem",
      fontWeight: 300,
      color: "#88C0D0",
      letterSpacing: "0.03em",
      textTransform: "uppercase",
    },
    h3: {
      fontSize: "1.4rem",
      fontWeight: 300,
      color: "#81A1C1",
      letterSpacing: "0.02em",
    },
    h4: {
      fontSize: "1.2rem",
      fontWeight: 400,
      color: "#5E81AC",
    },
    subtitle1: {
      fontSize: "1.5rem",
      fontWeight: 300,
      textTransform: "uppercase",
      color: "#81A1C1",
      lineHeight: 1.4,
      letterSpacing: "0.1em",
    },
    body1: {
      fontSize: "1.05rem",
      color: "#ECEFF4",
      lineHeight: 1.75,
    },
    body2: {
      fontSize: "0.9rem",
      color: "#D8DEE9",
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'IBM Plex Sans';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('IBM Plex Sans'),
               local('IBMPlexSans-Regular'),
               url(${IBMPlexSans}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: "rgba(59, 66, 82, 0.4)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgba(76, 86, 106, 0.4)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: "0 12px 40px rgba(0,0,0,0.45), 0 0 20px rgba(136,192,208,0.1)",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(76, 86, 106, 0.4)",
          backgroundImage:
            "linear-gradient(to right, transparent, rgba(76, 86, 106, 0.6), transparent)",
          border: "none",
          height: "1px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(94, 129, 172, 0.2)",
          borderColor: "rgba(94, 129, 172, 0.35)",
          color: "#81A1C1",
          fontSize: "0.78rem",
          height: "26px",
        },
      },
    },
  },
});

export default customTheme;
