import { useRef } from "react";
import ComponentLayout from "../../layouts/components";

import { person } from "../../config/variables";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Person(cfg) {
  const config = cfg.config;
  const subTitle = useRef();
  const content = useRef();
  const img = useRef();

  useGSAP(() => {
    gsap.registerPlugin(window.ScrollTrigger);
    gsap.fromTo(
      content.current,
      { opacity: 0, y: 150 },
      {
        delay: 0.2,
        opacity: 1,
        duration: 1,
        ease: "power1",
        y: 0,

        scrollTrigger: {
          trigger: content.current,
          toggleActions: "restart pause pause reverse",
        },
      }
    );

    gsap.fromTo(
      subTitle.current,
      { opacity: 0, y: 100 },
      {
        delay: 0.5,
        opacity: 1,
        duration: 1,
        ease: "power1",
        y: 0,

        scrollTrigger: {
          trigger: subTitle.current,
          toggleActions: "restart pause pause reverse",
        },
      }
    );

    gsap.fromTo(
      img.current,
      { opacity: 0, scale: 1.5 },
      {
    
        opacity: 1,
        duration: 1,
        ease: "power1",
        scale: 1,

        scrollTrigger: {
          trigger: img.current,
          toggleActions: "restart pause pause reverse",
        },
      }
    );
  });

  let props = {
    config: config,
    leftSide: true,
    elements: {
      title: person.title,
      subTitle: <div ref={subTitle}>{person.subTitle}</div>,
      content: <div ref={content}>{person.content}</div>,
      img: (
        <img
          className=" max-h-[75vh] max-w-[75vh]"
          src={person.img.src}
          alt={person.img.alt}
          ref={img}
        />
      ),
    },
  };

  return (
    <div className=" bg-[url('/bg/2_2.png')] dark:bg-none bg-cover bg-no-repeat  flex justify-center  ">
      <ComponentLayout props={props} />
    </div>
  );
}
