import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import { Email, Location, Phone } from "./icons";
import { openMap } from "./utils";

import cfg from "../../config/config";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function ButtonsContactScreen() {
  let config = cfg();
  const router = useRouter();
  const btnLocation = useRef();
  const btnEmail = useRef();
  const btnPhone = useRef();
  let btn_decor =
    "mx-4  shadow-lg max-w-[24vh] hover:bg-red-100 hover:bg-opacity-70 bg-opacity-50 bg-red-400";

  useGSAP(() => {
    gsap
      .timeline()
      .fromTo(
        btnLocation.current,
        { opacity: 0 },
        { opacity: 1, delay: 0.5, duration: 0.3 }
      )
      .fromTo(btnEmail.current, { opacity: 0 }, { opacity: 1, duration: 0.3 })
      .fromTo(btnPhone.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
  });
  let buttons = [
    {
      icon: <Location size={100} />,
      text: "Rasti",
      onPress: openMap,
      ref: btnLocation,
    },

    {
      icon: <Email size={100} />,
      text: "e-Pastas",
      onPress: () => router.push(`mailto:${config.siteConfig.contact.email}`),
      ref: btnEmail,
    },
    {
      icon: <Phone size={100} />,
      text: "Paskambint",
      onPress: () => router.push(`tel:${config.siteConfig.contact.phone}`),
      ref: btnPhone,
    },
  ];

  return (
    <div className="flex justify-center">
      <div className="mt-[75vh]  bottom-0 grid grid-cols-3 ">
        {buttons.map((button, index) => (
          <Button
            key={index}
            className={`${btn_decor} `}
            radius="full"
            size="sm"
            onPress={button.onPress}
            ref={button.ref}
          >
            {button.icon}
            <div className="hidden sm:flex">{button.text}</div>
          </Button>
        ))}
      </div>
    </div>
  );
}
