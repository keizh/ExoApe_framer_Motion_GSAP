/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Work from "./components/Work";
import WorkInMotion from "./components/WorkInMotion";
import MovingIMG from "./components/MovingIMG";
import Section from "./components/Section";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap/all";

function App() {
  const mouse = useRef(null);

  const locomotiveScroll = new LocomotiveScroll();

  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.to(mouse.current, {
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="w-full h-fit relative bg-black">
      <div
        ref={mouse}
        data-scroll
        data-scroll-speed="0"
        className="hidden md:flex absolute z-[100000] w-[100px] h-[100px] -translate-y-1/2 -translate-x-1/2 justify-center items-center font-bold text-base rounded-full flex font-[abhaya_libre] backdrop-blur"
      >
        Scroll Slowly
      </div>
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
