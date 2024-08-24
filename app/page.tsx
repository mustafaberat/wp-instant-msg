import React from "react";
import Header from "./header";
import Main from "./main";
import HowToWork from "./howtowork";

const Page: React.FC = () => {
  return (
    <div>
      <Header />
      <Main />
      <HowToWork />
    </div>
  );
};

export default Page;
