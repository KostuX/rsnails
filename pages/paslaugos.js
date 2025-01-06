import CommingSoon from "../components/commingSoon";
import DefaultLayout from "../layouts/default";
import Paslaugos from "../components/paslaugos/paslaugos";
import { cfg_images } from "../config/cfg_images";

export default function paslaugos() {
  const images = cfg_images.services
  return (
    <DefaultLayout>
          <div className=" bg-[url('/bg/2_6.png')] bg-center bg-repeat-x bg-repeat-y">
      <Paslaugos images= {images} />
      </div>
    </DefaultLayout>
  );
}
