import React from "react";
import classes from "./Notes.module.css";

interface Props {
  children?: React.ReactNode;
  delay: number
  type?: "yellow" | "pink" | "white";
  rotation?: string;
  position?: string;
  spacing?: string;
}

const Note: React.FC<Props> = (props: Props) => {

  let noteClass = classes.yellowCard;
  let animationDelay : string

  if(props.delay < 2){
    animationDelay = (props.delay).toString() + "s"
  }else{
    animationDelay = (props.delay + 2).toString() + "s"
  }

  let spacing = "space-y-4"

  if(props.spacing){
    spacing = props.spacing
  }

  if (props.type === "yellow") {
    noteClass = classes.yellowCard;
  }
  if (props.type === "pink") {
    noteClass = classes.pinkCard;
  }
  if (props.type === "white") {
    noteClass = classes.whiteCard;
  }

  return (
    <div
      style={{
        opacity: 0,
        animation: `intro 1s ease-out ${animationDelay} forwards`
      }}
      className={` ${props.position} ${props.rotation} hidden md:flex z-50 absolute xl:h-[23rem] xl:w-[23rem] lg:h-[15rem] lg:w-[15rem] w-[14rem] h-[13rem] flex-col items-center justify-center shadow-md rounded-[32px] 
      ${noteClass}
      `}
    >
      <div className={` ${spacing} w-[80%] pl-8 p-2`} >
      {props.children}
      </div>
    </div>
  );
};

export default Note;