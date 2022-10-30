import React, { FC } from "react";
import Head from "next/head";
import AppNavbar from "../ui/Navbar";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Footer from "../ui/Footer";

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
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        <meta name="description" content={pageDescription} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />
      </Head>
      <AppNavbar />
      <main
        style={{
          marginTop: "65px",
          minHeight: "70vh",
          cursor: 'url("/public/gota.png"), auto',
        }}
        className="main-container"
      >
        <Grid2 xs={12}>{children}</Grid2>
      </main>
      <footer style={{ position: "relative", bottom: 0 }}>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
