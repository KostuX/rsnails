import { Button } from "@nextui-org/react";
import { TfiEmail } from "react-icons/tfi";
import { LuPhoneCall } from "react-icons/lu";
import { TbBrandGoogleMaps } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { useRouter } from 'next/router'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

import ComponentLayout from "../../layouts/components";
import { Facebook } from "../icons";

export default function Contact(cfg) {

  const router = useRouter()
  const config = cfg.config;
  const subTitle = useRef();
  const content = useRef();
  const img = useRef();

  function openLink(link) {
    const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(
      content.current,
      { opacity: 0, x: 150 },
      {
        delay: 0.7,
        opacity: 1,
        duration: 1,
        ease: "power1",
        x: 0,

        scrollTrigger: {
          trigger: content.current,
          toggleActions: "restart pause pause reverse",
        },
      }
    );

    gsap.fromTo(
      subTitle.current,
      { opacity: 0, x: 100 },
      {
        delay: 1,
        opacity: 1,
        duration: 1,
        ease: "power1",
        x: 0,

        scrollTrigger: {
          trigger: subTitle.current,
          toggleActions: "restart pause pause reverse",
        },
      }
    );

    gsap.fromTo(
      img.current,
      { opacity: 0, scale: 0.5 },
      {
        delay: 0.5,
        opacity: 1,
        duration: 1,
        ease: "power1",
        scale: 1,

        scrollTrigger: {
          trigger: img.current,
          toggleActions: "restart pause pause reverse",
        },
      }
    );
  });

  let props = {
    config: config,
    leftSide: true,
    elements: {
      title: "Susisiekti",
      subTitle: (
        <div className={`${config.fonts.subTitle.font} `} ref={subTitle}>
          Kontaktai
        </div>
      ),
      content: (
        <div className="mt-12 " ref={content}>
          <div className="mt-4 ">
            <Button
              className="bg-opacity-10"
              radius="full"
              size="lg"
              onPress={() => router.push(`tel:${config.siteConfig.contact.phone}`)}
            >
              <LuPhoneCall size={100} />
              <div className="">{config.siteConfig.contact.phone}</div>
            </Button>

          </div>

          <div className="mt-4">
            <Button
              className="bg-opacity-10"
              radius="full"
              size="lg"
              onPress={() => router.push(`mailto:${config.siteConfig.contact.email}`)}
            >
              <TfiEmail size={100} />
              <div className="">{config.siteConfig.contact.email}</div>
            </Button>
          </div>

          <div className="mt-4">
            <Button
              className="bg-opacity-10"
              radius="full"
              size="lg"
              onPress={()=>{openLink(config.siteConfig.contact.map)}}
            >
              <TbBrandGoogleMaps size={100} />
              <div className="">{config.siteConfig.contact.address}</div>
            </Button>
          </div>
        </div>
      ),
      img: <div className="text-center " ref={img}>
        <div className={`${config.fonts.subTitle.font} `} >
          Socialiniai Tinklai
        </div>
        <div className="mt-12" >
          <div className="mt-4">
            <Button
              className="bg-opacity-10"
              radius="full"
              size="lg"
              onPress={()=>{openLink(config.siteConfig.contact.soc.facebook)}}
            >
              <FaFacebook size={100} />
              <div className="">Facebook</div>
            </Button>
          </div>

          <div className="mt-4">
          <Button
              className="bg-opacity-10"
              radius="full"
              size="lg"
              onPress={()=>{openLink(config.siteConfig.contact.soc.instagram)}}
            >
              <IoLogoInstagram size={100} />
              <div className="">Instagram</div>
            </Button>
          </div>


        </div>
      </div>,
    },
  };

  return (
 
    <div className="md:bg-[url('/bg/bg-btn_b.png')] bg-center bg-repeat-y">
      <ComponentLayout props={props} />
    </div>
    
  );
}
