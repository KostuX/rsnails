import Contact from "../components/contacts/contact";
import DefaultLayout from "../layouts/default";
import config_all from "../config/config";
export default function susisiekti() {
  const config = config_all();
  return (
    <DefaultLayout>
       <div className="bg-[url('/bg/2.png')] bg-centerbg-repeat-y">
      <Contact config={config} />
      </div>
    </DefaultLayout>
  );
}
