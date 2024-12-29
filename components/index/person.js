import { Divider } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Person() {
  const main_div = useRef();

  const divider_2 = useRef();
  const image = useRef();
  const description = useRef();
  const description_title = useRef();

  useGSAP(() => {
    const el = divider_2.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 100 },
      {
        // delay:0.1,
        opacity: 1,
        duration: 1,
        ease: "power1",
        y: 0,
        scrollTrigger: {
          trigger: el,
          toggleActions: "restart pause pause reverse",
        },
      }
    );
  });

  useGSAP(() => {
    const el = image.current;
    gsap.fromTo(
      el,
      { opacity: 0, x: -100 },
      {
        delay: 0.5,
        opacity: 1,
        duration: 1,
        ease: "power1",
        x: 0,
        scrollTrigger: {
          trigger: el,
          toggleActions: "restart pause pause reverse",
        },
      }
    );
  });

  useGSAP(() => {
    const el = description.current;
    gsap.fromTo(
      el,
      { opacity: 0, x: 100 },
      {
        delay: 0.3,
        opacity: 1,
        duration: 1,
        ease: "power1",
        x: 0,
        scrollTrigger: {
          trigger: el,
          toggleActions: "restart pause pause reverse",
        },
      }
    );
  });

  useGSAP(() => {
    const el = description_title.current;
    gsap.fromTo(
      el,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        duration: 1,
        ease: "power5",
        x: 0,
        scrollTrigger: {
          trigger: el,
          toggleActions: "restart pause pause reverse",
        },
      }
    );
  });

  useGSAP(() => {
    const el = main_div.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 200 },
      {
        opacity: 1,
        duration: 1,
        ease: "power1",
        y: 0,

        scrollTrigger: {
          trigger: el,
          toggleActions: "restart pause pause reverse",
          // scrub: 1, // true or number  // tie to scrool bar
          // pin: true
        },
      }
    );
  });

  return (
    <div className=" backdrop-blur-xl z-0  " ref={main_div}>
      <Divider className="mb-24" ref={divider_2} />
      <div className="grid h-screen  sm:grid-cols-2 grid-cols-1  ">
        <div
          className="text-center  mx-4 grid justify-center items-center  "
          ref={image}
        >
          <img
            className="personal image"
            src="/profile.jpg"
            alt="Profile Image"
            style={{ height: "30vh", width: "30vh" }}
          />
        </div>
        <div className=" items-center  justify-center content-center max-w-2xl">
          <div className="text-center mt-12 ">
            <div
              className="w-full font-bold text-2xl mb-4"
              ref={description_title}
            >
              Rs Nails
            </div>
            <div className="text-center font-thin mx-12" ref={description}>
              Esu profesionali manikiūrininkė, teikianti aukščiausios kokybės
              paslaugas. Kiekvienam klientui suteikiu individualų dėmesį,
              atsižvelgdama į jų pageidavimus ir stilių. Naudodama tik
              geriausias priemones, užtikrinu ilgalaikį ir nepriekaištingą
              rezultatą. Mano tikslas – suteikti jums elegancijos ir
              pasitikėjimo savimi.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
