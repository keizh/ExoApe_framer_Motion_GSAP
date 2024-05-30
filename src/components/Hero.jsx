import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function Hero() {
  return (
    <>
      <motion.div
        initial={{ rotate: 10, y: "100vh" }}
        animate={{ rotate: 0, y: 0 }}
        transition={{ ease: [0.65, 0, 0.35, 1], duration: 1 }}
        className="w-full h-[170vh] sm:h-[250vh] relative origin-top-left overflow-hidden"
      >
        <img
          data-scroll
          data-scroll-speed="-1"
          className="h-full w-full object-cover "
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
          alt=""
        />

        <div className="absolute z-[10] top-0 left-0 w-full h-full font-sans text-[#eee] pt-[60vh] sm:pt-[55vh] px-[5vw] font-medium tracking-tighter">
          <div className=" w-full sm:w-[35vw] ">
            <h2 className="text-[1.1rem] sm:text-[1.45vw] overflow-hidden">
              <motion.span
                initial={{ rotate: 10, y: "100%" }}
                animate={{ rotate: 0, y: 0 }}
                transition={{ ease: [0.65, 0, 0.35, 1], delay: 1, duration: 1 }}
                className=" inline-block origin-left"
              >
                Global digital design studio partnering with brands and
                businesses that create exceptional experience where people live
                , work and unwind
              </motion.span>
            </h2>
          </div>

          <div className="text-6xl sm:text-[15vw] mt-6 ">
            {["Digital", "Design", "experience"].map((ele, index) => {
              return (
                <h1
                  key={index}
                  className="overflow-hidden origin-left  leading-none pb-2 md:pb-8"
                >
                  <motion.span
                    initial={{ rotate: 45, y: "80%" }}
                    whileInView={{ rotate: 0, y: 0 }}
                    transition={{
                      ease: [0.65, 0, 0.35, 1],

                      duration: 0.5,
                    }}
                    className="inline-block origin-left"
                  >
                    {ele}
                  </motion.span>
                </h1>
              );
            })}
            {/* <h1 className="overflow-hidden origin-left  py-8 ">
              <motion.span
                initial={{ rotate: 45, y: "100%" }}
                animate={{ rotate: 0, y: 0 }}
                transition={{
                  ease: [0.65, 0, 0.35, 1],
                  delay: 1 + 0.1,
                  duration: 1,
                }}
                className="inline-block origin-left"
              >
                Digital
              </motion.span>
            </h1>
            <h1 className="overflow-hidden py-8 -mt-12">
              <motion.span
                initial={{ rotate: 45, y: "100%" }}
                animate={{ rotate: 0, y: 0 }}
                transition={{
                  ease: [0.65, 0, 0.35, 1],
                  delay: 1 + 0.2,
                  duration: 1,
                }}
                className="inline-block origin-left"
              >
                Design
              </motion.span>
            </h1>
            <h1 className="overflow-hidden py-8 -mt-12">
              {" "}
              <motion.span
                initial={{ rotate: 45, y: "100%" }}
                animate={{ rotate: 0, y: 0 }}
                transition={{
                  ease: [0.65, 0, 0.35, 1],
                  delay: 1 + 0.3,
                  duration: 1,
                }}
                className="inline-block origin-left"
              >
                Experience
              </motion.span>
            </h1> */}
          </div>

          <div className="mt-24 text-[1.1rem] text-[#ddd] flex flex-col gap-6 w-full sm:w-[35vw] overflow-hidden">
            <p className="text-[1.1rem] sm:text-[1.45vw] overflow-hidden">
              <motion.span
                initial={{ rotate: 45, y: "80%" }}
                whileInView={{ rotate: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  ease: [0.65, 0, 0.35, 1],
                  duration: 0.5,
                }}
                className="inline-block origin-left"
              >
                We help experience-driven companies thrive by making their
                audience feel the refined intricacies of their brand and product
                in the digital space. Unforgettable journeys start with a click.
              </motion.span>
            </p>

            <h1 className="border-b-2 w-fit  text-[1rem] ">
              {" "}
              <motion.span
                initial={{ rotate: 45, y: "100%" }}
                animate={{ rotate: 0, y: 0 }}
                transition={{
                  ease: [0.65, 0, 0.35, 1],
                  delay: 1 + 0.4,
                  duration: 1,
                }}
                className="inline-block origin-left"
              >
                The Studio
              </motion.span>
            </h1>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
