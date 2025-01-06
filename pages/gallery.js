import { Navbar } from "../components/navbar";
import { Foot } from "../components/footer";
import { Head } from "../components/head";
import DefaultLayout from "../layouts/default";
import Gallery_Frame from "../components/gallery/gallery_Frame";
import config_all from "../config/config";
import { Switch,ButtonGroup, Button } from "@nextui-org/react";
import {useState,useEffect} from "react"
import ImageFrame from "../components/gallery/image_Frame";
import {cfg_images} from "../config/cfg_images";
export default function gallery(cfg) {
  const config = config_all();

  // types: ["3D Circle", "2D Cards"]
  const [viewType, setViewType] = useState("3D Circle")


  let images = cfg_images.gallery;





  return (
    <div className="">
    <div className=" bg-[url('/bg/2_6.png')] bg-center bg-repeat-x bg-repeat-y">
      <Head />
      <Navbar />
      <div className="justify-center flex z-0 ">
      <div className=" sm:mt-12 fixed">
       <ButtonGroup >     
       <Button isDisabled = {viewType==="3D Circle"} onPress={()=>{setViewType("3D Circle")}}>Wheel</Button>
         <Button isDisabled = {viewType==="2D Cards"} onPress={()=>{setViewType("2D Cards")}}>Cards</Button>     

    </ButtonGroup>
    </div>
    </div>
    {viewType==="3D Circle" &&

      <div className="flex mt-24">
        <Gallery_Frame images={images} />
      </div>
      }
    {viewType==="2D Cards" &&

<div className="grid sm:grid-cols-3 sm:mx-12 mt-24">
  {images.map((img,i)=>(
    <div className="m-4" key={i}>
   <ImageFrame img={img}/>
   </div>
  
  ))}
 
</div>
}
    </div>
    </div>
  );
}
