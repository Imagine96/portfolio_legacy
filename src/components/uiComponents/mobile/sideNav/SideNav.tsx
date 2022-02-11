import React, { useState, useEffect } from "react";
import Marker from "./Marker";

const SideNav: React.FC = () => {
  const [markers, setActiveMarker] = useState<boolean[]>([
    true,
    false,
    false,
    false,
  ]);

  const [markersHeight, setMarkerHeight] = useState<number[]>([]);

  const [scrollPosition, setScrollPosition] = useState<number>(0);

  const onNavClicked = (height: number) => {
    window.scrollTo(0, height + 100)
  }

  const handleScroll = () => {

    setScrollPosition(window.scrollY);

    let newMarkers = markers;

    markersHeight.forEach((item, index) => {
      if (window.scrollY >= markersHeight[1]) {
        if (item <= window.scrollY) {
          newMarkers[index] = true;
          newMarkers[0] = false;
        } else {
          newMarkers[index] = false;
        }
      } else {
          newMarkers = [true, false, false, false];
      }
      if (newMarkers !== markers) {
        setActiveMarker(newMarkers);
      }
    });
  };

  useEffect(() => {
    const screenSize = getScreenSize();
    let sectionHeights: number[] = [];

    markers.forEach((marker, index) => {
      sectionHeights.push(screenSize/2 * index + 100);
    });

    setMarkerHeight(sectionHeights);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [markers]);


  return (
    <div className={` flex flex-col items-center justify-around fixed h-[25vh] top-[20rem] -translate-y-[50%] left-4 z-20`}>
      {markers.map((status, index) => {
        return <Marker onClick={onNavClicked} height={markersHeight[index]} key={index} current={status} />;
      })}
    </div>
  );
};

export default SideNav;

const getScreenSize = () => {
  return window.innerHeight;
};
