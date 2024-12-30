import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import SimpleMap from "./map";

import ComponentLayout from "../../layouts/components";

export default function Contact(cfg) {
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
    leftSide: true,
    elements: {
      title: "Susisiekti",
      subTitle: (
        <div className={`${config.fonts.subTitle.font} `} ref={subTitle}>
          Kontaktai
        </div>
      ),
      content: (
        <div className="mt-12" ref={content}>
          <div className="mt-4">{config.siteConfig.contact.phone} </div>
          <div className="mt-4">{config.siteConfig.contact.email}</div>
          <div className="mt-4">{config.siteConfig.contact.address}</div>
        </div>
      ),
      img: <SimpleMap />,
    },
  };

  return (
    <>
      {" "}
      <ComponentLayout props={props} />
    </>
  );
}
