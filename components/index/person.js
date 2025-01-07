import { Divider } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import ComponentLayout from "../../layouts/components";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Person(cfg) {
  const config = cfg.config
  const subTitle = useRef();
  const content = useRef();
  const img = useRef();

  useGSAP(() => {
    gsap.fromTo(
      content.current,
      { opacity: 0, y: 150 },
      {
        delay: 0.7,
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
        delay: 1,
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
      title: "Apie Mus",
      subTitle: <div ref={subTitle}>Sveiki!</div>,
      content: (
       
          <div ref={content}>
          Esu Rita, sertifikuota nagų meistrė, ir labai džiaugiuosi galėdama pradėti šią kelionę kartu su jumis.
Mano tikslas – sukurti jūsų nagams ne tik grožį, bet ir užtikrinti, kad jaustumėtės ypatingai kiekvieną dieną. Šiuo metu dar tobulinu savo įgūdžius, todėl procedūros gali užtrukti šiek tiek ilgiau, tačiau dirbu kruopščiai ir atsakingai, kad rezultatas būtų nepriekaištingas.
          </div>
       
      ),
      img: (
        <img
          className=" max-h-[75vh] max-w-[75vh]"
          src="/img/my.png"
          alt="Profile Image"
          ref={img}
        />
      ),
    },
  };

  return (
    <div className=" bg-[url('/bg/2_2.png')] bg-cover bg-no-repeat  flex justify-center  ">
      <ComponentLayout props={props} />
    </div>)
}
