import { Divider } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import animateTitle from "../../utils/animateTitle";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Person() {
  const main_div = useRef();

  const image = useRef();
  const description = useRef();
  const description_title = useRef();
  const description_all = useRef();

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
    const el = description_all.current;
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
    <div className="h-screen  " ref={main_div}>
      <div className="uppercase  text-left ">
        {" "}
        {animateTitle("Musu Veikla")}
      </div>
      <div className="grid  sm:grid-cols-2 grid-cols-1  ">
        <div
          className="text-center  mx-4 grid justify-center content-center mt-12  "
          ref={image}
        >
          <img
            className="personal image"
            src="/profile.jpg"
            alt="Profile Image"
            style={{ height: "30vh", width: "30vh" }}
          />
        </div>
        <div className=" items-center content-center justify-center  max-w-2xl">
          <div className="text-center  " ref={description_all}>
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
