import "normalize.css";
import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.
// import "../../public/styles/global.css";
import "../../public/styles/base.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "../lib/theme";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
