import React from "react";
import bookPage from "./BookPage.png";

const LOGOSDIR = "/images/logos/";

const BookPage: React.FC = () => {

  return (
    <div
      className={` translate-x-[25%] md:h-[30rem] lg:translate-x-[20%] absolute w-[60vw] md:w-[40vw] lg:w-[50vw] z-10 `}
    >
      <img
          className="absolute -z-10  w-full  right-0 scale-[120%] lg:scale-[95%] lg:right-12 lg:top-0 md:top-8 "
          src={bookPage}
        />
      <div className="z-10 lg:px-12 md:pt-6  pl-16  lg:space-y-6 lg:h-[40rem] lg:pt-16 xl:space-y-12 space-y-2 ">
        <h1 className=" xl:text-[32px] lg:translate-x-8 text-[24px] lg:my-8 my-2 text-gray z-10">Hello there</h1>
        <p className=" montserrat xl:w-[75%] lg:w-[85%] w-[90%] xl:pl-8 xl:text-[14px] lg:text-[12px] text-[10px] text-gray first-letter:ml-2 first-letter:font-bold">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
        </p>
        <div className=" xl:space-y-6 lg:pt-6 lg:space-y-4 space-y-1 z-10">
          <div className="px-4">
            <p className="montserrat md:text-[12px] lg:text-sm text-gray">
              <span>
                <img
                  className="inline mr-8 lg:h-8 w-6 lg:w-8 xl:h-12 xl:w-12 "
                  src={process.env.PUBLIC_URL + LOGOSDIR + "github-icon-1.svg"}
                />
              </span>
              Github Profile
            </p>
          </div>
          <div className="px-4 ">
            <p className="montserrat md:text-[12px] lg:text-sm text-gray">
              <span>
                <img
                  className="inline mr-8 lg:h-8 w-6 lg:w-10 xl:h-12 xl:w-16"
                  src={process.env.PUBLIC_URL + LOGOSDIR + "linkedin.svg"}
                />
              </span>
              LinkedIn
            </p>
          </div>
          <div className="px-4 ">
            <p className="montserrat md:text-[12px] lg:text-sm text-gray">
              <span>
                <img
                  className="inline mr-8 -translate-x-2 lg:h-8 w-6 lg:w-10 xl:h-10 xl:w-16"
                  src={process.env.PUBLIC_URL + LOGOSDIR + "mailwhite.svg"}
                />
              </span>
              rubgued@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
