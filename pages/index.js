import DefaultLayout from "../layouts/default";
import Intro from "../components/index/intro_Overlay2";
import Intro2 from "../components/index/intro2";
import Block2 from "../components/index/block2";
import Person from "../components/index/person";
import Gallery from "../components/index/gallery";
import Contact from "../components/contacts/contact";
import { useEffect } from "react";
import config_all from "../config/config";


export default function Home() {
  const config = config_all();

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
