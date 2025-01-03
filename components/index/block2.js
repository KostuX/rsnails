import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ComponentLayout from "../../layouts/components";
export default function Block2(cfg) {
  const config = cfg.config
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
      title: "Apie Mus",
      subTitle: <div ref={subTitle}>RS Nails</div>,
      content: (
        <div ref={content} >
          "Nedvejokite siekti aukštumų, kai kalbama apie jūsų nagų dizaino siekius. Nesvarbu, ar svajojate apie subtilias gėles, įspūdingus gradientinius efektus, nesenstančią klasikinę raudoną spalvą ar elegantišką prancūzišką manikiūrą - mes pasirūpinsime jūsų norais.
          „RS Nails“ salone mūsų profesionalų komanda yra pasirengusi paversti jūsų nagų svajones realybe. Pasitelkę neprilygstamą patirtį ir dėmesį detalėms, siekiame pranokti jūsų lūkesčius kiekvieno apsilankymo metu.
          Patikėkite savo nagų grožį mums, ir mes pasirūpinsime, kad jaustumėtės nuostabiai nuo rankų iki kojų pirštų galiukų. Rezervuokite laiką jau šiandien ir leiskite mums išpildyti jūsų pageidavimus!"
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

  return   (
    <div className="bg-[url('/bg/4_b.png')] bg-center bg-no-repeat flex justify-center h-screen ">

  
  <ComponentLayout props={props} />

  
  </div>
  )
}
