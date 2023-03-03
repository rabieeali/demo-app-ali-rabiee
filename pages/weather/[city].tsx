import { NextPage } from "next";
import axios from "axios";
import { useRouter } from "next/router";
import CityCard from "../../components/CityCard";
import Layout from "@/components/Layout";

const CityPage: NextPage = ({ cityData, errorCode }: any) => {
  return (
    <Layout title="Weather App">
      <main className="container my-5">
        {errorCode && <h1>Oops! No Such Place!</h1>}
        {!errorCode && <CityCard cityData={cityData} />}
      </main>
    </Layout>
  );
};
export default CityPage;

export const getServerSideProps = async ({ query }: any) => {
  const { city } = query;
  const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_APP_API_KEY}&q=${city}&aqi=no`);
  const errorCode = result.ok ? false : result.status;
  const cityData = await result.json();

  if (!cityData) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { errorCode, cityData },
  };
};
