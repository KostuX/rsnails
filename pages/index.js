import DefaultLayout from "../layouts/default";
import Banner from "../components/banner";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="text-center block">
        <Banner />
      </div>
      <div className="h-[80vh]">
        <div className="text-center text-6xl my-24 hidden">Contact</div>
      </div>
    </DefaultLayout>
  );
}
