import React from "react";
import Notes from "../../uiComponents/desktop/note/Notes";
import Contact from "../../uiComponents/desktop/contact/Contact";
import Hero from "../../uiComponents/desktop/hero/Hero";
import Book from "../../uiComponents/desktop/book/Book";
import Proyects from "../../uiComponents/desktop/proyects/Proyects";

const DesktopClient: React.FC = () => {
  return (
    <>
      <Notes />
      <main className="w-full overflow-hidden desktop ">
        <div className="w-full overlay space-y-8 relative backdrop-blur-md bg-ink bg-opacity-25 shadow-inner z-0">
          <Hero />
          <Book />
          <Proyects />
          <Contact />
        </div>
      </main>
    </>
  );
};

export default DesktopClient;
