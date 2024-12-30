import { Button } from "@nextui-org/react";

import {
  ParallaxBanner,
 
  ParallaxProvider,
} from "react-scroll-parallax";

import { Finger_Paint } from "next/font/google";
const kranky = Finger_Paint({ weight: "400", subsets: ["latin"] });


import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Banner(cfg) {
  let config  = cfg.config
  const background = {   
    image: "./bg/bg.jpg",
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1, 1.5, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="mt-24 sm:mt-56  text-center grid flex items-center justify-center ">
        <div>
          <h1
            className={`text-7xl sm:text-9xl font-bold ${config.fonts.title.font} bg-gradient-to-r from-blue-100 via-yellow-200 to-indigo-200 text-transparent bg-clip-text `}
          >
            {config.siteConfig.title}
          </h1>
          <h5
            className={`bg-gradient-to-r from-blue-200 via-red-200 to-indigo-200 inline-block text-transparent bg-clip-text  text-xl mt-12 ${config.fonts.title.font} sm:mt-12`}
          >
            Nuspalvink savo pasaulį.
          </h5>
        </div>
      </div>
    ),
  };

  const foreground = {
    // image:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png',
    //image:'./bg/bg-btn.png',
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900"></div>
    ),
  };

  let btn_decor="mx-4  shadow-lg max-w-[24vh]"
  const buttons = {
    children: (
      <div className="flex justify-center">
        <div className="mt-[75vh]  bottom-0 grid grid-cols-3 ">
        <Button
            className={`${ btn_decor}`}
            radius="full"
            size="sm"
          >
            Susiskambinam
          </Button>
          <Button
           className={`${ btn_decor}`}
            radius="full"
            size="sm"
          >
            Susirasom
          </Button>
          <Button
            className={`${ btn_decor}`}
            radius="full"
            size="sm"
          >
            Susitinkam
          </Button>
         
        </div>
      </div>
    ),
  };

  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[background, headline, foreground, gradientOverlay, buttons]}
        className="aspect-[2/1] bg-gray-900 h-screen"
      />
    </ParallaxProvider>
  );
}
