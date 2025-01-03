import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import NextLink from "next/link";
import Map from "./map";

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
          <div  className="mt-4">
          <NextLink         
            key="phone link"
            href={`mailto:${config.siteConfig.contact.phone}`}            
          >
            <div>{config.siteConfig.contact.phone}</div>
          </NextLink>
          </div>
        
          <div  className="mt-4">
           <NextLink
           className="mt-4"
            key="email link"
            href={`mailto:${config.siteConfig.contact.email}`}
          >
            <div>{config.siteConfig.contact.email}</div>
          </NextLink>
      </div>

      <div  className="mt-4">
          <NextLink
          className="mt-4"
            key="email link"
            href={`mailto:${config.siteConfig.contact.address}`}
          >
            <div>{config.siteConfig.contact.address}</div>
          </NextLink>
          </div>
        </div>
      ),
      img: <Map/>,
    },
  };

  return (
    <div className="bg-[url('/bg/2.png')] bg-centerbg-repeat-y">
      <ComponentLayout props={props} />
    </div>
  );
}
