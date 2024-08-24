import {
  experimental_extendTheme as extendTheme,
  PaletteOptions,
} from "@mui/material/styles";
import "@fontsource/montserrat";
const HEADERHEIGHT = "80px";
const HEADERBACKGROUND = "#111111";
declare module "@mui/material/styles" {
  interface Theme {
    demo: {
      headerHeight: string;
      headerBackground: string;
    };
  }

  interface ThemeOptions {
    demo?: {
      headerHeight: string;
      headerBackground: string;
    };
  }
  interface CssVarsThemeOptions {
    palette?: PaletteOptions;
  }
}

const theme = extendTheme({
  demo: {
    headerHeight: HEADERHEIGHT,
    headerBackground: HEADERBACKGROUND,
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
  palette: {
    primary: {
      main: "#f9f9f9",
    },
    // secondary: {
    //   main: "#0F172B",
    // },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 999,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
