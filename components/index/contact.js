import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import animateTitle from "../../utils/animateTitle";
import ComponentLayout from "../../layouts/components";
export default function Contact() {
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
    leftSide: true,
    elements: {
      title: "Susisiekti",
      subTitle: <div ref={subTitle}>Kontaktai</div>,
      content: <div ref={content}>emai, addresas, mob.</div>,
      img: <>zemelapis</>,
    },
  };

  return <ComponentLayout props={props} />;
}
