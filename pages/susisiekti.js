import Contact from "../components/reusable/contact";
import DefaultLayout from "../layouts/default";
import config_all from "../config/config";
export default function susisiekti() {
  const config = config_all();
  return (
    <div className="">
      <DefaultLayout>
        <Contact config={config} />
      </DefaultLayout>
    </div>
  );
}
