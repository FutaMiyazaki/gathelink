import { MantineProvider } from "@mantine/core";
import type { AppProps } from "next/app";
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      emotionOptions={{ key: "mantine", prepend: false }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
};

export default MyApp;
