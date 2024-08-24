import React from "react";
import Header from "./header";
import Main from "./main";
import HowToWork from "./howtowork";
import Footer from "./footer";

const Page: React.FC = () => {
  return (
    <div>
      <Header />
      <Main />
      <HowToWork />
      <Footer />
    </div>
  );
};

export default Page;
