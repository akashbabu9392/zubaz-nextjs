"use client";

import { useEffect } from "react";
import BackToTop from "./BackToTop";


const Wrapper = ({ children }: any) => {

  useEffect(() => {
    if (typeof window === "undefined") return;

    import("wow.js").then(({ default: WOW }) => {
      const wow = new WOW({ live: false });
      wow.init();
    });
  }, []);
 
  return (
    <>  
      {children}
      <BackToTop /> 
    </>
  );
};

export default Wrapper;
 