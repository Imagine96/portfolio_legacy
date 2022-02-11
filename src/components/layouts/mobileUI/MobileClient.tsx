import React from "react";
import Hero from "../../uiComponents/mobile/hero/Hero";
import AboutMe from "../../uiComponents/mobile/aboutMe/AboutMe";
import SideNav from "../../uiComponents/mobile/sideNav/SideNav";

const MobileClient: React.FC = () => {

 

  return (
    <>
      <main className="w-full overflow-x-hidden bg-mWhite flex flex-col items-center justify-center">
        <SideNav />
        <Hero />
        <AboutMe />
      </main>
    </>
  );
};

export default MobileClient;
