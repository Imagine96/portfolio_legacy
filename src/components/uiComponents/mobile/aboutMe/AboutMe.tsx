import React from "react";
import SideNav from "../sideNav/SideNav";
import Links from "./Links";
import WhiteGrass from "../WhiteGrass";

const AboutMe: React.FC = () => {
  const grassClasses =
    " w-[150vw] h-[75vw] translate-y-[90%] z-20 -translate-x-[35%] rotate-180 absolute  bottom-0 m-0 p-0 ";

  return (
    <div
      id="about-me"
      className=" w-full min-h-screen flex flex-col justify-between  p-10 py-16 relative bg-mWhite"
    >
      <h1 className="montserrat font-bold text-3xl text-center"> About Me </h1>
      <p className=" pl-2 w-[80%] mt-4 mx-auto text-sm text-center">
        My name is Rubén, front end developer and my passion is bringing ideas
        and designs to the internet in the form of handcrafted websites and
        webapps because I see in it more than the essential business tool for
        sales and marketing, a form of expression not just for the business
        behind it, but also for the designer who dreams it and the developer who
        conceives it.
        <br /> <br />
        I specialize in building user interfaces and client-side
        functionalities and manage html and different css and js tools and
        frameworks, which ensures greater scalability and customization even
        once the final product is delivered
        <br />
        <br />
        Make shure to check this site from your desktop as well ;)
        <span className="montesrrat text-xs " > These portfolios are work in progress </span>
      </p>
      <Links />
      <SideNav />
      <WhiteGrass grassClasses={grassClasses} />
    </div>
  );
};

export default AboutMe;
