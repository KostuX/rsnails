import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function animateTitle(txt) {
  const progress = useRef();
  let res = txt;
  return (
    <div className="bg-red-100 ">
      <div>{res}</div>
      <div
        className="bg-gradient-to-r from-blue-200 via-indigo-300 to-red-600 h-1 block rounded-full dark:bg-gray-300  "
        ref={progress}
      ></div>
    </div>
  );
}
