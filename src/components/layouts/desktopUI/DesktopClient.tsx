import React from "react";
import Notes from "../../uiComponents/desktop/note/Notes";
import Contact from "../../uiComponents/desktop/contact/Contact";
import Hero from "../../uiComponents/desktop/hero/Hero";
import Book from "../../uiComponents/desktop/book/Book";
import Projects from "../../uiComponents/desktop/projects/Projects";

const DesktopClient: React.FC = () => {
  return (
    <>
      <Notes />
      <main className="w-full overflow-hidden desktop">
        <div className="w-full overlay space-y-8 relative pb-10 backdrop-blur-md bg-ink bg-opacity-25 shadow-inner z-0">
          <Hero />
          <Book />
          <Contact />
        </div>
      </main>
    </>
  );
};

export default DesktopClient;
