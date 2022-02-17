import React from "react";

const LOGOSDIR = "/images/logos/";

const Links: React.FC = () => {
    return(
        <div className="h-24 w-full flex flex-row relative justify-around items-center mb-10" >
            <a href="https://github.com/Imagine96" target="_blank" >
                <img src={process.env.PUBLIC_URL + LOGOSDIR + "github-icon-2.svg"} alt="github icon" />
            </a>
            <a>
                <img src={process.env.PUBLIC_URL + LOGOSDIR + "linkedin-icon-2.svg"} alt="linkedin icon" />
            </a>
            <a href="#contact" >
                <img src={process.env.PUBLIC_URL + LOGOSDIR + "mail_black_24dp.svg"} alt="mail icon" />   
            </a>
        </div>
    )
}

export default Links