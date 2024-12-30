import DefaultLayout from "../layouts/default";
import Intro from "../components/index/intro_Overlay";
import Intro2 from "../components/index/intro2";
import Block2 from "../components/index/block2";
import Person from "../components/index/person";
import Gallery from "../components/index/gallery";
import Contact from "../components/contacts/contact";
import { useEffect } from "react";
import { cfg_site } from "../config/cfg_site";

import { Finger_Paint, Playfair_Display, Raleway } from "next/font/google";
const finger_Paint = Finger_Paint({ weight: "400", subsets: ["latin"] });
const subTitle = Playfair_Display({ weight: "400", subsets: ["latin"] });
const text = Raleway({ weight: "400", subsets: ["latin"] });

export default function Home() {
  let fonts = {
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

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <DefaultLayout>
      <Intro config={config} />
      <Intro2 config={config} />
      <Block2 config={config} />
      <Person config={config} />
      <Gallery config={config} />
      <Contact config={config} />
    </DefaultLayout>
  );
}
