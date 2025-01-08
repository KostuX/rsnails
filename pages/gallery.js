import { Navbar } from "../components/navbar";
import { Head } from "../components/head";

import { ButtonGroup, Button } from "@nextui-org/react";
import { useState, useEffect } from "react";

import Circle from "../components/gallery/circleView";
import Cards from "../components/gallery/cardsView";

import { cfg_images } from "../config/cfg_images";

export default function gallery(cfg) {
  let images = cfg_images.gallery;

  const [viewType, setViewType] = useState(<Circle images={images} />);
  const [inView, setInView] = useState("circle");
  const [isVisible, setIsVisible] = useState(true);

  function scrollToTop() {
    const isBrowser = () => typeof window !== "undefined";
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <div className=" bg-[url('/bg/2_6.png')] bg-center bg-repeat-x bg-repeat-y">
        <div className="justify-center flex z-0 ">
          <div className={` fixed  ${isVisible ? "fixed" : "hidden"}`}>
            <div className="text-center text-sm font-bold mt-24">Peržiūra</div>
            <ButtonGroup>
              <Button
                className=" bg-gradient-to-tl from-pink-500 to-yellow-500 text-white shadow-lg"
                isDisabled={inView === "circle"}
                onPress={() => {
                  setViewType(<Circle images={images} />);
                  setInView("circle");
                }}
              >
                Ratas
              </Button>
              <Button
                className=" bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                isDisabled={inView === "cards"}
                onPress={() => {
                  setViewType(<Cards images={images} />);
                  setInView("cards");
                }}
              >
                Kortelės
              </Button>
            </ButtonGroup>
          </div>
        </div>
        {viewType}
      </div>
    </div>
  );
}
