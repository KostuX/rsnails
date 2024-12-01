import DefaultLayout from "../layouts/default";
import Banner from "../components/banner";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="justify-between h-full text-center ">
       <Banner/>
       <div className="h-screen block"></div>

       
      </div>
    </DefaultLayout>
  );
}
