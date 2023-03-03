import Layout from "@/components/Layout";
import { NextPage } from "next";
import ProjectBox from "@/components/ProjectBox";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <section>
        <h1>Navigate Through Next.JS Parts</h1>
        <ProjectBox desc="weather app (getServerSideProps)" goto="/weather" />
        <ProjectBox desc="products app (getStaticProps/getStaticPaths/Redux Toolkit/Axios Services/Filter)" goto="/products" />
        <ProjectBox desc="Post App (Debounce Search app)" goto="/posts" />
      </section>
    </Layout>
  );
};

export default HomePage;
