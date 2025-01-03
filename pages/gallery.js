import { Navbar } from "../components/navbar";
import { Foot } from "../components/footer";
import { Head } from "../components/head";
import DefaultLayout from "../layouts/default";
import Gallery_Frame from "../components/gallery/gallery_Frame";
import config_all from "../config/config";
import { Switch,ButtonGroup, Button } from "@nextui-org/react";
import {useState,useEffect} from "react"
import ImageFrame from "../components/gallery/image_Frame";
export default function gallery(cfg) {
  const config = config_all();

  // types: ["3D Circle", "2D Cards"]
  const [viewType, setViewType] = useState("3D Circle")


  let images = [
    { src: "./gallery/1.png", alt: "img", title: "Title", description: "Description", price: 0 },

    { src: "./gallery/2.png", alt: "img", title: "Title", description: "Description", price: 0 },
    { src: "./gallery/3.png", alt: "img", title: "Title", description: "Description", price: 0 },
    { src: "./gallery/4.png", alt: "img", title: "Title", description: "Description", price: 0 },
    { src: "./gallery/5.png", alt: "img", title: "Title", description: "Description", price: 0 },
    { src: "./gallery/1.png", alt: "img", title: "Title", description: "Description", price: 0 },

    { src: "./gallery/2.png", alt: "img", title: "Title", description: "Description", price: 0 },
    { src: "./gallery/3.png", alt: "img", title: "Title", description: "Description", price: 0 },
    { src: "./gallery/4.png", alt: "img", title: "Title", description: "Description", price: 0 },
    { src: "./gallery/5.png", alt: "img", title: "Title", description: "Description", price: 0 },
    { src: "./gallery/1.png", alt: "img", title: "Title", description: "Description", price: 0 },

    { src: "./gallery/2.png", alt: "img", title: "Title", description: "Description", price: 0 },
    { src: "./gallery/3.png", alt: "img", title: "Title", description: "Description", price: 0 },
    { src: "./gallery/4.png", alt: "img", title: "Title", description: "Description", price: 0 },
    { src: "./gallery/5.png", alt: "img", title: "Title", description: "Description", price: 0 },


  ];





  return (
    <div>
      <Head />
      <Navbar />
      <div className="justify-center flex z-0">
      <div className=" mt-12 fixed">
       <ButtonGroup >      <Button isDisabled = {viewType==="2D Cards"} onPress={()=>{setViewType("2D Cards")}}>2D Cards</Button>     
      <Button isDisabled = {viewType==="3D Circle"} onPress={()=>{setViewType("3D Circle")}}>3D Circle</Button>
    </ButtonGroup>
    </div>
    </div>
    {viewType==="3D Circle" &&

      <div className="flex mt-24">
        <Gallery_Frame />
      </div>
      }
    {viewType==="2D Cards" &&

<div className="grid sm:grid-cols-3 mx-12 mt-24">
  {images.map((img,i)=>(
    <div className="m-4">
   <ImageFrame img={img}/>
   </div>
  
  ))}
 
</div>
}
    </div>
  );
}
