import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import animateTitle from "../../utils/animateTitle";
import ComponentLayout from "../../layouts/components";
export default function Kvalifikuoti() {
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
    leftSide: false,
    elements: {
      title: "Apie Mus",
      subTitle: <div ref={subTitle}>Mes</div>,
      content: (
        <div ref={content}>
          Esu profesionali manikiūrininkė, teikianti aukščiausios kokybės
          paslaugas. Kiekvienam klientui suteikiu individualų dėmesį,
          atsižvelgdama į jų pageidavimus ir stilių. Naudodama tik geriausias
          priemones, užtikrinu ilgalaikį ir nepriekaištingą rezultatą. Mano
          tikslas – suteikti jums elegancijos ir pasitikėjimo savimi.
        </div>
      ),
      img: (
        <img
          className=" h-[30vh] w-[30vh]"
          src="/profile.jpg"
          alt="Profile Image"
          ref={img}
        />
      ),
    },
  };

  return <ComponentLayout props={props} />;
}
