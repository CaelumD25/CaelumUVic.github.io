import { createTheme } from "@mui/material";
import IBMPlexSans from "./fonts/IBMPlexSans-Regular.woff2";

const customTheme = createTheme({
  typography: {
    fontFamily: "'IBM Plex Sans', sans-serif", // Added fallback and proper quotes
    h1: {
      fontSize: "2rem",
      color: "#88c0d0",
    },
    h2: {
      fontSize: "1.8rem",
      color: "#81a1c1",
    },
    h3: {
      fontSize: "1.6rem",
      color: "#5e81ac",
    },
    subtitle1: {
      fontSize: "2.2rem",
      fontWeight: "300",
      textTransform: "uppercase",
      color: "#8fbcbb",
      lineHeight: "2.2rem",
      //textWrap: "nowrap",
    },
    body1: {
      fontSize: "1rem",
      color: "#ECEFF4",
    },
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
  },
});

export default customTheme;
