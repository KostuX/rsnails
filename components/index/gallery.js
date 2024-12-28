import { Button, Divider } from "@nextui-org/react";

import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
gsap.registerPlugin(CustomEase);
import { useGSAP } from "@gsap/react";
import { useEffect } from "react";

export default function Gallery() {
  let isAnimating = false;

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

    isAnimating = true;

    let slider = document.querySelector(".slider");
    let cards = Array.from(slider.querySelectorAll(".card"));
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
      <div className=" text-center">Darbai</div>
      <div className=" container " onClick={nextSlide}>
        <div className="slider bg-blue-100">
          <div className=" card">
            <img src="./gallery/1.png" alt="img" />
            <div className="copy"></div>
          </div>
          <div className=" card">
            <img src="./gallery/2.png" alt="img" />
            <div className="copy"></div>
          </div>
          <div className=" card">
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
