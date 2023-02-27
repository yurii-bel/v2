import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import SocialLinks from "../components/shared/SocialLinks";

const Home = () => {
  return (
    <>
      <SocialLinks />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
