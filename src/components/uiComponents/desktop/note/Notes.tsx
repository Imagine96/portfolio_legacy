import React from "react";
import Note from "./Note";
import StackNote from "./stackNotes/StackNote_1";

type STRINGSOBJECT = {
  [key: string]: string
}

const LOGOS1 : STRINGSOBJECT = {
  HTML5: 'html-1.svg',
  CSS3: 'css-3.svg',
  JS: 'logo-javascript.svg',
  NodeJS: 'nodejs-icon.svg',
}

const LOGOS2 : STRINGSOBJECT = {
  TypeScript: 'typescript.svg',
  ReactJs: "react-2.svg",
  TailwindCss: "tailwindcss.svg",
  NextJs: "next-js.svg",
}

const LOGOS3 : STRINGSOBJECT = {
  Wordpress: "wordpress-blue.svg",
  Woocommerce: "woocommerce.svg"
}

const Notes : React.FC = () => {

  return (
    <>
      <Note
        delay={0}
        type="yellow"
        position=" right-[5rem] lg:right-[10rem] top-[25rem] lg:top-[20em] xl:top-[20rem] "
        rotation="rotate-[-20deg]"
      >
        <h1 className="p-2  xl:text-[48px] lg:text-[32px] text-[24px] text-tawny-text lg:-translate-y-10 " > My name is Ruben, </h1>
      </Note>
      <Note
        delay={1}
        type="pink"
        position=" right-[2rem] lg:right-[4rem] xl:right-6 top-[35rem] lg:top-[30rem] xl:top-[35rem] "
        rotation=" lg:rotate-12 rotate-3 "
      >
        <h1 className="p-2 xl:text-[48px] lg:text-[32px] text-[24px] text-tawny-text " > FrontEnd developer. </h1>
      </Note>
      <Note
        delay={2}
        type="white"
        position="right-[0.8rem] lg:right-[0] top-[50rem] lg:top-[55rem] xl:top-[60rem]"
        rotation="rotate-[-6deg]"
        spacing="space-y-3 xl:space-y-8 "
      >
        {Object.keys(LOGOS1).map((key, index) => {
          return(
            <StackNote defase={Math.floor(Math.random() * 5)} img={LOGOS1[key]} text={key} key={index} />
          )
        })}
      </Note>
      <Note
        delay={3}
        type="white"
        position="right-[0.5rem] lg:right-[5%] top-[65rem] z-[100] xl:right-[10%] top-[65rem] lg:top-[70rem] xl:top-[80rem]"
        rotation="rotate-[3deg]"
        spacing="space-y-3 xl:space-y-8 "
      >
         {Object.keys(LOGOS2).map((key, index) => {
          return(
            <StackNote img={LOGOS2[key]} text={key} key={index} />
          )
        })}
      </Note>
      <Note
        delay={3.5}
        type="white"
        position=" right-[1rem] xl:-right-[2rem] top-[75rem] lg:top-[85rem] xl:top-[95rem]"
        rotation="rotate-[-8deg]"
        spacing=" space-y-10 lg:space-y-8 xl:space-y-12"
        >
        {Object.keys(LOGOS3).map((key, index) => {
         return(
           <StackNote img={LOGOS3[key]} text={key} key={index} />
         )
       })}
     </Note>
    </>
  );
};

export default Notes;