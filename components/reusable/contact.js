import { Button } from "@nextui-org/react";
import { Location, Facebook, Instagram, Phone, Email } from "./icons";

import { useRouter } from "next/router";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import ComponentLayout from "../../layouts/components";

export default function Contact(cfg) {
  const router = useRouter();
  const config = cfg.config;
  const subTitle = useRef();
  const content = useRef();
  const img = useRef();

  function openLink(link) {
    const newWindow = window.open(link, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  }

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
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

  let contactButtons = [
    {
      icon: <Phone size={100} />,
      text: config.siteConfig.contact.phone,
      onPress: () => router.push(`tel:${config.siteConfig.contact.phone}`),
    },
    {
      icon: <Email size={100} />,
      text: config.siteConfig.contact.email,
      onPress: () => router.push(`mailto:${config.siteConfig.contact.email}`),
    },
    {
      icon: <Location size={100} />,
      text: config.siteConfig.contact.address,
      onPress: () => openLink(config.siteConfig.contact.map),
    },
  ];

  let socialButtons = [
    {
      icon: <Facebook size={100} />,
      text: "Nails With Passion",
      onPress: () => openLink(config.siteConfig.contact.soc.facebook),
    },
    {
      icon: <Instagram size={100} />,
      text: "@Ritusikas3",
      onPress: () => openLink(config.siteConfig.contact.soc.instagram),
    },
  ];

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
          {contactButtons.map((button, index) => (
            <div className="mt-4 " key={index}>
              <Button
                key={index}
                className="bg-opacity-10"
                radius="full"
                size="lg"
                onPress={button.onPress}
              >
                {button.icon}
                <div className="">{button.text}</div>
              </Button>
            </div>
          ))}
        </div>
      ),
      img: (
        <div className="text-center " ref={img}>
          <div className={`${config.fonts.subTitle.font} `}>
            Socialiniai Tinklai
          </div>
          <div className="mt-12">
            {socialButtons.map((button, index) => (
              <div className="mt-4" key={index}>
                <Button
                  key={index}
                  className="bg-opacity-10"
                  radius="full"
                  size="lg"
                  onPress={button.onPress}
                >
                  {button.icon}
                  <div className="">{button.text}</div>
                </Button>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  };

  return (
    <div className="md:bg-[url('/bg/bg-btn_b.png')] bg-[url('/bg/2_6.png')]  dark:bg-none bg-center bg-repeat-x bg-repeat-y dark:md:bg-[url('/bg/bg-btn_w.png')] bg-center bg-repeat-y">
      <ComponentLayout props={props} />
    </div>
  );
}
