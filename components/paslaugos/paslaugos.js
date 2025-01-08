import Gallery_Card from "./card";
import animateTitle from "../reusable/animateTitle";
import { useRef } from "react";
export default function Paslaugos(img) {
  let images = img.images;

  const items = useRef([]);

  return (
    <div className="">
      <div className="uppercase text-right mx-12">
        {" "}
        {animateTitle("Paslaugos", false)}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        {images.map((img, i) => (
          <div className="m-4 md:m-16" key={i}>
            <Gallery_Card img={img} />
          </div>
        ))}
      </div>
    </div>
  );
}
