import DefaultLayout from "../layouts/default";
import Banner from "../components/index/banner";
import Person from "../components/index/person";
import Image from "next/image";

export default function Home() {
  return (
    <DefaultLayout>
    
       <Banner/>
       <Person/>
       
<div className="bg-red-100 h-screen text-center font-bold text-8xl "> 
  <div className="mt-96">Comming soon</div>
       
  </div>
    </DefaultLayout>
  );
}
