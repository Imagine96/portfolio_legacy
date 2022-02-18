import React, {lazy, Suspense} from "react";
import Notes from "../../uiComponents/desktop/note/Notes";
import Hero from "../../uiComponents/desktop/hero/Hero";
import Book from "../../uiComponents/desktop/book/Book";

const DesktopClient: React.FC = () => {
  
  const Contact = lazy(() => import("../../uiComponents/desktop/contact/Contact"))

  return (
    <>
      <Notes />
      <main className="w-full desktop overflow-hidden">
        <div className="w-full overlay 2xl:mx-auto space-y-8 relative pb-10 backdrop-blur-md bg-ink bg-opacity-25 shadow-inner z-0">
          <Hero />
          <Book />
          <Suspense fallback={null} >
            <Contact />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default DesktopClient;
