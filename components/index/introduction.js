import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import ComponentLayout from "../../layouts/components";
import { introduction } from "../../config/variables";

export default function Introduction(cfg) {
  const config = cfg.config;
  const subTitle = useRef();
  const content = useRef();
  const img = useRef();

  useGSAP(() => {
    gsap.fromTo(
      content.current,
      { opacity: 0, x: 150 },
      {
        delay: 0.7,
        opacity: 1,
        duration: 1,
        ease: "power1",
        x: 0,
        scrollTrigger: {
          trigger: content.current,
          toggleActions: "restart pause pause reverse",
        },
      }
    );

    gsap.fromTo(
      subTitle.current,
      { opacity: 0, x: 100 },
      {
        delay: 1,
        opacity: 1,
        duration: 1,
        ease: "power1",
        x: 0,
        scrollTrigger: {
          trigger: subTitle.current,
          toggleActions: "restart pause pause reverse",
        },
      }
    );

    gsap.fromTo(
      img.current,
      { opacity: 0, scale: 0.5 },
      {
        delay: 0.5,
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
    leftSide: false,
    elements: {
      title: introduction.title,
      subTitle: <div ref={subTitle}>{introduction.subTitle}</div>,
      content: <div ref={content}>{introduction.content}</div>,
      img: (
        <img
          className="max-h-[75vh] max-w-[75vh]"
          src={introduction.img.src}
          alt={introduction.img.alt}
          ref={img}
        />
      ),
    },
  };

  return (
    <div className="sm:bg-[url('/bg/2_3.png')]  bg-cover bg-no-repeat flex justify-center  ">
      <ComponentLayout props={props} />
    </div>
  );
}
