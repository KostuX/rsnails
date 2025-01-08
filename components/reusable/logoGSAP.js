import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function LogoGSAP() {
  const imgTop = useRef();
  const imgCenter = useRef();
  const imgBottom = useRef();
  useGSAP(() => {
    gsap.fromTo(
      imgTop.current,
      { opacity: 0, y: 100 },
      { opacity: 1, duration: 1, y: 0, ease: "power2.out" }
    );
    gsap.fromTo(
      imgCenter.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
    );
    gsap.fromTo(
      imgBottom.current,
      { opacity: 0, y: -100 },
      { opacity: 1, duration: 1, y: 0, ease: "power2.out" }
    );
  });
  return (
    <>
      <div className="sm:mt-0 max-h-screen justify-center flex">
        <img
          className="mt-24 h-auto max-w-[75vh] absolute"
          src="/logo/logoNoBack_w_top.png"
          ref={imgTop}
        />
        <img
          className="mt-24 h-auto max-w-[75vh]  absolute"
          src="/logo/logoNoBack_w_center.png"
          ref={imgCenter}
        />
        <img
          className="mt-24 h-auto max-w-[75vh]  absolute"
          src="/logo/logoNoBack_w_bottom.png"
          ref={imgBottom}
        />
      </div>
    </>
  );
}
