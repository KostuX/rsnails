import { Button, Divider } from "@nextui-org/react";

import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
gsap.registerPlugin(CustomEase);
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";

export default function Gallery() {
  let isAnimating = false;

  let slider_ref = useRef();
  let card_ref = useRef([]);

  function init() {
    let cards = Array.from(document.querySelectorAll(".card"));
    gsap.to(cards, {
      y: (i) => -20 + 20 * i + "%",
      z: (i) => 20 * i,
      rotate: (i) => Math.round((cards.length - 1 - i) * 2) + "%",
      duration: 1,
      ease: "cubic",
      stagger: -0.1,
    });
  }

  useEffect(() => {
    init();
  });

  function nextSlide() {
    if (isAnimating) return;

    console.log(card_ref);

    isAnimating = true;

    let slider = slider_ref.current;
    let cards = Array.from(card_ref);
    let lastCard = cards.pop();

    gsap.to(lastCard, {
      y: "+=150%",
      duration: 0.5,
      ease: "cubic",
      onComplete: () => {
        slider.prepend(lastCard);
        init();

        setTimeout(() => {
          isAnimating = false;
        }, 500);
      },
    });
  }

  return (
    <div className=" ">
      <div className=" text-center ">Darbai</div>

      <div className="relative  h-screen overflow-hidden" onClick={nextSlide}>
        <div
          className="  perspective-[300px] perspective-origin-bottom-left"
          ref={slider_ref}
        >
          <div
            className=" absolute top-1/2 left-1/2 w-[60] h-[40vh] border overflow-hidden bg-black transform -translate-x-1/2 -translate-y-1/2 translate-z-1/2"
            ref={(el) => (card_ref.current[0] = el)}
          >
            <img src="./gallery/1.png" alt="img" />
            <div className="copy"></div>
          </div>
          <div
            className=" absolute top-1/2 left-1/2 w-[60] h-[40vh] border overflow-hidden bg-black transform -translate-x-1/2 -translate-y-1/2 translate-z-1/2"
            ref={(el) => (card_ref.current[1] = el)}
          >
            <img src="./gallery/2.png" alt="img" />
            <div className="copy"></div>
          </div>
          <div
            className=" absolute top-1/2 left-1/2 w-[60] h-[40vh] border overflow-hidden bg-black transform -translate-x-1/2 -translate-y-1/2 translate-z-1/2"
            ref={(el) => (card_ref.current[2] = el)}
          >
            <img src="./gallery/3.png" alt="img" />
            <div className="copy"></div>
          </div>
          <div className=" card">
            <img src="./gallery/4.png" alt="img" />
            <div className="copy"></div>
          </div>
          <div className=" card">
            <img src="./gallery/5.png" alt="img" />
            <div className="copy"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
