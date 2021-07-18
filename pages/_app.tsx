import { CssBaseline, GeistProvider, Themes } from "@geist-ui/react";

import { AppProps } from "next/dist/next-server/lib/router/router";

const myTheme = Themes.createFromLight({
  type: "Custom",
  palette: {
    background: "#e5e7eb",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GeistProvider themes={[myTheme]} themeType="dark">
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
}
export default MyApp;
