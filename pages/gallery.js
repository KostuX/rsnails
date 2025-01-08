import { Navbar } from "../components/navbar";
import { Head } from "../components/head";

import { ButtonGroup, Button } from "@nextui-org/react";
import { useState } from "react";

import Circle from "../components/gallery/circleView";
import Cards from "../components/gallery/cardsView";

import { cfg_images } from "../config/cfg_images";

export default function gallery(cfg) {
  let images = cfg_images.gallery;

  // types: ["3D Circle", "2D Cards"]
  const [viewType, setViewType] = useState(<Circle images={images} />);

  return (
    <div className="">
      <div className=" bg-[url('/bg/2_6.png')] bg-center bg-repeat-x bg-repeat-y">
        <Head />
        <Navbar />
        <div className="justify-center flex z-0 ">
          <div className=" sm:mt-6 fixed">
            <div className="text-center text-sm font-bold">View</div>
            <ButtonGroup>
              <Button
                isDisabled={viewType === "3D Circle"}
                onPress={() => {
                  setViewType(<Circle images={images} />);
                }}
              >
                Wheel
              </Button>
              <Button
                isDisabled={viewType === <Cards images={images} />}
                onPress={() => {
                  setViewType(<Cards images={images} />);
                }}
              >
                Cards
              </Button>
            </ButtonGroup>
          </div>
        </div>
        {viewType}
      </div>
    </div>
  );
}
