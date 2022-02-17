import React from "react";

interface Props {
  current: boolean;
  onClick: (index: number) => void;
  height: number;
  index: number;
}

const Marker: React.FC<Props> = (props) => {
  const { current, onClick, height, index } = props;

  let selectedClass: string = "selectedNav";

  if (index < 2) {
    switch (index) {
      case 0: {
        selectedClass = "selectedNav";
        break;
      }
      case 1: {
        selectedClass = "selectedNavDark";
        break;
      }
    }
  } else {
    if (index % 2) {
      selectedClass = "selectedNavDark";
    } else {
      selectedClass = "selectedNav";
    }
  }

  return (
    <div
      onClick={() => onClick(index)}
      className="border-2 js-smooth-scroll border-ink p-[0.1rem] rotate-45"
    >
      <div
        className={`${
          current ? selectedClass : "unSelectedNav "
        }  w-2 h-2 border-2 border-transparent border-separate `}
      ></div>
    </div>
  );
};

export default Marker;
