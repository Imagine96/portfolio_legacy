import React, {lazy, Suspense} from "react";
import Notes from "../../uiComponents/desktop/note/Notes";
import Hero from "../../uiComponents/desktop/hero/Hero";

const DesktopClient: React.FC = () => {
  
  const Contact = lazy(() => import("../../uiComponents/desktop/contact/Contact"))
  const Book = lazy(() => import("../../uiComponents/desktop/book/Book"))

  return (
    <>
      <Notes />
      <main className="w-full desktop overflow-hidden">
        <div className="w-full overlay 2xl:mx-auto space-y-8 relative pb-10 backdrop-blur-md bg-ink bg-opacity-25 shadow-inner z-0">
          <Hero />
          <Suspense fallback={null} >
            <Book />
            <Contact />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default DesktopClient;
