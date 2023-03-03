import { FormEvent, useState } from "react";
import { NextPage } from "next";

import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const WeatherPage: NextPage = () => {
  const [city, setCity] = useState("");
  const router = useRouter();
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/weather/${city}`);
  };

  return (
    <Layout title="Weather App">
  
      <main className="container">
        <form onSubmit={submitHandler} className="col-5 mx-auto my-5 input-group">
          <input value={city} onChange={(e) => setCity(e.target.value)} className="form-control" placeholder="Search City ..." />
          <button className="btn btn-info">Go</button>
        </form>
      </main>
    </Layout>
  );
};

export default WeatherPage;
