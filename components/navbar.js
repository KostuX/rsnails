import React from "react";
import { ThemeSwitch } from "../components/theme-switch";
import { cfg_site as cfg } from "../config/cfg_site";
import { Logo } from "../components/icons";
import { useRouter } from "next/router";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import { Button, Image } from "@nextui-org/react";
import { TfiEmail } from "react-icons/tfi";
import { LuPhoneCall } from "react-icons/lu";
import { TbBrandGoogleMaps } from "react-icons/tb";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

import NextLink from "next/link";

import config_all from "../config/config";

export const Navbar = () => {
  const router = useRouter();

  const config = config_all();

  console.log(config.fonts.subTitle);

  return (
    <>
      {/** Logo | top left */}
      <NextUINavbar
        maxWidth="xl "
        className="border-b border-black dark:border-white "
      >
        <NavbarContent className="basis-1/5 sm:basis-full " justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit">
            <NextLink
              className="flex justify-start items-center hidden sm:flex "
              href="/"
            >
              {" "}
              <img
                src="/logo/logoNoBack_w.png"
                className="h-[50px] hidden dark:flex "
              />
              <img
                src="/logo/logoNoBack_b.png"
                className="h-[50px] dark:hidden"
              />
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        {/** Links | center | large */}
        <NavbarContent className="hidden sm:flex" justify="center">
          {cfg.navItems.map((e) => (
            <NavbarItem key={e.label}>
              <NextLink
                className="flex justify-start items-center m-1 "
                href={e.href}
                key={e.label}
              >
                {e.label}
              </NextLink>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/** Links | end | large */}
        <NavbarContent
          className="hidden sm:flex basis-1/5 sm:basis-full"
          justify="end"
        >
          <NavbarItem className="hidden sm:flex gap-2">
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>

        {/** Menu | end | large */}
        <NavbarContent className="sm:hidden basis-1 pl-4 " justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle />
          <NavbarMenu justify="end" className="">
            <div className=" ">
              <div className="justify-center">
                {cfg.navMenuItems.map((e, index) => (
                  <NavbarMenuItem key={`${e}-${index}`}>
                    <NextLink
                      className={`w-full hover:underline text-center flex justify-center mt-8 font-bold text-2xl ${config.fonts.subTitle.font}`}
                      href={e.href}
                      size="lg"
                      style={{ zIndex: 100 }}
                    >
                      {e.label}
                    </NextLink>
                  </NavbarMenuItem>
                ))}
              </div>

              <div className="justify-center flex">
                <img
                  src="/logo/logoNoBack_b.png"
                  alt="logo"
                  className="flex dark:hidden mt-12"
                  style={{ width: "50%", height: "auto" }}
                />
                <img
                  src="/logo/logoNoBack_w.png"
                  alt="logo"
                  className="hidden dark:flex mt-12"
                  style={{ width: "50%", height: "auto" }}
                />
              </div>
              <div className="justify-center ">
                <div className="mt-4 flex justify-center">
                  <Button
                    className="bg-opacity-10"
                    radius="full"
                    size="lg"
                    onPress={() =>
                      router.push(`tel:${config.siteConfig.contact.phone}`)
                    }
                  >
                    <LuPhoneCall size={100} />
                    <div className="">{config.siteConfig.contact.phone}</div>
                  </Button>
                </div>

                <div className="mt-4 flex justify-center">
                  <Button
                    className="bg-opacity-10"
                    radius="full"
                    size="lg"
                    onPress={() =>
                      router.push(`mailto:${config.siteConfig.contact.email}`)
                    }
                  >
                    <TfiEmail size={100} />
                    <div className="">{config.siteConfig.contact.email}</div>
                  </Button>
                </div>

                <div className="mt-4 flex justify-center">
                  <Button
                    className="bg-opacity-10"
                    radius="full"
                    size="lg"
                    onPress={() => {
                      openLink(config.siteConfig.contact.map);
                    }}
                  >
                    <TbBrandGoogleMaps size={100} />
                    <div className="">{config.siteConfig.contact.address}</div>
                  </Button>
                </div>
                <div className="mt-4 flex justify-center">
                  <Button
                    className="bg-opacity-10"
                    radius="full"
                    size="lg"
                    onPress={() => {
                      openLink(config.siteConfig.contact.soc.facebook);
                    }}
                  >
                    <FaFacebook size={100} />
                    <div className="">Nails With Passion</div>
                  </Button>
                </div>
                <div className="mt-4 flex justify-center">
                  <Button
                    className="bg-opacity-10"
                    radius="full"
                    size="lg"
                    onPress={() => {
                      openLink(config.siteConfig.contact.soc.instagram);
                    }}
                  >
                    <IoLogoInstagram size={100} />
                    <div className="">@Ritusikas3</div>
                  </Button>
                </div>
              </div>
              <div className=" justify-center flex"> </div>
            </div>
          </NavbarMenu>
        </NavbarContent>
      </NextUINavbar>
    </>
  );
};
