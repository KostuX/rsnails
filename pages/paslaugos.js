import CommingSoon from "../components/commingSoon";
import DefaultLayout from "../layouts/default";
import Paslaugos from "../components/paslaugos/paslaugos";
import { cfg_images } from "../config/cfg_images";

export default function paslaugos() {
  const images = cfg_images.services
  return (
    <DefaultLayout>
          <div className="bg-[url('/bg/1-noBG_w.png')] bg-centerbg-repeat-y">
      <Paslaugos images= {images} />
      </div>
    </DefaultLayout>
  );
}
