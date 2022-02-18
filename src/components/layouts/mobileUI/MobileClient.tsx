import React from "react";
import Hero from "../../uiComponents/mobile/hero/Hero";
import AboutMe from "../../uiComponents/mobile/aboutMe/AboutMe";
import MyWorkSection from "../../uiComponents/mobile/MyWorkSection/MyWork";
import Contact from "../../uiComponents/mobile/contact/Contact";
import Footer from "../../uiComponents/mobile/footer/Footer";

const MobileClient: React.FC = () => {

  return (
    <>
      <main className="w-full overflow-x-hidden bg-mWhite flex flex-col items-center justify-center">
        <Hero />
        <AboutMe />
        <MyWorkSection oposite={true} color="black" />
        <Contact />
      </main>
    </>
  );
};

export default MobileClient;
