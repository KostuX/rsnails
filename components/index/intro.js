import Banner from "./banner";
import splitText from "../../utils/textSplit";
import React, { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Intro( cfg) {
  let config  = cfg.config

  const main_div = useRef();
  const black_div = useRef();
  const classic_div = useRef()
  const banner_div = useRef();
  const init_name = useRef();
  const progress = useRef();
  useGSAP(() => {
    gsap
      .timeline()
      .fromTo(progress.current, { width: 0 }, { width: "+=500", duration: 1.3 })
      .fromTo(
        black_div.current,
        { ease: "back", opacity: 1, ease: "back.out" },
        { xPercent: -100, duration: 0.2, opacity: 0 }
      )
      .fromTo(
        banner_div.current,
        {
          opacity: 0,
          scale: 1.1,
        },
        {
          opacity: 1,
          duration: 1,
          scale: 1,
        }
      );

      gsap.fromTo(classic_div.current,{opacity:0},{opacity:1, duration:7})
  });
  return (
    <div className="h-screen w-screen " ref={main_div}>
      <div className="bg-black h-screen w-screen absolute  " ref={black_div}>
      <div className="bg-[url('/bg/btq.jpg')] h-screen w-screen absolute  bg-cover" ref={classic_div}>  </div>
        <h1
          className={`text-white text-center  content-center h-[100vh] ${config.fonts.title.size} ${config.fonts.title.font} grid justify-center content-center`}
          ref={init_name}
        >
          {splitText(config.siteConfig.title)}
          <div
            className="bg-gradient-to-r from-blue-200 via-indigo-300 to-red-600 h-1 block rounded-full dark:bg-gray-300  "
            ref={progress}
          ></div>
        </h1>
      </div>
      <div className="banner  " ref={banner_div}>
        <Banner config = {config}/>
      </div>
    </div>
  
  );
}
