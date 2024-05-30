import gsap, { ScrollTrigger } from "gsap/all";
import React, { useRef, useEffect } from "react";
import { PiStarFourFill } from "react-icons/pi";

gsap;

function WorkInMotion() {
  const parent = useRef(null);
  const video = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        top: "top top",
        // markers: true,
        scrub: true,
        pin: true,
      },
    });

    tl.to(
      video.current,
      {
        scale: 1,
      },
      "a"
    );

    tl.to(
      text.current,
      {
        gap: "20vw",
      },
      "a"
    );
  }, []);
  return (
    <div
      ref={parent}
      className="h-[100vh] w-full relative bg-black flex justify-center items-center overflow-hidden "
      style={{ background: "linear-gradient( #000, #000)" }}
    >
      <div className="absolute z-[10] top-0 l-0 flex w-full  pt-14 justify-center items-center">
        <h1 className="text-[3.4vw] lg:text-[1vw] text-white w-fit flex justify-between items-center gap-2 ">
          <PiStarFourFill /> Work in motion
        </h1>
      </div>

      <div ref={video} className="w-full h-full scale-[0.2] bg-red-100 ">
        <video
          autoPlay
          muted
          loop
          src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
          className="h-full w-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div
        ref={text}
        className="flex text-white md:text-[5vw] text-[10vw] font-semibold absolute z-[1000] top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] justify-center items-center"
      >
        <p>Play</p>
        <p>Now</p>
      </div>

      <div className="absolute bottom-0 l-0 flex w-full  pb-10 justify-center items-center">
        <h1 className="lg:text-[1vw] text-[3.4vw] px-4 text-white lg:w-[22vw] flex justify-between items-center gap-2 text-center">
          Our work is best experienced in motion. Dont forget to put on your
          headphones.
        </h1>
      </div>
    </div>
  );
}

export default WorkInMotion;
