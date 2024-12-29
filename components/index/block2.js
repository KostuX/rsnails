import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import animateTitle from "../../utils/animateTitle";
import ComponentLayout from "../../layouts/components";
export default function Kvalifikuoti() {
  const load_1 = useRef();
  const top_div = useRef();

  useGSAP(() => {
    const el = load_1.current;
    gsap.fromTo(
      el,
      { opacity: 0, y: -100 },
      {
        delay: 0.7,
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
    <div className="w-screen h-fit sm:h-screen ">
      <ComponentLayout>
        {"text"}

        <img
          className="personal image"
          src="/profile.jpg"
          alt="Profile Image"
          style={{ height: "30vh", width: "30vh" }}
        />
        <div className="w-full font-bold text-2xl mb-4">Rs Nails</div>
        <div className="text-center font-thin mx-12">
          Esu profesionali manikiūrininkė, teikianti aukščiausios kokybės
          paslaugas. Kiekvienam klientui suteikiu individualų dėmesį,
          atsižvelgdama į jų pageidavimus ir stilių. Naudodama tik geriausias
          priemones, užtikrinu ilgalaikį ir nepriekaištingą rezultatą. Mano
          tikslas – suteikti jums elegancijos ir pasitikėjimo savimi.
        </div>
      </ComponentLayout>
      {/*}
      <div className="uppercase  text-right"> {animateTitle("Apie Mus")}</div>
      <div className="text-center  mx-4 grid justify-center content-center mt-12  ">
        <img
          className="personal image"
          src="/profile.jpg"
          alt="Profile Image"
          style={{ height: "30vh", width: "30vh" }}
        />
      </div>
      <div className="flex justify-center " ref={load_1}>
        <div
          className="text-center h-[256px]  font-thin text-sm sm:text-4xl max-w-2xl my-24  "
          ref={top_div}
        >
          Mūsų kvalifikuoti manikiūro meistrai yra apmokyti, todėl garantuojame
          nepriekaištingą procedūrą nuo pradžios iki pabaigos. Be to, gausite
          individualiai pritaikytas stiliaus ir priežiūros rekomendacijas,
          sukurtas specialiai jums.
        </div>
      </div>
      {*/}
    </div>
  );
}
