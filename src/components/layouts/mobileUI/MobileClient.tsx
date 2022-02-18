import React, { lazy, Suspense } from "react";
import Hero from "../../uiComponents/mobile/hero/Hero";

const MobileClient: React.FC = () => {

  const AboutMe = lazy(() => import("../../uiComponents/mobile/aboutMe/AboutMe"))
  const Contact = lazy(() => import("../../uiComponents/mobile/contact/Contact"))
  const MyWorkSection = lazy(() => import("../../uiComponents/mobile/MyWorkSection/MyWork"))

  return (
    <>
      <main className="w-full overflow-x-hidden bg-mWhite flex flex-col items-center justify-center">
        <Hero />
        <Suspense fallback={null} > 
          <AboutMe />
          <MyWorkSection oposite={true} color="black" />
          <Contact />
        </Suspense>
      </main>
    </>
  );
};

export default MobileClient;
