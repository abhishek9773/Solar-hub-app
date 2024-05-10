import React from "react";
import "./App.css";
import Header from "./components/Header";
import HeroScreen from "./components/HeroScreen";
import ExpertScreen from "./components/ExpertScreen";
import WhyChooseScreen from "./components/WhyChooseScreen";

const App = () => {
  return (
    <div className="">
      <Header />
      <div className="mx-[60px]">
        <HeroScreen />
        <ExpertScreen />
        <WhyChooseScreen />
      </div>
    </div>
  );
};

export default App;
