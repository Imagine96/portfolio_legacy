import React, { useRef, lazy, Suspense } from "react";
import classes from "../starFall/StarFall.module.css";
import StarFall from "../starFall/StarFall";

const Hero: React.FC = () => {
  const grassClasses =
    " w-[150vw] h-[75vw] translate-y-4 -translate-x-16 absolute  bottom-0 m-0 p-0 ";

  const containerRef = useRef<HTMLDivElement>(null);

  const WhiteGrass = lazy(() => import("../WhiteGrass"));

  return (
    <div
      id="hero"
      ref={containerRef}
      className={`${classes.falling_star} flex flex-col w-full h-screen  relative m-0 pt-[30%] bg-black `}
    >
      <div className="text-3xl space-y-8 ml-16">
        <h1 className="montserrat font-bold text-mWhite ">Hello</h1>
        <h1 className="montserrat font-bold text-mWhite ">
          I'm <br /> Ruben
        </h1>
        <h1 className="montserrat font-bold text-mWhite ">
          FrontEnd <br /> Developer
        </h1>
      </div>
      <StarFall containerRef={containerRef} />
      <Suspense fallback={null}>
        <WhiteGrass grassClasses={grassClasses} />
      </Suspense>
    </div>
  );
};

export default Hero;
