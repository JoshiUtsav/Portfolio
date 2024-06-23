import React, { Fragment } from "react";
import ProjectCard from "@/components/ProjectCard";
import TitleTag from "@/components/Title";

import { projects } from "@/lib/data";

const Work = () => {
  return (
    <div className="mt-[5rem] h-[auto] md:w-[100%]">
      <TitleTag tagName={"Projects"} />
      <div className="flex md:flex-row overflow-x-auto no-scrollbar">
        {/* PROJECTs*/}
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            p_name={project.p_name}
            link={project.link}
            img={project.img}
            techUsed={project.techUsed}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
