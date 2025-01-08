import React, { useState, useEffect } from "react";
import { cfg_site } from "../config/cfg_site";
import { TfiEmail } from "react-icons/tfi";
import { LuPhoneCall } from "react-icons/lu";
import { TbBrandGoogleMaps } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { Facebook } from "./icons";
import Image from "next/image";
import { useTheme } from "next-themes";
export const Foot = () => {
  const { theme, setTheme } = useTheme();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return (
    <footer className="border-t  bg-background w-full   p-4 text-sm text-gray-300  mt-10  ">
      <span className=" text-center grid grid-cols-3 gap-4  m-3 text-foreground/80">
        <span>
          <div className="flex justify-left">
           <LuPhoneCall size={20} /> 
           <div className="ml-4"> {cfg_site.contact.phone}</div>
          </div>
          <div className="flex justify-left">
            <TfiEmail size={20} />
            <div className="ml-4"> {cfg_site.contact.email}</div>
          </div>
          <div className="flex justify-left">
          <TbBrandGoogleMaps size={20} />
          <div className="ml-4"> {cfg_site.contact.address}</div>
          </div>
        </span>


        <span>
          <ul className="flex justify-center ">
            <li>
            
              © {cfg_site.year}
          <a href="#" className="hover:underline">
            {" "}
            {cfg_site.title}
          </a>
            </li>
          </ul>
        </span>
        <div className="justify-end flex">
        <span  >
        <div className="flex"   >
                <Facebook size={20}/>
                <div className="ml-4">       Nails With Passion</div>
        
              </div>
              <div className="flex">
                  <IoLogoInstagram size={20} />
                                    <div className="ml-4">@Ritusikas3</div>
              </div>
        </span>
        </div>
      </span>
    </footer>
  );
};