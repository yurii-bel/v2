import ProjectsGrid from "./shared/ProjectsGrid";
import Buttons from "./shared/Buttons";

const Projects = () => {
  return (
    <section id="projects" className="relative px-12 pt-16">
      <h5 className="w-full text-lg text-left border-b border-slate-800 py-4 pl-4 text-slate-300 mb-24 ">
        <span className="text-green-300">02.</span>
        <span> Projects</span>
      </h5>
      <Buttons />
      <div className="grid auto-cols-max grid-cols-1 gap-4 mx-2 sm:grid-cols-2">
        <ProjectsGrid />
      </div>
    </section>
  );
};

export default Projects;
