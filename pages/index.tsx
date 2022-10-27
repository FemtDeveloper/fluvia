import { NextPage } from "next";

import Layout from "../components/layouts/Layout";
import Main from "../components/ui/Main";
import Slide from "../components/ui/Slide";

const HomePage: NextPage = () => {
  return (
    <>
      <Layout title="main" pageDescription="esta es la home">
        <Slide />
        <Main />
      </Layout>
    </>
  );
};

export default HomePage;
