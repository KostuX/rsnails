import CommingSoon from "../components/commingSoon";
import DefaultLayout from "../layouts/default";
import Gallery_Frame from "../components/gallery/gallery_Frame";
import config_all from "../config/config";
export default function gallery(cfg) {
  const config = config_all();
 

  return (
    <DefaultLayout>
      <Gallery_Frame />
    </DefaultLayout>
  );
}
