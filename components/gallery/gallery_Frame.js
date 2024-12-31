import ImageFrame from "./image_Frame"
import config_all from "../../config/config";
import { useEffect } from "react";

import gsap from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

//https://www.youtube.com/watch?v=v0UoqZJRP5M&t=349s

export default function Gallery_Frame(cfg) {
  const config = config_all();

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

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const gallery = document.querySelector(".gallery")
    const previewImage = document.querySelector(".preview-img img")

    document.addEventListener("mousemove", function (event) {
      let x = event.clientX;
      let y = event.clientY;

      let centerX = window.innerWidth / 2
      let centerY = window.innerHeight / 2

      let percentX = (x - centerX) / centerX
      let percentY = (y - centerY) / centerY

      let rotateX = 55 + percentY * 2
      let rotateY = percentX * 2

      gsap.to(gallery, {
        duration: 1,
        ease: "power2.Out",
        rotateX: rotateX,
        rotateY: rotateY,
        overwrite: "auto"

      })

    })


    for (let i = 0; i < images.length; i++) {

      let item = document.createElement("div")
      item.className = "item"

      let img = document.createElement("img")

      img.src = `${images[i].src}`

      item.appendChild(img)
      gallery.appendChild(item)
    }

    const items = document.querySelectorAll(".item")
    const numberOfItems = items.length
    const angleIncrement = 360 / numberOfItems


    items.forEach((item, index) => {
      gsap.set(item, {
        rotateY: 90,
        rotateZ: index * angleIncrement - 90,
        transformOrigin: "100% 300px"

      })
      item.addEventListener("mouseover", function (){
        const imageInsideItem = item.querySelector("img")
        previewImage.src = imageInsideItem.src

        gsap.set(item,{
          x:10,
          y:10,
          z:10,
          ease: "power2.out",
          duration:0.5
        })
  
      })

    ScrollTrigger.create({
      trigger:"body",
      start:"top top",
      end:"bottom bottom",
      scrub:2,
      onRefresh: setupRotation,
      onUpdate: (self)=>{
        const rotationProgress = self.progress * 360 * 1

        items.forEach((item, index)=>{
          const currentAngle = angleIncrement - 90 + rotationProgress

          gsap.to(item,{
            rotationZ: currentAngle,
            ease:"power3.out",
            duration:1,
            overwrite:"auto"
          })
        })
      }



    })

      item.addEventListener("mouseout", function (){
        previewImage.scr = images[0].src

        gsap.set(item,{
          x:0,
          y:0,
          z:0,
          ease: "power2.out",
          duration:0.5
        })


      })


    })
function setupRotation(){}
  


  })


  return (<div className="h-screen">
    <div className="preview-img">
      <img src={images[0].src} alt={images[0].alt} />
    </div>

    <div className="container">
      <div className="gallery"></div>
    </div>
  </div>)
}