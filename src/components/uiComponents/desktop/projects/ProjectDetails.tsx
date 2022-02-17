import React from "react";
import { ProjectType } from "./Projects";
import classes from "./ProjectDetails.module.css";

const LOGOSDIR = "/images/logos/"

interface Props {
  proyect: ProjectType;
}

const ProyectDetails: React.FC<Props> = ({ proyect }: Props) => {

  let cardColorClass = classes.container;
  let textColor = " text-ink "

  if (proyect.type) {
    switch (proyect.type) {
      case "pink":
        cardColorClass = classes.container__pink;
        textColor = " text-tawny-text ";
        break;
      case "blue":
        cardColorClass = classes.container__blue;
        textColor = " text-gray ";
        break;
      case "white": 
        cardColorClass = classes.container__white
        textColor = " text-ink "
    }
  }

  return (
    <div
      className={`${cardColorClass} z-20 -rotate-2 translate-y-16 w-[110%] lg:w-full -translate-x-4 lg:translate-x-4 flex flex-col pt-20 space-y-8 xl:space-y-20 lg:h-[40rem] xl:h-auto px-16 xl:px-20`}
    >
      <img className="lg:w-32 w-20" src={process.env.PUBLIC_URL + LOGOSDIR + proyect.logo} alt="" />
     
    </div>
  );
};

export default ProyectDetails;

/* 

 */