import { motion } from "framer-motion";
import React from "react";
import { PiStarFourFill } from "react-icons/pi";

function Work() {
  const content = [
    [
      "https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a",
      "Comlumbia Pictures",
      "Celebrating a century of Cinema",
    ],
    [
      "https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b",
      "Rino & Pelle",
      "Effortless chic lifestyle",
    ],
    [
      "https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15",
      "Aebele Interiors",
      "Luxurious design experience",
    ],
    [
      "https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076",
      "Pixelflakes",
      "Architecture marketing agency",
    ],
  ];

  return (
    <div className="h-fit  w-full px-[5vw] py-[10vw]  overflow-hidden bg-white">
      <div className="flex flex-col gap-2 justify-center ">
        <h1 className="flex gap-2 items-center">
          {" "}
          <PiStarFourFill /> Featured Projects
        </h1>
        <h1 className="text-[12vw] font-semibold overflow-hidden">
          <motion.span
            initial={{ rotate: 45, y: "80%" }}
            whileInView={{ rotate: 0, y: 0 }}
            transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.5 }}
            className=" inline-block origin-left"
          >
            Work
          </motion.span>
        </h1>
        <p className="overflow-hidden">
          <motion.span
            initial={{ rotate: 45, y: "80%" }}
            whileInView={{ rotate: 0, y: 0 }}
            transition={{ ease: [0.65, 0, 0.35, 1], duration: 0.5 }}
            className=" inline-block origin-left"
          >
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </motion.span>
        </p>
      </div>

      <div className="w-full mx-auto flex flex-col gap-8  mt-10 lg:flex-wrap lg:flex-row lg:justify-around ">
        {content.map((ele, index) => (
          <div
            key={index}
            className={`w-full lg:w-[40%] overflow-hidden ${
              index == 1
                ? "lg:scale-[0.80] lg:translate-y-[75%]"
                : index == 0
                ? "lg:scale-[1.2] lg:translate-y-[10%]"
                : index == 2
                ? "lg:scale-[0.5] lg:translate-y-[110%]"
                : index == 3
                ? "lg:scale-[1.05] lg:translate-y-[70%] lg:translate-x-[-25%]"
                : ""
            }`}
          >
            <video
              data-scroll
              data-scroll-speed="-.2"
              autoPlay
              muted
              loop
              className="w-full "
              src={ele[0]}
            ></video>
            <div data-scroll data-scroll-speed="-.05" className="mt-2">
              <h1 className="text-[#000]  font-bold">{ele[1]}</h1>
              <h2 className="text-[#ccc] ">{ele[2]}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="flex py-10 items-center justify-center lg:mt-[60%] lg:ml-[50%]">
        <h1 className="font-lighter font-bold text-[#555] border-b-2 text-[1.5vw]">
          Browse all work
        </h1>
      </div>
    </div>
  );
}

export default Work;
