import Banner from "./banner";
import splitText from "../../utils/textSplit";

import { Finger_Paint } from "next/font/google";
const finger_Paint = Finger_Paint({ weight: "400", subsets: ["latin"] });
import React, { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Intro() {
  const main_div = useRef();
  const black_div = useRef();
  const banner_div = useRef();
  const init_name = useRef();
  const progress = useRef();
  useGSAP(() => {
    gsap
      .timeline()
      .fromTo(progress.current, { width: 0 }, { width: "+=500", duration: 1 })
      .fromTo(
        black_div.current,
        { ease: "back", opacity: 1, ease: "back.out" },
        { yPercent: -100, duration: 0.5, opacity: 0 }
      )
      .fromTo(
        banner_div.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
        }
      );
  });
  return (
    <div className="h-screen w-screen " ref={main_div}>
      <div className="bg-black h-screen w-screen absolute  " ref={black_div}>
        <h1
          className={`text-white text-center  content-center h-[100vh] text-9xl ${finger_Paint.className} grid  justify-center content-center`}
          ref={init_name}
        >
          {splitText("RS Nails")}
          <div
            className="bg-white h-1.5 block rounded-full dark:bg-gray-300  "
            ref={progress}
          ></div>
        </h1>
      </div>
      <div className="banner z-0 " ref={banner_div}>
        <Banner />
      </div>
    </div>
  );
}
