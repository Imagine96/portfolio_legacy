import React, { useState, useEffect } from "react";
import Marker from "./Marker";

const NAVSID = ["hero", "about-me", "dummy", "contact"];

const SideNav: React.FC = () => {
  const [markers, setActiveMarker] = useState<boolean[]>([
    true,
    false,
    false,
    false,
  ]);

  const [markersHeight, setMarkerHeight] = useState<number[]>([]);

  const onNavClicked = (index: number) => {

    if(index === 0){
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }else{
      window.scrollTo({
        top: markersHeight[index] + 200,
        behavior: "smooth"
      });
    }
  };

  const handleScroll = () => {
    let newMarkers = [false, false, false, false];

    let marker: number = 0;

    markersHeight.forEach((item, index) => {
      if (item < window.scrollY) {
        if (index !== marker) {
          marker = index;
        }
      }
    });

    newMarkers[marker] = true;
    if (newMarkers !== markers) {
      setActiveMarker(newMarkers);
    }
  };

  useEffect(() => {
    const screenSize = getScreenSize();
    let sectionHeights: number[] = [];

    markers.forEach((marker, index) => {
      if (index === 0) {
        sectionHeights.push(0);
      } else {
        sectionHeights.push(screenSize * index - 200);
      }
    });

    setMarkerHeight(sectionHeights);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [markers]);

  return (
    <div
      className={` flex flex-col items-center justify-around absolute h-[25vh] top-[50%] -translate-y-[50%] left-4 z-50`}
    >
      {markers.map((status, index) => {
        return (
          <Marker
            index={index}
            onClick={onNavClicked}
            height={markersHeight[index]}
            key={index}
            current={status}
          />
        );
      })}
    </div>
  );
};

export default SideNav;

const getScreenSize = () => {
  return window.innerHeight;
};
