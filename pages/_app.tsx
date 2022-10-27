import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { darkTheme } from "../themes/dark-theme";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { lightTheme } from "../themes/light-theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </NextThemesProvider>
  );
}

// import "../styles/globals.css";
// import { NextUIProvider } from "@nextui-org/react";
// import { AppProps } from "next/app";

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     // <NextUIProvider>
//     <Component {...pageProps} />
//     // </NextUIProvider>
//   );
// }

// export default MyApp;
