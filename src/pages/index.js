import * as React from "react";
import TopMenu from "../components/TopMenu";
import Layout from "../components/layout";
import Bio from "../components/Bio";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Copy from "../components/Copy";


const IndexPage = () => {
  return (
    <main>
      <Layout>
        <TopMenu />
        <Bio />
        <Projects />
        <Contact />
        <Copy />
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Aniket Bamotra | UX Engineer</title>;
