import React from "react";
import ProjectListItem from "./ProjectListItem";
import { ProjectType } from "./Projects";
import classes from "./ProjectList.module.css"

interface Props {
    proyects: ProjectType[]
    onProyectSelected: (index: number) => void
}

const ProyectList: React.FC<Props> = (props: Props) => {

  return (
    <div
      className={` ${classes.list} ]`}
    >
      <div className="flex flex-col h-[35rem] xl:h-[50rem] lg:h-[40rem] z-10 translate-y-10 pb-4 items-center lg:gap-2 xl:gap-16 overflow-y-auto xl:pt-10" >
        {props.proyects.map((demo, index) => {
          return (
            <ProjectListItem
              index={index}
              onSelected={props.onProyectSelected}
              type={demo.type}
              key={demo.name}
              name={demo.name}
              link={demo.link}
              logo={demo.logo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProyectList;
