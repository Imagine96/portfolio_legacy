import React, { useRef, useEffect } from "react";
import classes from "./Hero.module.css";

const Hero: React.FC = () => {
  return(
    <div className={`${classes.falling_star} w-full h-[100vh] relative m-0 p-0 bg-ink `} >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Hero

