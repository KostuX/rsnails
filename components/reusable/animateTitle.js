import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { Playfair_Display } from "next/font/google";
const titleFont = Playfair_Display({ weight: "400", subsets: ["latin"] });

export default function animateTitle(txt, left = true) {
  function space() {
    return <span> &nbsp;&nbsp; </span>;
  }

  function title() {
    return (
      <div className="overflow-hidden">
        {textArr.map((char, i) => (
          <div
            className={` transition translate-y-4 inline-block duration-1000 ease-in-out ${titleFont.className} text-2xl sm:text-6xl `}
            key={i}
            ref={(el) => {
              chars.current.push(el);
            }}
          >
            {char === " " ? space() : char}
          </div>
        ))}
      </div>
    );
  }

  function progressBar() {
    return <div className="bg-red-100 h-1 rounded-full " ref={progress}></div>;
  }

  const progress = useRef();
  const chars = useRef([]);

  let textArr = txt.split("");

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      chars.current,
      {
        opacity: 0.8,
        y: 150,
      },
      {
        opacity: 1,
        duration: 0.2,
        stagger: 0.05,
        y: 0,
        delay: 0.2,
        scrollTrigger: {
          trigger: chars.current,
          toggleActions: "restart restart restart reverse",
        },
      }
    );

    gsap.fromTo(
      progress.current,
      {
        xPercent: left ? 150 : -150,
      },
      {
        delay: 0.7,
        xPercent: 0,
        scrollTrigger: {
          trigger: progress.current,
          toggleActions: "restart restart restart reverse",
        },
      }
    );
  });

  return (
    <div className=" justify-center ">
      <div className="mt-24">
        {title()}
        {progressBar()}
      </div>
    </div>
  );
}
