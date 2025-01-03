import CommingSoon from "../components/commingSoon";
import DefaultLayout from "../layouts/default";
import Paslaugos from "../components/paslaugos/paslaugos";

export default function paslaugos() {
  return (
    <DefaultLayout>
          <div className="bg-[url('/bg/1-noBG_w.png')] bg-centerbg-repeat-y">
      <Paslaugos />
      </div>
    </DefaultLayout>
  );
}
