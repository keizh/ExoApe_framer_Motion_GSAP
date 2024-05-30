import React from "react";

function Footer() {
  return (
    <div
      data-scroll
      data-scroll-speed="-0.1"
      className="h-[100vh] md:h-[100vh] py-[10%] px-[10%] md:py-[5%] md:px-[10%]  bg-black flex flex-col justify-between text-white overflow-hidden "
    >
      <div>
        <h1 className="text-[30vw] md:text-[10vw] md:w-[30%] leading-none">
          Our Story
        </h1>
        <p className=" text-[4vw]  mt-[10vh] md:text-[1.2vw]">
          The story behind Exo Ape is one of exploration, creativity and
          curiosity.
        </p>
      </div>
      <div className="w-full h-[1px] bg-white"></div>
      <div className="md:flex md:justify-around md:flex-row grid grid-cols-2 gap-4 text-center">
        <h1>Work</h1>
        <h1>Studio</h1>
        <h1>News</h1>
        <h1>Contact</h1>
        <h1>Behance</h1>
        <h1>Dribble</h1>
        <h1>Twitter</h1>
        <h1>Instagram</h1>
      </div>
    </div>
  );
}

export default Footer;
