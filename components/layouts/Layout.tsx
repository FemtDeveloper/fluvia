import React, { FC } from "react";
import Head from "next/head";
import AppNavbar from "../ui/Navbar";
import SwitchTheme from "../ui/Switch";
import { Container } from "@nextui-org/react";

interface LayoutProps {
  title: string;
  pageDescription: string;
  children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children, title, pageDescription }) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={pageDescription} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
      </Head>
      <Container fluid justify="flex-end" display="flex">
        <SwitchTheme />
      </Container>
      <AppNavbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
