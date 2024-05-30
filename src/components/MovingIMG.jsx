import React, { useEffect, useRef } from "react";
import gsap, { ScrollTrigger } from "gsap/all";

function MovingIMG() {
  const parent = useRef(null);
  const t1 = useRef(null);
  const t2 = useRef(null);
  const t3 = useRef(null);
  const t4 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        markers: true,
        scrub: true,
        start: "0 0",
        end: "bottom 0",
      },
    });

    tl.to(t1.current, { x: "100%", y: "-35%" }, "a");
    tl.to(t2.current, { x: "-100%", y: "-35%" }, "a");
    tl.to(t3.current, { x: "-100%", y: "35%" }, "a");
    tl.to(t4.current, { x: "100%", y: "-35%" }, "a");
  });

  return (
    <div
      ref={parent}
      className="w-full overflow-hidden h-[90vh] md:h-[130vh] bg-white overflow-hidden relative "
    >
      <div className="h-full relative">
        <div className=" w-auto h-[50%] md:h-[70%] absolute object-fill top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2">
          <img
            src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
            className="h-full"
          />
          <img
            ref={t1}
            className="absolute z-[10] top-[10%] -right-[40%] h-[35%] lg:h-[50%]"
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
          />

          <video
            ref={t2}
            autoPlay
            loop
            muted
            className="absolute z-[10] top-[30%] -left-[60%] md:scale-[1.05]"
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>

          <img
            ref={t3}
            className="absolute z-[10] top-[80%] lg:top-[90%] -left-[35%] h-[35%] aspect-video h-[80px] md:scale-[2]"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
          />

          <video
            ref={t4}
            autoPlay
            loop
            muted
            className="absolute z-[10] top-[80%] -right-[80%] scale-[1.3] md:scale-[1.3]"
            src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"
          ></video>
        </div>
      </div>
    </div>
  );
}

export default MovingIMG;
