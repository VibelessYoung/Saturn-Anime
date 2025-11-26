import HeroSlider from "../components/HeroSection";
import Cards from "../components/AnimeCards";
import Questions from "../components/Q&A";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <div id="home">
        <HeroSlider />
      </div>
      <div id="anime">
        <Cards />
      </div>
      <div id="qa">
        <Questions />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default Home;
