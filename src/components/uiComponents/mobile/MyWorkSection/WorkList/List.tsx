import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import classes from "./List.module.css"

interface Project {
  name: string;
  logo?: string;
  state?: string;
  link?: string;
}

const LOGOSDIR = "/images/logos/";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;

const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const DATA: Project[] = [
  {
    name: "Tribox",
    logo: "logo-tribox-VERTICAL.png",
    state: "Check it out!",
    link: "https://triboxonline.com",
  },
  {
    name: "Gregarios",
    logo: "gregarios-blanco-1-1024x375.png ",
    state: "Check it out!",
    link: "https://gregarioscc.com"
  },
  {
    name: "Magic Mash",
    logo: "magicmashlogo.jpeg",
    state: "Development",
  },
];

const List: React.FC = () => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const current = wrap(0, DATA.length, page);

  const listItems = DATA.map((item, index) => {
    if (item.link) {
      return (
        <a
          href={item.link ? item.link : "#"}
          target="_blank"
          key={index}
          className="w-[75vw] space-y-4 p-2 flex flex-col items-center justify-around "
        >
          <h1 className="text-2xl montserrat text-center text-mWhite">
            {item.name}
          </h1>
          {item.logo ? (
            <img
              className="h-32 mx-auto"
              src={process.env.PUBLIC_URL + LOGOSDIR + item.logo}
              alt=""
            />
          ) : null}
          <button className="montserrat p-2 text-lg text-black bg-mWhite rounded-3xl px-8 ">
            {item.state ? item.state : "In Progress"}{" "}
          </button>
        </a>
      );
    } else {
      return (
        <div
          key={index}
          className="w-[75vw] space-y-4 p-2 flex flex-col items-center justify-around "
        >
          <h1 className="text-2xl montserrat text-center text-mWhite">
            {item.name}
          </h1>
          {item.logo ? (
            <img
              className="h-32 mx-auto"
              src={process.env.PUBLIC_URL + LOGOSDIR + item.logo}
              alt=""
            />
          ) : null}
          <button className="montserrat p-2 text-lg text-black bg-mWhite rounded-3xl px-8 ">
            {item.state ? item.state : "In Progress"}{" "}
          </button>
        </div>
      );
    }
  });

  return (
    <div className="min-w-[100vw] overflow-hidden flex flex-row items-center justify-center flex-wrap-reverse h-64 mx-auto">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          {listItems[current]}
        </motion.div>
        <p className={` absolute bottom-[5vh] montserrat w-fit text-gray ${classes.arrowLeft}`} >&#x2192;</p>
      </AnimatePresence>
    </div>
  );
};

export default List;
