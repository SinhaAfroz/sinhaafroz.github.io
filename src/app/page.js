import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Snowfall from "@/components/snowfall";
import ThemeToggle from "../components/ThemeToggle";

const HomePage = () => (
  <div className="">
     <ThemeToggle />
    <Snowfall/>
    <Hero/>
    {/* <Footer/> */}
  </div>
);

export default HomePage;
