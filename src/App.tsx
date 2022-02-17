import React, { lazy, Suspense } from "react";
import { isMobile } from "react-device-detect";
import Loader from "./components/layouts/loader/Loader";
import "./App.css";


const DesktopClient = lazy(() => import("./components/layouts/desktopUI/DesktopClient"))
const MobileClient = lazy(() => import("./components/layouts/mobileUI/MobileClient"))

const App: React.FC = () => {
  
  let content = null
  
  {isMobile ? (
    content = <MobileClient />
    ) : (
      content = <DesktopClient />
      )}
      
      return (
        <>
      <Suspense fallback={<Loader />} >
        {content}
      </Suspense>
    </>
  );
};


export default App;
