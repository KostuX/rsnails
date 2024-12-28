import { Button } from '@nextui-org/react';
import { Text } from "@nextui-org/react";
import { ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from 'react-scroll-parallax';


import { Finger_Paint } from 'next/font/google'
const kranky = Finger_Paint({  weight: '400',
  subsets: ['latin'],}, )

import { useEffect, useRef, useState } from 'react';

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Banner() {
  const load = useRef(null);
  useEffect(() => {
    const el = load.current;
    gsap.fromTo(
      el,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, []);


  const background = {
   // image:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-background.jpg',
   image: './bg/bg.jpg',
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline = {
    translateY: [0, 30],
    scale: [1, 1.05, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="mt-24 text-center grid flex items-center justify-center">
        <div>
          <h1 className={`text-8xl font-bold ${kranky.className} bg-gradient-to-r from-blue-100 via-yellow-200 to-indigo-200 text-transparent bg-clip-text `} >
            RS Nails
          </h1>
          <h5 className={`bg-gradient-to-r from-blue-200 via-red-200 to-indigo-200 inline-block text-transparent bg-clip-text  text-2xl ${kranky.className}`} >Color Your Nails, Express Yourself</h5>
        </div>
        

      </div>

    ),
  };


  const foreground = {
   // image:'https://s3-us-west-2.amazonaws.com/s.cdpn.io/105988/banner-foreground.png',
   //image:'./bg/bg-btn.png',
    translateY: [0, 15],
    scale: [1, 1.1, 'easeOutCubic'],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay = {
    opacity: [0, 0.9],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-blue-900" ></div>
    ),
  };

  const buttons = {
    children: (<div className='flex justify-center'>
    <div className=' absolute  bottom-0 mb-56' ref={load}>
          <Button 
         className="mx-4 bg-gradient-to-br from-yellow-500 to-pink-500 text-white shadow-lg "
         radius="full"
         size='lg'
         
         >
            Susisiekti
          </Button>
          <Button
            className="mx-4 bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            radius="full"
            size='lg'
          >
            Paslaugos
          </Button>
        </div>
        </div>
       )
  }

  return (
    <ParallaxProvider>
      <ParallaxBanner
        layers={[background, headline, foreground, gradientOverlay,buttons]}
        className="aspect-[2/1] bg-gray-900 h-screen"
      />
    </ParallaxProvider>
  );
}