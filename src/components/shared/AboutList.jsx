import AboutData from "../../data/AboutData";
import AboutCard from "./AboutCard";

const AboutList = () => {
  return (
    <>
      {AboutData &&
        AboutData.map((el) => {
          return (
            <AboutCard
              key={el.id}
              title={el.title}
              image={el.image}
              link={el.link}
            />
          );
        })}
    </>
  );
};

export default AboutList;
