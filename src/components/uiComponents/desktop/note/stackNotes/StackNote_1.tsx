import React from "react";

interface props {
  children?: React.ReactNode;
  text: string;
  img: string;
  defase?: number 
}

const LOGOSDIR = "/images/logos/";

const StackNote: React.FC<props> = (props: props) => {
  
  let initSize = {
    height: 35,
    width: 30,
  };

  const screenSize = {
    width: window.innerWidth,
  };

  if (screenSize.width < 1280) {
    initSize = {
      height: 25,
      width: 20,
    };
  }

  let defase = 20
  if(props.defase){
    defase = props.defase
  }

  return (
    <>
      <div className="flex flex-row xl:pl-4 lg:pl-2 justify-between gap-4 items-center">
        <h1 className={`xl:text-3xl sedgwick lg:text-xl text-lg text-tawny-text `}>{props.text}</h1>
        <img
          height={initSize.height}
          width={initSize.width}
          src={process.env.PUBLIC_URL + LOGOSDIR + props.img}
          alt={`${props.text} + logo`}
        />
      </div>
    </>
  );
};

export default StackNote;
