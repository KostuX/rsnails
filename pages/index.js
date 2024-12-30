import DefaultLayout from "../layouts/default";
import Intro from "../components/index/intro";
import Intro2 from "../components/index/intro2";
import Banner from "../components/index/banner";
import Kvalifikuoti from "../components/index/block2";
import Person from "../components/index/person";
import Gallery from "../components/index/gallery";
import Contact from "../components/index/contact";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <DefaultLayout>
      <Intro />
      <Intro2/>
      <Kvalifikuoti />
      <Person />
      <Gallery />
      <Contact />
    </DefaultLayout>
  );
}
