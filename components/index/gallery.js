import { Button, Divider } from "@nextui-org/react";

import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
gsap.registerPlugin(CustomEase);
import { useGSAP } from "@gsap/react";
import { useRef, useEffect, useState } from "react";

export default function Gallery() {
  let images = [
    { src: "./gallery/1.png", alt: "img" },
    { src: "./gallery/2.png", alt: "img" },
    { src: "./gallery/3.png", alt: "img" },
    { src: "./gallery/4.png", alt: "img" },
    { src: "./gallery/5.png", alt: "img" },
  ];

  let isAnimating = false;

  let slider_ref = useRef();
  let card_ref = useRef([]);
  let main_div = useRef();
  const [cards, setCards] = useState();

  function init(cards) {
    gsap.to(cards, {
      y: (i) => -10 + 10 * i + "%",
      z: (i) => 10 * i,
      rotate: (i) => Math.round((cards.length - 2 - i) * 2) + "%",
      duration: 1,
      ease: "cubic",
      stagger: -0.1,

      opacity: 1,
      scrollTrigger: {
        trigger: main_div.current,

        toggleActions: "restart pause pause reverse",
        // scrub: 0.1, // true or number  // tie to scrool bar
        // pin: true
      },
    });
  }

  useEffect(() => {
    setCards([...card_ref.current]);

    init([...card_ref.current]);
  }, []);

  function nextSlide() {
    let slider = slider_ref.current;
    let cards_loc = cards;
    let lastCard = cards_loc.pop();

    cards_loc.unshift(lastCard);

    gsap.to(lastCard, {
      y: "+=30%",
      duration: 0.5,
      opacity: 0,
      ease: "cubic",
      onComplete: () => {
        slider.prepend(lastCard);
        init(cards);

        setTimeout(() => {
          isAnimating = false;
        }, 1000);
      },
    });
  }

  return (
    <div className=" " ref={main_div}>
      <Divider />
      <div className=" text-center my-24 font-bold text-6xl ">Darbai</div>

      <div className="mt-96">
        <div
          className="relative  h-screen overflow-visible justify-center flex"
          onClick={nextSlide}
        >
          <div
            className="  perspective-[300px] perspective-origin-bottom-left"
            ref={slider_ref}
          >
            {images.map((img, i) => (
              <div
                className="absolute  w-5/6 md:w-3/4 xl:w-1/3  border rounded-xl overflow-hidden bg-black"
                style={{
                  transform: "translate3d(-50%, -50%, 0)",
                }}
                ref={(el) => {
                  card_ref.current.push(el);
                }}
                key={i}
              >
                <img height={200} width={200} src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
