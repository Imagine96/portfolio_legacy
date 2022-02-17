import React, { useRef } from "react";
import StarFall from "../starFall/StarFall";
import classes from "../starFall/StarFall.module.css"

const IMGINE = "/images/Imagine96.svg"

const Footer: React.FC = () => {

    const containerRef = useRef<HTMLDivElement | null>(null)

    return(
        <div id="footer" ref={containerRef} className={`${classes.falling_star}  overflow-hidden w-full bg-black relative h-[15vh]`} >
            <StarFall containerRef={containerRef} oposite={true} />
            <p className="sedwick absolute bottom-0 right-0 -rotate-12 opacity-20 text-mWhite" > Imagine96 </p>
        </div>
    )
}

export default Footer