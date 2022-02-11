import React, {useEffect, useState} from "react";

interface Props{
    current: boolean,
    onClick: (height: number) => void 
    height: number,
}

type TextColor =  "tawny-text" | "gray"

const Marker: React.FC<Props> = (props) => {

    const {current, onClick, height} = props

    return(
        <div>
            <div
                onClick={() => onClick(height)}
                className={`${current ? "selectedNav " : "unSelectedNav "}  w-2 h-2 box-content rotate-45 border-2 border-separate outline-1 outline outline-ink `} > </div>
        </div>
    )
}

export default Marker