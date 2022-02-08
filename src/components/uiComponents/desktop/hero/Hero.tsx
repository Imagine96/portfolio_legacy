import React from "react";
import classes from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <div
      className={`${classes.container} w-full h-[100vh] flex flex-col justify-center items-center relative shadow-md`}
    >
      <h2 className="montserrat text-left font-bold text-[48px] text-gray -translate-y-[5rem] -translate-x-[8rem] ">
        <span className="-ml-3" >Hi,</span>
        <br />
        Have an idea?
        <br />
        <span className="ml-4 " >For the web?</span>
      </h2>
      <h2 className="montserrat font-bold text-[48px] text-gray -translate-x-[8rem]" >  
        Let`s talk!
      </h2>
    </div>
  );
};

export default Hero;
