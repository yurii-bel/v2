import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLink } from "react-icons/ai";
import { ProjectContext } from "../../context/ProjectContext";
import { useContext } from "react";

const ProjectsGrid = () => {
  const { projectData } = useContext(ProjectContext);

  return (
    <>
      {projectData.map((project) => {
        return (
          <div
            className="flex items-center flex-col border border-slate-800 rounded-md p-4 hover:bg-slate-800 hover:border-green-300"
            key={project.id}
          >
            <span className="flex justify-center items-center text-xl mb-2 tracking-wide">
              {project.title}
            </span>
            <img
              className="w-auto block lg:hidden rounded-lg hover:cursor-pointer"
              src={project.img}
              alt={project.title}
            />

            <video className="hidden lg:block" autoPlay={true} muted loop>
              <source src={project.video} type="video/mp4" />
            </video>
            <div className="flex flex-col justify-center items-center ">
              {/* Demo and code links with icons */}
              <h2 className="tracking-wide text-gray-200 mt-4">Code & Demo</h2>
              <div className="flex gap-2 text-2xl mt-2">
                <span className="hover:text-green-300 hover:animate-spin">
                  <a href={project.github}>
                    <AiFillGithub />
                  </a>
                </span>
                <span className="hover:text-green-300 hover:animate-spin">
                  <a href={project.demo}>
                    <AiOutlineLink />
                  </a>
                </span>
              </div>
              {/* TOOLS */}
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {project.tools.map((tool, index) => {
                  return (
                    <span
                      className="bg-slate-700 px-2 py-1 text-sm font-medium rounded-md tracking-wide hover:bg-slate-900 hover:text-green-300 hover:animate-globus hover:cursor-pointer"
                      key={index}
                    >
                      {tool}
                    </span>
                  );
                })}
              </div>
            </div>

            <p className="ml-2 text-sm italic mt-2">{project.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default ProjectsGrid;
