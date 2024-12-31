import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Gallery_Card(prop) {
  const card_ref = useRef([])
  const img_ref = useRef()
  const title_ref = useRef()
  const description_ref = useRef()
  let img = prop.img

  useGSAP(() => {
    gsap.fromTo(card_ref.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: Math.random() * 3,  scrollTrigger: { trigger: card_ref.current} })
    gsap.fromTo(img_ref.current, { scale: Math.random() }, { scale: 1, duration: Math.random() })
    gsap.fromTo(title_ref.current, { x: -100 }, { x: 0, duration: Math.random() })
    gsap.fromTo(description_ref.current, { y: -100 }, { y: 0, duration: Math.random() })
  })
  return (
    <div ref={card_ref}>
      <Card className="py-4">

        <CardBody className="overflow-visible py-2  justify-center grid">
          <Image
            alt={`${img.alt}`}
            className="object-cover rounded-xl "
            src={`${img.src}`}
            width={270}
            ref={img_ref}
          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large" ref={title_ref}>{img.title}</h4>
          <p className="text-tiny uppercase font-bold" ref={description_ref}>{img.description}</p>
          <small className="text-default-500">From: {img.price}</small>


        </CardHeader>
      </Card>
    </div>
  )
}
