import Hero from "../components/sections/Hero";
import About from "../components/sections/About"
import Services from "../components/sections/Services"
import Courses from "../components/sections/Courses"
import ResourcesBanner from "../components/sections/ResourcesBanner";
import Modality from "../components/sections/Modality";
import Faq from "../components/sections/Faq";
import Disclaimer from "../components/sections/Disclaimer";

function Home() {
  return (
    <>
      <Hero />
      <About/>
      <Services/>
      <Courses/>
      <ResourcesBanner/>
      <Modality/>
      <Disclaimer/>
      <Faq/>
    </>
  );
}

export default Home;