# Apply the following steps to configure the material:

1-create a config folder in main root
2-add this 2 files to config folder : "createEmotionCache.tsx" and "materialTheme.tsx".

3- go to "\_app.tsx"
4- paste this file out of "MyApp" function : "const clientSideEmotionCache = createEmotionCache()";
5-create this interface :
interface MyAppProps extends AppProps {
emotionCache?: EmotionCache;
}

6- define MyApp function Like this :

function MyApp({
Component,
emotionCache = clientSideEmotionCache,
pageProps,
}: MyAppProps) {
return (
<CacheProvider value={emotionCache}>
<ThemeProvider theme={theme}>
<Component {...pageProps} />
</ThemeProvider>
</CacheProvider>
);
}

export default MyApp;

7- add project styles and configs to "materialTheme.tsx" file according to material-ui documention.
