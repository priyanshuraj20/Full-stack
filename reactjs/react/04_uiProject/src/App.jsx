import React, { useRef } from "react";
import Section1 from "./componenets/Section1/Section1";
import Section2 from "./componenets/section2/Section2";

const App = () => {
  const Users = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Satisfies",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      tag: "Underbanked",
    },
    {
      image:
        "https://images.unsplash.com/photo-1585554414787-09b821c321c0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D",
      tag: "Satisfied",
    },
    {
      image:
        "https://images.unsplash.com/photo-1587614298171-a223667e51c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      tag: "Satisfied",
    },
    {
      image:
        "https://images.unsplash.com/photo-1587614298171-a223667e51c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      tag: "Satisfied",
    },
    {
      image:
        "https://images.unsplash.com/photo-1587614298171-a223667e51c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      tag: "Satisfied",
    },
    {
      image:
        "https://images.unsplash.com/photo-1585554408473-41530eb9623a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
      tag: "Satisfied",
    },
    {
      image:
        "https://images.unsplash.com/photo-1696960493371-2cbb7d31f80d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
      tag: "Satisfied",
    },
    {
      image:
        "https://images.unsplash.com/photo-1584438772583-54e5d2219ca8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
      tag: "Satisfied",
    },
    {
      image:
        "https://images.unsplash.com/photo-1585554414795-7276ad95aa6a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tag: "Satisfied",
    },
  ];
  return (
    <div>
      <Section1 users={Users} />
      <Section2 />
    </div>
  );
};

export default App;
