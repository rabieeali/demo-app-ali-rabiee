import { ILayout } from "@/model";
import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ title, description, keywords, children }: ILayout) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Navbar />
      <main className="container mt-5 mb-2">{children}</main>
    </>
  );
};

Layout.defaultProps = {
  title: "Mosbat Sabz | مثبت سبز",
  description: "a demo for job application",
  keywords: "api,weather,users",
};

export default Layout;
