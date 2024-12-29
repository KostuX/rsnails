import DefaultLayout from "../layouts/default";
import Intro from "../components/index/intro";
import Banner from "../components/index/banner";
import Kvalifikuoti from "../components/index/block2";
import Person from "../components/index/person";
import Gallery from "../components/index/gallery";
import Image from "next/image";

export default function Home() {
  return (
    <DefaultLayout>
      <Intro />
      <Kvalifikuoti />
      <Person />
      <Gallery />

      <div className="bg-red-100 h-screen text-center font-bold text-8xl ">
        <div className="mt-96">Comming soon</div>
      </div>
    </DefaultLayout>
  );
}
