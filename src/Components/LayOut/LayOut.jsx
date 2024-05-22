import React from "react";
import Header from "../Header/Header";
import Foooter from "../Footer/Footer";

const LayOut = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      {/* <Foooter /> */}
    </div>
  );
};

export default LayOut;
