import React from "react";
import { ProyectType } from "./Proyects";
import classes from "./ProyectDetails.module.css";

const IMGSDIR = "/images/";

interface Props {
  proyect: ProyectType;
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
    }
  }

  return (
    <div
      className={`${cardColorClass} z-20 -rotate-2 translate-y-16 w-[110%] lg:w-full -translate-x-4 lg:translate-x-4 flex flex-col pt-20 space-y-8 xl:space-y-20 lg:h-[40rem] xl:h-auto px-16 xl:px-20`}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="xl:pl-8" >
          <h1 className={`${textColor} xl:text-3xl lg:text:2xl xl:mt-8 text-xl`}> {proyect.name} </h1>
          <a className={`${textColor}`} > {proyect.website} </a>
        </div>
        <img className="lg:w-32 w-20" src={proyect.logo} />
      </div>
      <div className="flex justify-around gap-4 flex-col items-center lg:px-8 ">
        <p className={`${textColor} text-sm xl:text-base`}>{proyect.description}</p>
        <div className=" flex flex-row items-center justify-around w-full lg:mt-8 xl:mt-24  " >
          <img
            className=" self-start h-24 w-24 rounded-lg shadow-md"
            src={proyect.imgs?.[0].img}
            alt={proyect.imgs?.[0].alt}
          />
          <p className={`${textColor}`} >
              {proyect.website}
          </p>
        </div>
      </div>
      {/* <div className="flex flex-row items-center justify-around ">
        {proyect.imgs?.map((image, index) => {
          return (
            <img
              key={index}
              className="h-24 w-24 rounded-lg shadow-md"
              src={image.img}
              alt={image.alt}
            />
          );
        })}
      </div> */}
    </div>
  );
};

export default ProyectDetails;
