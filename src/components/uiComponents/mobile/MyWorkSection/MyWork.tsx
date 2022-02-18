import React, {useRef} from "react";
import StarFall from "../starFall/StarFall";
import classes from "../starFall/StarFall.module.css";
import SideNav from "../sideNav/SideNav";
import List from "./WorkList/List";

interface Props{
    color?: string,
    oposite?: boolean
}

const grassClasses = " w-[150vw] h-[75vw] translate-y-4 -translate-x-16 absolute  bottom-0 m-0 p-0 "

const MyWorkSection: React.FC<Props> = (props) => {

    const containerRef = useRef<HTMLDivElement>(null)

    return(
        <div id="work" ref={containerRef} className={`${classes.falling_star}  min-h-screen md:h-[130vh] relative overflow-hidden w-full bg-${props.color} `} >
            <div className="absolute w-full h-full z-20 justify-center" >
                <h1 className="montserrat ml-32 md:text-center md:mr-12 text-3xl my-32 text-mWhite font-bold " > Previus Work </h1>
                <List />
            </div>
            <StarFall containerRef={containerRef} oposite={props.oposite} />
            <SideNav />
        </div>
    )
}

export default MyWorkSection