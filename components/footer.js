import React, { useState, useEffect } from "react";
import { cfg_site } from "../config/cfg_site";
import { Facebook, Instagram, Email, Phone, Location } from "./reusable/icons";

export const Foot = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return (
    <footer className="border-t  bg-background w-full   p-4 text-sm text-gray-300  mt-10  ">
      <span className=" text-center grid grid-cols-2 sm:grid-cols-3 gap-4  m-3 text-foreground/80">
        <span>
          <div className="flex justify-left">
            <Phone size={20} className="hidden sm:flex" />
            <div className="sm:ml-4 ml-2"> {cfg_site.contact.phone}</div>
          </div>
          <div className="flex justify-left">
            <Email size={20} className="hidden sm:flex" />
            <div className="sm:ml-4 ml-2"> {cfg_site.contact.email}</div>
          </div>
          <div className="flex justify-left">
            <Location size={20} className="hidden sm:flex" />
            <div className="sm:ml-4 ml-2"> {cfg_site.contact.address}</div>
          </div>
        </span>

        <span className="hidden sm:flex flex justify-center items-center">
          <ul className="">
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
          <span>
            <div className="flex">
              <Facebook size={20} />
              <div className="sm:ml-4"> Nails With Passion</div>
            </div>
            <div className="flex">
              <Instagram size={20} />
              <div className="sm:ml-4">@Ritusikas3</div>
            </div>
          </span>
        </div>
      </span>
    </footer>
  );
};
