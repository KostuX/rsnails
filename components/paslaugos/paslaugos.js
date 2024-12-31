import Gallery_Card from "./card";
import animateTitle from "../../utils/animateTitle";
import { useRef } from "react";
export default function Paslaugos() {
    let images = [
        { src: "./gallery/1.png", alt: "img", title: "Title", description: "Description", price: 0 },
        { src: "./gallery/2.png", alt: "img", title: "Title", description: "Description", price: 0 },
        { src: "./gallery/3.png", alt: "img", title: "Title", description: "Description", price: 0 },
        { src: "./gallery/4.png", alt: "img", title: "Title", description: "Description", price: 0 },
        { src: "./gallery/5.png", alt: "img", title: "Title", description: "Description", price: 0 },
        { src: "./gallery/1.png", alt: "img", title: "Title", description: "Description", price: 0 },
        { src: "./gallery/2.png", alt: "img", title: "Title", description: "Description", price: 0 },
        { src: "./gallery/3.png", alt: "img", title: "Title", description: "Description", price: 0 },
        { src: "./gallery/4.png", alt: "img", title: "Title", description: "Description", price: 0 },
        { src: "./gallery/5.png", alt: "img", title: "Title", description: "Description", price: 0 },
    ];

    const items = useRef([])

    return (
        <div className="" >
            <div className=" uppercase text-right mx-12">
                {" "}
                {animateTitle("Paslaugos", false)}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3">
                {images.map((img, i) => (
                    <div className="m-16"key={i}>
                    <Gallery_Card img={img} />
                </div>
                ))}
            </div>
        </div>)

}