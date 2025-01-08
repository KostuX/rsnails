import React, { useRef } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function CardView_card(image) {
  const imageRef = useRef([]);
  let img = image.img;

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 50 },
      {
        delay: 0.3,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        y: 0,
        scrollTrigger: {
          trigger: imageRef.current,
          toggleActions: "restart pause pause reverse",
        },
      }
    );
  });

  return (
    <>
      <div className="m-4" ref={imageRef}>
        <Card className="sm:py-4">
          <CardBody className="overflow-visible py-2 justify-center grid">
            <Image
              alt={`${img?.alt}`}
              className="object-cover rounded-xl "
              src={`${img?.src}`}
            />
          </CardBody>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">{img?.title}</h4>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
