import React, {useRef} from "react";
import SideNav from "../sideNav/SideNav";
import Form from "./Form";
import StarFall from "../starFall/StarFall";
import classes from "../starFall/StarFall.module.css"

const OWLS = "/images/owls.svg"

const TREE = "/images/blackTree.svg"

const Contact: React.FC = () => {

    const containerRef = useRef<HTMLDivElement | null>(null)

    return(
        <div className={` ${classes.falling_star} overflow-hidden min-h-[750px] w-full relative flex flex-col pl-8 pt-12`} id="contact" >            
            <StarFall darkStars={true} containerRef={containerRef} />
            <h1 className="montserrat text-3xl font-bold sha" > Contact </h1>
            <h3 className="text-xl montserrat my-4" > Get in touch! </h3>
            <Form />
            <img className="absolute scale-150 bottom-24 translate-y-2 z-0 left-20 " src={process.env.PUBLIC_URL + TREE} alt="tree" />
            <object className="w-[110%] absolute top-[40%] -translate-x-12 " type="image/svg+xml" data={process.env.PUBLIC_URL + OWLS}>svg-animation</object>
            <SideNav />
        </div>
    )
}

export default Contact