import { createTheme } from "@mui/material";

const customTheme = createTheme({
  typography: {
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
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "#8fbcbb",
    },
    body1: {
      fontSize: "1rem",
    },
  },
});
export default customTheme;
