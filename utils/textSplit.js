import React, { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function splitText(text) {
  const chars = useRef([]);
  useGSAP(() => {
    gsap.fromTo(
      chars.current,
      {
        opacity: 0.8,
        y: 150,
      },
      {
        opacity: 1,
        duration: 0.3,
        stagger: 0.05,
        y: 0,
        delay: 0.2,
      }
    );
  });
  let textArr = text.split("");
  return (
    <div>
      <div className="overflow-hidden ">
        {textArr.map((char, i) => (
          <div
            className="transition translate-y-4 inline-block duration-1000 ease-in-out"
            key={i}
            ref={(el) => {
              chars.current.push(el);
            }}
          >
            {char}
          </div>
        ))}
      </div>
    </div>
  );
}
