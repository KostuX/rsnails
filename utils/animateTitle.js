import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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
            className={`transition translate-y-4 inline-block duration-1000 ease-in-out ${titleFont.className} text-4xl `}
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
    return (
      <div className="bg-red-100" ref={progress}>
        <div className="bg-gradient-to-r from-red-600 via-blue-100 to-red-100 h-1  rounded-full   "></div>
      </div>
    );
  }

  const progress = useRef();
  const chars = useRef([]);

  let textArr = txt.split("");

  useGSAP(() => {
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
        width: 0,
      },
      {
        delay: 0.7,
        width: 1000,
        scrollTrigger: {
          trigger: progress.current,
          toggleActions: "restart restart restart reverse",
        },
      }
    );
  });

  return (
    <div className=" justify-center ">
      <div className=" mt-24 w-5/6 ">
        {title()}
        {progressBar()}
      </div>
    </div>
  );
}
