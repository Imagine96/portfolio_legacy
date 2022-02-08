import React from "react";
import { ProyectType} from "./Proyects";
import classes from "./ProyectList.module.css";

interface Props extends ProyectType {
  children?: React.ReactNode;
  index: number;
  onSelected: (index: number) => void
}

const IMGSDIR = "/images/";

const ProyectListItem: React.FC<Props> = (props: Props) => {

  let cardColorClass = classes.item;
  let textColor = "text-ink"

  if (props.type) {
    switch (props.type) {
      case "pink":
        cardColorClass = classes.item__pink;
        textColor = "text-tawny-text"
        break;
      case "blue":
        cardColorClass = classes.item__blue;
        textColor = "text-gray"
        break;
    }
  }

  return (
    <div 
      className={`${cardColorClass} px-20 z-10 h-40 w-full lg:w-[85%] flex flex-row items-center gap-8 hover:transition hover:scale-105 `}
      onClick={() => props.onSelected(props.index)}
    >
      <div className="flex flex-col items-start justify-center w-full h-full " >
        <h1 className={`${textColor} lg:text-xl text-base`}> {props.name}</h1>
        <a className={`${textColor}`} href={props.website}> {props.website} </a>
      </div>
      <img className="lg:w-36 w-24 " src={props.logo} />
    </div>
  );
};

export default ProyectListItem;
