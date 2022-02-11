import React, {useState} from "react";
import ProjectList from "./ProjectsList";
import ProjectDetails from "./ProjectDetails";

export type ColorType = "yellow" | "pink" | "blue";

export type ProyectImgType = {
    img: string;
    alt: string;
    text: string;
    by: string;
    on: string
}

export type ProyectType = {
  logo: string;
  name: string;
  website: string;
  type: ColorType;
  description?: string;
  imgs?: ProyectImgType[];
};

const EXTRASDIR = "/images/extras/";
const PLACEHOLDERSDIR = "/images/logos/placeholders/";

const PROYECTSDEMO: ProyectType[] = [
    {
      name: "Test Name",
      website: "www.google.com",
      logo: process.env.PUBLIC_URL + PLACEHOLDERSDIR + "logoipsum-logo-6.svg",
      type: "yellow",
      imgs: [{
          img: process.env.PUBLIC_URL + EXTRASDIR + "sunder-muthukumaran-fd6K_OFlnRA-unsplash-2.jpg",
          alt: "cilinder image",
          text: "https://unsplash.com/@sunder_2k25?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
          by: "Sunder Muthukumaran",
          on: "https://unsplash.com/s/photos/ui?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      },{
        img: process.env.PUBLIC_URL + EXTRASDIR + "sunder-muthukumaran-n7eJHQwefeI-unsplash-2.jpg",
        alt: "cilinder image",
        text: "https://unsplash.com/@sunder_2k25?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        by: "Sunder Muthukumaran",
        on: "https://unsplash.com/s/photos/ui?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    },{
        img: process.env.PUBLIC_URL + EXTRASDIR + "william-felker-fqkrXYMosT4-unsplash-2.jpg",
        alt: "cilinder image",
        text: "https://unsplash.com/@sunder_2k25?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        by: "Sunder Muthukumaran",
        on: "https://unsplash.com/s/photos/ui?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    }],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida lacus vitae velit facilisis hendrerit. Pellentesque vehicula accumsan magna, at cursus orci ultricies pretium. Ut ut ligula et odio mattis sollicitudin. Etiam dignissim vel nibh a iaculis. Integer nec lorem ac nibh congue pretium at vel elit. Suspendisse iaculis sagittis urna. Aenean cursus eget mi non semper. Curabitur in neque diam. Etiam aliquet egestas velit id gravida. Proin luctus euismod tellus, eget ultrices diam pretium eu."
    },
    {
      name: "Test 2 Name",
      website: "www.google.com",
      logo: process.env.PUBLIC_URL + PLACEHOLDERSDIR + "logoipsum-logo-8.svg",
      type: "blue",
      imgs: [{
        img: process.env.PUBLIC_URL + EXTRASDIR + "sunder-muthukumaran-fd6K_OFlnRA-unsplash-2.jpg",
        alt: "cilinder image",
        text: "https://unsplash.com/@sunder_2k25?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        by: "Sunder Muthukumaran",
        on: "https://unsplash.com/s/photos/ui?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    },{
      img: process.env.PUBLIC_URL + EXTRASDIR + "sunder-muthukumaran-n7eJHQwefeI-unsplash-2.jpg",
      alt: "cilinder image",
      text: "https://unsplash.com/@sunder_2k25?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      by: "Sunder Muthukumaran",
      on: "https://unsplash.com/s/photos/ui?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  },{
      img: process.env.PUBLIC_URL + EXTRASDIR + "william-felker-fqkrXYMosT4-unsplash-2.jpg",
      alt: "cilinder image",
      text: "https://unsplash.com/@sunder_2k25?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      by: "Sunder Muthukumaran",
      on: "https://unsplash.com/s/photos/ui?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  }],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida lacus vitae velit facilisis hendrerit. Pellentesque vehicula accumsan magna, at cursus orci ultricies pretium. Ut ut ligula et odio mattis sollicitudin. Etiam dignissim vel nibh a iaculis. Integer nec lorem ac nibh congue pretium at vel elit. Suspendisse iaculis sagittis urna. Aenean cursus eget mi non semper. Curabitur in neque diam. Etiam aliquet egestas velit id gravida. Proin luctus euismod tellus, eget ultrices diam pretium eu."
    },
    {
      name: "Test 3 Name",
      website: "www.google.com",
      logo: process.env.PUBLIC_URL + PLACEHOLDERSDIR + "logoipsum-logo-9.svg",
      type: "pink",
      imgs: [{
        img: process.env.PUBLIC_URL + EXTRASDIR + "sunder-muthukumaran-fd6K_OFlnRA-unsplash-2.jpg",
        alt: "cilinder image",
        text: "https://unsplash.com/@sunder_2k25?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
        by: "Sunder Muthukumaran",
        on: "https://unsplash.com/s/photos/ui?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    },{
      img: process.env.PUBLIC_URL + EXTRASDIR + "sunder-muthukumaran-n7eJHQwefeI-unsplash-2.jpg",
      alt: "cilinder image",
      text: "https://unsplash.com/@sunder_2k25?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      by: "Sunder Muthukumaran",
      on: "https://unsplash.com/s/photos/ui?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  },{
      img: process.env.PUBLIC_URL + EXTRASDIR + "william-felker-fqkrXYMosT4-unsplash-2.jpg",
      alt: "cilinder image",
      text: "https://unsplash.com/@sunder_2k25?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
      by: "Sunder Muthukumaran",
      on: "https://unsplash.com/s/photos/ui?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  }],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida lacus vitae velit facilisis hendrerit. Pellentesque vehicula accumsan magna, at cursus orci ultricies pretium. Ut ut ligula et odio mattis sollicitudin. Etiam dignissim vel nibh a iaculis. Integer nec lorem ac nibh congue pretium at vel elit. Suspendisse iaculis sagittis urna. Aenean cursus eget mi non semper. Curabitur in neque diam. Etiam aliquet egestas velit id gravida. Proin luctus euismod tellus, eget ultrices diam pretium eu."
    }
  ];

const Proyects: React.FC = () => {

    const [ proyects ] = useState<ProyectType[]>(PROYECTSDEMO)
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

export default Proyects
