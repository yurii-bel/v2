import React, { useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";
import ProjectData from "../../data/ProjectData";
const Buttons = () => {
  const { setProjectData, projectItems, filterProject } =
    useContext(ProjectContext);
  return (
    <>
      <div className="flex justify-center items-center text-sm gap-2 flex-wrap mb-2">
        {projectItems.map((Val, id) => {
          return (
            <button
              className="rounded-md focus:text-green-300 tracking-wider focus:font-bold text-white p-1 px-2 bold hover:text-green-300"
              onClick={() => filterProject(Val)}
              key={id}
            >
              {Val}
            </button>
          );
        })}
        <button
          className="rounded-md focus:text-green-300 tracking-wider focus:font-bold text-white p-1 px-2 bold hover:text-green-300"
          onClick={() => setProjectData(ProjectData)}
        >
          All
        </button>
      </div>
    </>
  );
};

export default Buttons;
