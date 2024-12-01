import DefaultLayout from "../layouts/default";
import Banner from "../components/banner";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="justify-between h-screen text-center ">
       <Banner/>
       

       
      </div>
    </DefaultLayout>
  );
}
