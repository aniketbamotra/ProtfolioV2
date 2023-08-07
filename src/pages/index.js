import * as React from "react";
import TopMenu from "../components/TopMenu";
import Layout from "../components/layout";
import Bio from "../components/Bio";


const IndexPage = () => {
  return (
    <main>
      <Layout>
        <TopMenu />
        <Bio />
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Aniket Bamotra | UX Engineer</title>;
