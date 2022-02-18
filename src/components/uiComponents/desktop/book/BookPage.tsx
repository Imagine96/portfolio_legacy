import React from "react";
import bookPage from "./BookPage.png";

const LOGOSDIR = "/images/logos/";

const BookPage: React.FC = () => {
  return (
    <div
      className={` translate-x-[25%] 2xl:translate-x[20%] md:h-[30rem] 2xl:h-[50rem] 2xl:translate-y-4 lg:translate-x-[20%] absolute w-[60vw] md:w-[40vw] lg:w-[50vw] z-10 2xl:p-10`}
    >
      <img
        className="absolute -z-10  w-full  right-0 scale-[120%] lg:scale-[95%] 2xl:scale-[85%] lg:right-12 lg:top-0 2xl:-top-6 md:top-8 "
        src={bookPage}
        alt=""
      />
      <div className="z-10 lg:px-12 md:pt-6  pl-16  lg:space-y-6 lg:h-[40rem] lg:pt-16 xl:space-y-2 space-y-2 ">
        <h1 className=" xl:text-[32px] 2xl:text-[4rem] sedgwick lg:pl-8 2xl:pl-20 text-[24px] lg:my-8 my-2 text-gray z-10">
          Hello there
        </h1>
        <p className=" montserrat xl:w-[75%] lg:w-[85%] 2xl:pl-20 w-[90%] xl:pl-8 xl:text-[14px] 2xl:text-[18px] lg:text-[12px] text-[10px] text-gray first-letter:ml-2 first-letter:font-bold">
          I’m passionate about bringing ideas and designs to the
          internet in the form of handcrafted websites and webapps because I see
          in it more than an essential business tool for sales and marketing, a
          form of expression not just for the business behind it, but also for
          the designer who dreams it and the developer who conceives it.
          <br /> <br />I specialize in building user interfaces and client-side
          functionalities and manage html and different css and js tools and
          frameworks, which ensures greater scalability and customization even
          after the final product is delivered
          <br />
          <br />
          Make shure to check this site from your mobile as well for other
          experience ;)
          <br />
          <span className="montesrrat text-xs 3xl:text-base ">
            {" "}
            This portfolio is a work in progress{" "}
          </span>
        </p>
        <div className="2xl:h-52 xl:h-40 xl:flex xl:flex-col xl:flex-wrap 2xl:pl-20 lg:pt-6 2xl:space-y-6 lg:space-y-4 xl:pt-10 space-y-1 z-10">
          <div className="px-4 ">
            <a
              href="https://github.com/Imagine96"
              target="_blank"
              className="montserrat md:text-[12px] lg:text-sm text-gray"
            >
              <span>
                <img
                  height={"20px"}
                  width={"24px"}
                  className="inline mr-8 lg:h-8 w-6 lg:w-8 xl:h-12 xl:w-12 "
                  src={process.env.PUBLIC_URL + LOGOSDIR + "github-icon-1.svg"}
                  alt=""
                />
              </span>
              Github Profile
            </a>
          </div>
          <div className="px-4 ">
            <a
              href="https://www.linkedin.com/in/ruben-guedes-732b64219"
              target="_blank"
              className="montserrat md:text-[12px] lg:text-sm text-gray"
            >
              <span>
                <img
                  height={"20px"}
                  width={"24px"}
                  className="inline mr-8 lg:h-8 w-6 lg:w-10 xl:h-12 xl:w-16"
                  src={process.env.PUBLIC_URL + LOGOSDIR + "linkedin.svg"}
                  alt=""
                />
              </span>
              LinkedIn
            </a>
          </div>
          <div className="px-4 ">
            <a
              href="#contact"
              className="montserrat md:text-[12px] lg:text-sm text-gray"
            >
              <span>
                <img
                  height={"20px"}
                  width={"24px"}
                  className="inline mr-8 -translate-x-2 lg:h-8 w-6 lg:w-10 xl:h-10 xl:w-16"
                  src={process.env.PUBLIC_URL + LOGOSDIR + "mailwhite.svg"}
                  alt=""
                />
              </span>
              rubgued@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
