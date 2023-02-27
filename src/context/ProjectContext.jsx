import React from "react";
import { useState } from "react";
import { createContext } from "react";
import ProjectData from "../data/ProjectData";

export const ProjectContext = createContext();

function ProjectContextProvider({ children }) {
  const [projectData, setProjectData] = useState(ProjectData);

  // const projectItems = [...new Set(...projectData.map((prj) => prj.tools))];
  const allValues = [];
  projectData.map((prj) => prj.tools.map((x) => allValues.push(x)));
  const projectItems = [...new Set(allValues)];

  const filterProject = (curtool) => {
    const newProject = ProjectData.filter((newVal) => {
      return newVal.tools.includes(curtool);
    });
    setProjectData(newProject);
  };

  const values = { projectData, projectItems, setProjectData, filterProject };

  return (
    <ProjectContext.Provider value={values}>{children}</ProjectContext.Provider>
  );
}

export default ProjectContextProvider;
