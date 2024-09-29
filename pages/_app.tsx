import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { theme } from "../chakra/theme";
import { ReactNode } from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

interface AppProps {
  children: ReactNode;
  Component: any;
  pageProps: any;
}

export default function App({children, Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      <UserProvider>
        <body>{children}</body>
      </UserProvider>
    </SessionProvider>
  );
}
