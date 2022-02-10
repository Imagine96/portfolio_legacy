import React from "react";
import classes from "./Hero.module.css";

const Hero: React.FC = () => {

  const hiText: JSX.IntrinsicElements["svg"][] = [
    <svg
      className={classes.svg}
      key="h"
      width="30"
      height="42"
      viewBox="0 0 30 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={classes.path}
        d="M25.3455 2.99626L25.3456 2.99627L25.3486 2.98922C25.3486 2.98922 25.3486 2.98908 25.3488 2.98879C25.3513 2.9837 25.3785 2.93315 25.4849 2.84808C25.6079 2.74964 25.8093 2.62763 26.1208 2.49784L26.1409 2.48943L26.1608 2.48032C26.7867 2.19348 27.315 2.07331 27.7588 2.06632C25.6836 7.28772 23.8722 12.6627 22.3243 18.191L21.8624 19.8405L23.5743 19.7771L24.4316 19.7454C23.8294 20.2062 23.379 20.3731 23.0676 20.4042L23.0177 20.4092L22.9684 20.4182L22.4404 20.5142L21.6543 20.6571L21.4539 21.4305C20.0663 26.7873 18.9224 32.5081 18.0209 38.5916C18.0135 38.6322 17.9434 38.8939 17.2406 39.2583C16.5242 39.6298 15.8723 39.79 15.272 39.79C15.2312 39.79 15.1951 39.7887 15.1634 39.7866C15.9852 33.9936 17.1128 28.3404 18.5458 22.8264L19.0401 20.9244L17.1079 21.283C13.9548 21.8681 10.8037 22.6479 7.65466 23.6218L6.95415 23.8385L6.80142 24.5556C6.05892 28.0421 5.28702 32.3861 4.48515 37.5819C4.47941 37.6164 4.4179 37.8804 3.7046 38.2503C2.98821 38.6218 2.33629 38.782 1.736 38.782C1.69453 38.782 1.65693 38.7809 1.62297 38.779C2.28055 34.3942 2.99852 30.3037 3.77655 26.5069L4.01696 25.3338L2.92205 25.06C2.9247 25.0564 2.92744 25.0527 2.93026 25.049C3.08771 24.8828 3.34111 24.691 3.73501 24.494L4.26031 24.2314L4.39346 23.6594C6.1074 16.2958 8.21403 9.66321 10.7089 3.75655C10.7121 3.75024 10.7401 3.69993 10.8449 3.61608C10.9679 3.51764 11.1693 3.39563 11.4808 3.26584L11.5009 3.25743L11.5208 3.24833C12.141 2.96405 12.687 2.84047 13.1696 2.83424C11.0525 8.28529 9.18931 14.3314 7.57731 20.969L7.04814 23.1479L9.17977 22.4523C12.1493 21.4833 15.2477 20.7631 18.4761 20.2929L19.2734 20.1768L19.4969 19.4028C21.2117 13.4645 23.1619 7.99648 25.3455 2.99626ZM25.1758 19.0349C25.1758 19.0349 25.1755 19.0358 25.1746 19.0377C25.1753 19.0358 25.1758 19.0349 25.1758 19.0349Z"
        stroke="white"
        strokeWidth="2.8"
      />
    </svg>,
    <svg
      className={classes.svg}
      key="i"
      width="18"
      height="46"
      viewBox="0 0 18 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={classes.path}
        d="M7.36657 2.36136L7.40772 2.33892L7.44707 2.31345C7.77128 2.10367 8.15524 1.98599 8.64001 1.98599C8.75793 1.98599 8.87699 1.99395 8.99752 2.01031C8.70977 3.11558 8.49086 3.87479 8.33848 4.31421C8.27011 4.46205 8.0905 4.68715 7.57762 4.9124C6.9645 5.1619 6.52881 5.24599 6.24001 5.24599C6.1817 5.24599 6.13196 5.24162 6.08925 5.23441C6.23658 4.69256 6.46074 3.87744 6.76239 2.78674C6.77166 2.77603 6.78561 2.76099 6.80567 2.74173C6.89885 2.65228 7.07264 2.52169 7.36657 2.36136ZM6.74682 2.80647C6.7468 2.80647 6.74712 2.80597 6.74782 2.80497L6.74682 2.80647ZM6.58834 19.9392L6.58784 19.9426C6.39706 21.2144 6.03015 23.5277 5.48608 26.8882L5.48604 26.8882L5.48454 26.8979C4.97284 30.224 4.54039 33.2502 4.18742 35.9758C4.16784 36.078 4.07097 36.3285 3.50547 36.66C2.94044 36.9779 2.4009 37.118 1.87201 37.118C1.78689 37.118 1.7147 37.1142 1.65385 37.1083C2.1884 33.9523 2.75307 30.3705 3.34787 26.3635C3.98698 22.2412 4.43534 19.295 4.6923 17.5287L5.69774 10.9694C5.7068 10.9223 5.77171 10.6973 6.34625 10.3841C7.00362 10.0437 7.57143 9.90599 8.06401 9.90599C8.08417 9.90599 8.10317 9.9063 8.12106 9.90688L6.58834 19.9392ZM10.3931 44.606C10.3146 44.606 10.2304 44.5971 10.1393 44.5759C10.9623 43.0528 11.7286 41.6704 12.4384 40.4282L12.4427 40.4206L12.4469 40.4131L13.6828 38.1789C13.842 37.9202 14.0781 37.6932 14.434 37.5047L14.4451 37.4988L14.4562 37.4927C14.8625 37.267 15.2471 37.17 15.6251 37.17C15.6958 37.17 15.7661 37.1771 15.8372 37.1928C14.8018 39.1338 13.6376 41.2474 12.3443 43.5338C12.1551 43.8284 11.8901 44.07 11.5141 44.258L11.476 44.277L11.4394 44.2986C11.0685 44.5167 10.7253 44.606 10.3931 44.606Z"
        stroke="white"
        strokeWidth="2.5"
      />
    </svg>,
  ];

  const onEnded = () => {
    document.getElementById("about")?.scrollIntoView()
  }

  return (
    <div
      className={`${classes.container} w-full h-[100vh] flex flex-col justify-center items-center relative shadow-md`}
    >
      <div className=" -translate-x-[24rem] " >{hiText.map((item) => item)}</div>
      <h2 className={` ${classes.questions_1} montserrat text-left font-bold text-[48px] text-gray -translate-y-[5rem]  `}>
        <br />
        Have an idea?
        <br />
        <span className={` ${classes.questions_2} ml-8 `}>For the web?</span>
      </h2>
      <h2 onAnimationEnd={onEnded} className={` ${classes.questions_3} montserrat font-bold text-[48px] text-gray `}>
        Let`s talk!
      </h2>
    </div>
  );
};

export default Hero;
