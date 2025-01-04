import Contact from "../components/contacts/contact";
import DefaultLayout from "../layouts/default";
import config_all from "../config/config";
export default function susisiekti() {
  const config = config_all();
  return (
    <div className="sm:bg-blue-100">
    <DefaultLayout>
   
    
      <Contact config={config} />
      
     
    </DefaultLayout>

    </div>
  );
}
