import React from "react";
import Hero from "../../uiComponents/mobile/hero/Hero";

const MobileClient: React.FC = () => {
  return (
    <>
      <main className="w-full overflow-hidden h-screen bg-ink flex flex-col items-center justify-center">
        <Hero />
      </main>
    </>
  );
};

export default MobileClient;
