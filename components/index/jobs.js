import { Button, Divider } from "@nextui-org/react";
import animateTitle from "../reusable/animateTitle";
import { useRouter } from "next/router";
import { cfg_images } from "../../config/cfg_images";

import gsap from "gsap";
import CustomEase from "gsap/dist/CustomEase";
gsap.registerPlugin(CustomEase);
import { useGSAP } from "@gsap/react";
import { useRef, useEffect, useState } from "react";

export default function Jobs(cfg) {
  const router = useRouter();
  const config = cfg.config;
  let images = cfg_images.short;

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
      scale: 0.8,

      opacity: 1,
      scrollTrigger: {
        trigger: main_div.current,
        toggleActions: "restart pause pause reverse",
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
    <div
      className=" bg-[url('/bg/2_6.png')] bg-center bg-cover overflow-hidden"
      ref={main_div}
    >
      <div className=" uppercase text-right mx-12">
        {" "}
        {animateTitle("darbai", false)}
      </div>
      <div className="grid justify-center grid-cols-1 sm:grid-cols-2 z-0 ">
        <div className="overflow-hidden sm:h-[100vh] h-[50vh] ">
          <div
            className=" mt-24 justify-center flex perspective-[300px] perspective-origin-bottom-left "
            onClick={nextSlide}
            ref={slider_ref}
          >
            {images.map((img, i) => (
              <div
                className="absolute border rounded-xl bg-black overflow-hidden"
                ref={(el) => {
                  card_ref.current.push(el);
                }}
                key={i}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ maxHeight: "500px" }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="items-center content-center justify-center max-w-2xl  ">
          <div className="text-center mt-48  sm:mt-0">
            <div className="w-full font-bold text-2xl mb-4">
              Daugiau Rasite Cia
            </div>
            <div className="text-center font-thin mx-12">
              <Button
                className="mx-4 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                radius="full"
                size="lg"
                onPress={() => router.push(`/gallery`)}
              >
                Galerija
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
