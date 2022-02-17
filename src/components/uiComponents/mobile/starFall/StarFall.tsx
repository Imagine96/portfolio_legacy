import React, { useEffect } from "react";
import classes from "./StarFall.module.css";

interface Props {
  containerRef: React.RefObject<HTMLDivElement>;
  oposite?: boolean;
  darkStars?: boolean
}
const StarFall: React.FC<Props> = ({ containerRef, oposite, darkStars }: Props) => {

  useEffect(() => {
    const stars = containerRef.current?.querySelectorAll("span");
    stars?.forEach((star) => {
      const time = Math.random() * 2 + 1;
      const delay = Math.random() * 1000
      const left = Math.random() * 200 + 10
      if (oposite) {
        star.style.animation = `starFallOposite ${time}s ${delay}ms linear infinite`;
        star.style.left = left + "px"
      } else {
        star.style.animationDuration = time + "s";
        star.style.animationDelay = delay + "ms"
      } 
    });
  }, []);

  return (
    <>
      <span className={darkStars ? classes.dark : ""} ></span>
      <span className={darkStars ? classes.dark : ""} ></span>
      <span className={darkStars ? classes.dark : ""} ></span>
      <span className={darkStars ? classes.dark : ""} ></span>
      <span className={darkStars ? classes.dark : ""} ></span>
      <span className={darkStars ? classes.dark : ""} ></span>
      <span className={darkStars ? classes.dark : ""} ></span>
      <span className={darkStars ? classes.dark : ""} ></span>
      <span className={darkStars ? classes.dark : ""} ></span>
      <span className={darkStars ? classes.dark : ""} ></span>
    </>
  );
};

export default StarFall;
