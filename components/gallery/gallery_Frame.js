import ImageFrame from "./image_Frame";
import config_all from "../../config/config";
import { useEffect, useState } from "react";
import Gallery_Card from "../paslaugos/card";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Button } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

gsap.registerPlugin(useGSAP);

export default function Gallery_Frame(img) {
  const config = config_all();
  const [displayImageIndex, setDisplayImageIndex] = useState(0);

  let images = img.images;
  let display_index = displayImageIndex;
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const gallery = document.querySelector(".gallery");
    const previewImage = document.querySelector(".preview-img img");

    document.addEventListener("mousemove", function (event) {
      let x = event.clientX;
      let y = event.clientY;

      let centerX = window.innerWidth / 2;
      let centerY = window.innerHeight / 2;

      let percentX = (x - centerX) / centerX;
      let percentY = (y - centerY) / centerY;

      let rotateX = 55 + percentY * 2;
      let rotateY = percentX * 2;

      gsap.to(gallery, {
        duration: 1,
        ease: "power2.Out",
        rotateX: rotateX,
        rotateY: rotateY,
        overwrite: "auto",
      });
    });

    for (let i = 0; i < images.length; i++) {
      let item = document.createElement("div");
      item.className = "item";
      let img = document.createElement("img");
      img.src = `${images[i].src}`;
      item.appendChild(img);
      gallery.appendChild(item);
    }

    const items = document.querySelectorAll(".item");
    const numberOfItems = items.length;
    const angleIncrement = 360 / numberOfItems;

    items.forEach((item, index) => {
      gsap.set(item, {
        rotateY: 90,
        rotateZ: index * angleIncrement - 90,
        transformOrigin: "100% 300px",
      });
      item.addEventListener("mouseover", function () {
        const imageInsideItem = item.querySelector("img");
        previewImage.src = imageInsideItem.src;

        display_index = index;
        setDisplayImageIndex(display_index);
        gsap.set(item, {
          x: 10,
          y: 10,
          z: 10,
          ease: "power2.out",
          duration: 0.5,
        });
      });

      item.addEventListener("mouseout", function () {
        previewImage.scr = images[displayImageIndex].src;

        gsap.set(item, {
          x: 0,
          y: 0,
          z: 0,
          ease: "power2.out",
          duration: 0.5,
        });
      });
    });
    let startX = 0;
    let startY = 0;
    let isDragging = false;
    let lastDeltaX = 0;

    document.addEventListener("touchend", (event) => {
      isDragging = false;

      let releasedX = startX - event.changedTouches[0].clientX;
      let releasedY = startY - event.changedTouches[0].clientY;

      let axis = Math.abs(releasedX) > Math.abs(releasedY) ? "x" : "y";

      if (axis === "x") {
        let fw = releasedX > 0;
        changeImage(event, fw);
      } else {
        let fw = releasedY > 0;
        changeImage(event, fw);
      }
    });

    document.addEventListener("mouseup", (event) => {
      isDragging = false;
    });

    document.addEventListener("touchstart", (event) => {
      startX = event.touches[0].clientX;
      startY = event.touches[0].clientY;
      isDragging = true;
    });

    document.addEventListener("mousedown", (event) => {
      startX = event.clientX;
      startY = event.clientY;
      isDragging = true;
    });

    // spin wheel depends on touch position
    const moveEvent = ["touchmove", "mousemove"];
    moveEvent.forEach((eventType) => {
      document.addEventListener(eventType, function (event) {
        if (isDragging) {
          let touch = event;

          if (eventType === "touchmove") {
            touch = event?.touches[0];
          }
          const deltaX = touch.clientX - startX;
          const deltaY = touch.clientY - startY;

          let turnLeft = deltaX - lastDeltaX > 0;

          const viewportHeight = window.innerHeight;
          const upperHalf = viewportHeight / 2 > touch.clientY;

          if (Math.abs(lastDeltaX) > Math.abs(deltaY)) {
            if (turnLeft) {
              if (upperHalf) {
                spin(true);
              } else {
                spin(false);
              }
            } else {
              if (upperHalf) {
                spin(false);
              } else {
                spin(true);
              }
            }
          } else {
            if (deltaY > 0) {
              spin(true);
            } else {
              spin(false);
            }
          }
          lastDeltaX = deltaX;
        }
      });
    });
  });

  function changeImage(event, forward = true) {
    if (event.pointerType === "touch" || event.target.type !== "button") {
      display_index = forward ? display_index + 1 : display_index - 1;
      display_index = (display_index + images.length) % images.length;
      setDisplayImageIndex(display_index);
    }
  }

  function spin(forward = true) {
    const items = document.querySelectorAll(".item");
    const numberOfItems = items.length;
    const angle = 360 / numberOfItems;
    const spinTo = forward ? `+=${angle}` : `-=${angle}`;

    items.forEach((item) => {
      gsap.to(item, {
        rotationZ: spinTo,
        ease: "power3.out",
        duration: 1,
        overwrite: "auto",
      });
    });
  }
  return (
    <div className="  h-screen bg-blue-100  ">
      <div className="container ">
        <div className="gallery"></div>
      </div>
      <div className="preview-img ">
        <Card className="py-4">
          <CardBody className="overflow-visible py-2  justify-center grid">
            <Image
              alt={`${images[displayImageIndex]?.alt}`}
              className="object-cover rounded-xl "
              src={`${images[displayImageIndex]?.src}`}
              width={270}
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">
              {images[displayImageIndex]?.title}
            </h4>
          </CardHeader>
        </Card>
        <div className="mt-2">
          <Button
            className="w-1/2"
            size="sm"
            onPress={(event) => {
              spin(false);
              changeImage(event, false);
            }}
          >
            {" "}
            {"< Previous"}{" "}
          </Button>
          <Button
            className="w-1/2 "
            size="sm"
            onPress={() => {
              spin(true);
              changeImage(event, true);
            }}
          >
            {" "}
            {"Next >"}{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
