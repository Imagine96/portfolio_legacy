import React, {useState} from "react";
import ProjectList from "./ProjectsList";
import ProjectDetails from "./ProjectDetails";

export type ColorType = "yellow" | "pink" | "blue" | "white";

export type ProjectImgType = {
    img: string;
    alt: string;
    text: string;
    by: string;
    on: string
}

export type ProjectType = {
  logo: string;
  name: string;
  type: ColorType;
  link?: string;
  state?: string;
  description?: string;
  imgs?: ProjectImgType[];
};

const PROYECTSDEMO: ProjectType[] = [
  {
    name: "Tribox",
    logo: "logo-tribox-VERTICAL.png",
    state: "Check it out!",
    link: "https://triboxonline.com",
    type: "blue"
  },
  {
    name: "Gregarios",
    type: "pink",
    logo: "gregarios-blanco-1-1024x375.png ",
    state: "Check it out!",
    link: "https://gregatios.com"
  },
  {
    name: "Magic Mash",
    logo: "magicmashlogo.jpeg",
    state: "Development",
    type: "yellow"
  },
];


const Projects: React.FC = () => {

    const [ proyects ] = useState<ProjectType[]>(PROYECTSDEMO)
    const [selectedProyect, setSelectedProyect] = useState<number>(0)

    const onProyectSelected = (index: number) => {
        console.log(index)
        setSelectedProyect(index)
    }

    return(
        <div id="proyects" className="w-full pt-10 rounded-3xl grid grid-cols-2 grid-rows-1 " >
            <div>
                <h1 className={`ml-16 mb-4 text-gray text-4xl `} > My work </h1>
                <ProjectList onProyectSelected={onProyectSelected} proyects={proyects} />
            </div>
            <ProjectDetails proyect={proyects[selectedProyect]} />
        </div>
    )
}

export default Projects
