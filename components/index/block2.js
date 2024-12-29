import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import animateTitle from "../../utils/animateTitle";
export default function Kvalifikuoti() {
  const load_1 = useRef();
  const top_div = useRef();

  useGSAP(() => {
    const el = load_1.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: 200 },
      {
        delay: 0.1,
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
    <div className="w-screen ">
      <div> {animateTitle("text")}</div>
      <div className="flex justify-center " ref={load_1}>
        <div
          className="text-center content-center h-screen font-thin text-2xl max-w-2xl my-24 mx-12 "
          ref={top_div}
        >
          Mūsų kvalifikuoti manikiūro meistrai yra apmokyti, todėl garantuojame
          nepriekaištingą procedūrą nuo pradžios iki pabaigos. Be to, gausite
          individualiai pritaikytas stiliaus ir priežiūros rekomendacijas,
          sukurtas specialiai jums.
        </div>
      </div>
    </div>
  );
}
