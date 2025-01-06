import Banner from "./intro_Banner";
import splitText from "../../utils/textSplit";
import React, { useRef } from "react";
import { Button } from "@nextui-org/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TfiEmail } from "react-icons/tfi";
import { LuPhoneCall } from "react-icons/lu";
import { TbBrandGoogleMaps } from "react-icons/tb";
import { useRouter } from 'next/router'

export default function Intro(cfg) {
  let config = cfg.config;

  const imgTop = useRef();
  const black_div = useRef();
  const imgCenter = useRef();
  const imgBottom = useRef();
  const btnLocation = useRef();
  const btnEmail = useRef();
  const btnPhone = useRef()
    let btn_decor = "mx-4  shadow-lg max-w-[24vh] hover:bg-red-100 hover:bg-opacity-70 bg-opacity-50 bg-red-400"
  
    function openMap() {
      const newWindow = window.open(config.siteConfig.contact.map, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }
  
    useGSAP(() => {
   
      gsap.fromTo(imgTop.current,{opacity:0, y:100},{opacity:1, duration:1, y:0 , ease:"power2.out"})
      gsap.fromTo(imgCenter.current,{opacity:0, },{opacity:1, duration:1, ease:"power2.out" , delay:1})
      gsap.fromTo(imgBottom.current,{opacity:0, y:-100},{opacity:1, duration:1, y:0, ease:"power2.out"})

      gsap.timeline()
      .fromTo(btnLocation.current,{opacity:0},{opacity:1, delay:0.5,  duration:0.3})
      .fromTo(btnEmail.current,{opacity:0},{opacity:1, duration:0.3})
      .fromTo(btnPhone.current,{opacity:0},{opacity:1,  duration:0.3})

  });
  return (

      <div className=" static h-screen bg-[url('/bg/bg.jpg')] bg-cover bg-center " ref={black_div}>
    <div className="  sm:mt-0 max-h-screen  justify-center flex ">
 
     <img className="mt-24 h-auto max-w-[75vh] absolute" src= "/logo/logoNoBack_w_top.png" ref={imgTop}/>
      <img className="mt-24 h-auto max-w-[75vh]  absolute"  src= "/logo/logoNoBack_w_center.png" ref={imgCenter}/>
      <img className="mt-24 h-auto max-w-[75vh]  absolute"  src= "/logo/logoNoBack_w_bottom.png" ref={imgBottom}/>

      </div>
         


      <div className="flex justify-center">
        <div className="mt-[75vh]  bottom-0 grid grid-cols-3 ">
         
          <Button
            className={`${btn_decor} `}
            radius="full"
            size="sm"            
            onPress={openMap}
            ref={btnLocation}
          >
            <TbBrandGoogleMaps size={100} />
            <div className="hidden sm:flex">Rasti</div>
          </Button>
          
          <Button
            className={`${btn_decor}`}
            radius="full"
            size="sm"
            onPress={() => router.push(`mailto:${config.siteConfig.contact.email}`)}
            ref={btnEmail}
          >
            <TfiEmail size={100} />
            <div className="hidden sm:flex">e-Pastas</div>
          </Button>

          <Button
            className={`${btn_decor}`}
            radius="full"
            size="sm"
            onPress={() => router.push(`tel:${config.siteConfig.contact.phone}`)}
            ref={btnPhone}
          >
            <LuPhoneCall size={100} />
            <div className="hidden sm:flex">Paskambint</div>
          </Button>
         

        </div>
        
      </div>


        </div>
  
   
   
 
   
 
  );
}
