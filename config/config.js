import { cfg_site } from "./cfg_site";
import { Finger_Paint, Playfair_Display, Raleway } from "next/font/google";
const finger_Paint = Finger_Paint({ weight: "400", subsets: ["latin"] });
const subTitle = Playfair_Display({ weight: "400", subsets: ["latin"] });
const text = Raleway({ weight: "400", subsets: ["latin"] });

export default function config_all() {
  const fonts = {
    title: { font: finger_Paint.className, size: "text-4xl sm:text-9xl" },
    subTitle: {
      font: subTitle.className,
      size: "font-bold text-2xl sm:text-4xl",
    },
    text: { font: text.className, size: "font-thin text-xl md:text-xl" },
  };

  const config = {
    siteConfig: cfg_site,
    fonts: fonts,
  };
  return config;
}
