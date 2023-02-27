import AboutTechnologies from "../../data/AboutTechnologies";
import AboutTechCard from "./AboutTechCard";

const AboutTechnologiesList = () => {
  return (
    <>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {AboutTechnologies &&
          AboutTechnologies.map((tech) => {
            return <AboutTechCard key={tech.id} title={tech.title} />;
          })}
      </ul>
    </>
  );
};

export default AboutTechnologiesList;
