"use client";
import { useState } from "react";
import Hero from "@/components/hero";
import Preloader from "@/components/Preloader";
import Footer from "@/components/footer";
import Snowfall from "@/components/snowfall";

const HomePage = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* {!loaded && <Preloader onFinish={() => setLoaded(true)} />}
      {loaded && ( */}
        <div className="">
          <Snowfall />
          <Hero />
          {/* <Footer /> */}
        </div>
      {/* )} */}
    </>
  );
};

export default HomePage;
