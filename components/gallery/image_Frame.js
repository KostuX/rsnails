import config_all from "../../config/config"
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
export default function ImageFrame(props) {
  const config = config_all();
  const img = props.img

  return (
    <div>

      <Card className="sm:py-4">

        <CardBody className="overflow-visible py-2 justify-center grid">
          <Image
            alt={`${img?.alt}`}
            className="object-cover rounded-xl "
            src={`${img?.src}`}


          />
        </CardBody>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large" >{img?.title}</h4>


        </CardHeader>


      </Card>
    </div>)
}