import { Divider } from "@nextui-org/react";
import { useEffect, useRef, useState } from 'react';

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Person() {
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
    return (<div className="min-h-screen" ref={load}>
        <Divider className="mt-24" />
        <div className="flex justify-center w-screen ">

            <div className="text-center  font-thin text-2xl max-w-2xl my-24 mx-12">Mūsų kvalifikuoti manikiūro meistrai yra apmokyti, todėl garantuojame nepriekaištingą procedūrą nuo pradžios iki pabaigos. Be to, gausite individualiai pritaikytas stiliaus ir priežiūros rekomendacijas, sukurtas specialiai jums.</div>
        </div>
        <Divider className="mb-24" />
        <div className="grid  sm:grid-cols-2 grid-cols-1 ">
            <div className="text-center  mx-4 grid justify-center items-center">
                <img
                    src="/profile.jpg"
                    alt="Profile Image"
                    height={200}
                    width={200}
                />
            </div>
            <div className="text-center mt-12 items-center">
                <div className="w-full font-bold text-2xl mb-4">Rs Nails</div>
                <div className="text-center font-thin mx-12">Esu profesionali manikiūrininkė, teikianti aukščiausios kokybės paslaugas. Kiekvienam klientui suteikiu individualų dėmesį, atsižvelgdama į jų pageidavimus ir stilių. Naudodama tik geriausias priemones, užtikrinu ilgalaikį ir nepriekaištingą rezultatą. Mano tikslas – suteikti jums elegancijos ir pasitikėjimo savimi.</div>
            </div>
        </div>
    </div>)
}