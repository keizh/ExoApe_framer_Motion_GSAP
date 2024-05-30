/* eslint-disable no-unused-vars */
import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import WorkInMotion from "./components/WorkInMotion";
import MovingIMG from "./components/MovingIMG";
import Section from "./components/Section";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-fit relative bg-black">
      <Nav />
      <Hero />
      <Work />
      <WorkInMotion />
      <MovingIMG />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
