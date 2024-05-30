import React from "react";
import { PiStarFourFill } from "react-icons/pi";

function Section() {
  return (
    <div className="h-[65vh] w-full py-10   bg-white  overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-0.2"
        className="flex flex-col justify-center items-center gap-6"
      >
        <h1 className="flex items-center justify-center text-[5vw] md:text-[2vw] gap-2">
          <PiStarFourFill className="text-inherit" /> In the Media
        </h1>
        <h2 className="text-[16vw] leading-none text-center lg:text-7xl font-semibold">
          Spread the News
        </h2>
        <p className="w-[80%] text-center lg:w-[30%] text-[4vw] md:text-[1.2vw]">
          Find out more about our work on these leading design and technology
          platforms.
        </p>
        <h1 className="border-b-2 border-black text-[5vw] md:text-[1.4vw]">
          Browse all news
        </h1>
      </div>
    </div>
  );
}

export default Section;
