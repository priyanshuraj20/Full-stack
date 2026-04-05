import React from "react";
import Header from "./Header";
import Page1Content from "./Page1Content";

const Section1 = (props) => {
  return (
    <div className="h-screen w-full ">
      <Header></Header>
      <Page1Content users={props.users}></Page1Content>
      
    </div>
  );
};

export default Section1;
