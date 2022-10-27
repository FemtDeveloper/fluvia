import React, { FC } from "react";
import Head from "next/head";
import AppNavbar from "../ui/Navbar";
import SwitchTheme from "../ui/Switch";

interface LayoutProps {
  title: string;
  pageDescription: string;
  children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children, title, pageDescription }) => {
  return (
    <>
      <AppNavbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
