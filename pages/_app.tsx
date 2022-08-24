import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache, ThemeProvider } from "@emotion/react";
import createEmotionCache from "../config/createEmotionCache";
import theme from "./../config/materialTheme";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }: MyAppProps) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
