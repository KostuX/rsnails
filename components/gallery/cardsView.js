import CardView_card from "./cardView_card";
import DefaultLayout from "../../layouts/default";

export default function Cards(img) {
  let images = img.images;

  return (
    <DefaultLayout>
      <div className="flex mt-24">
        <div className="grid sm:grid-cols-3 sm:mx-12 mt-24">
          {images.map((img, i) => (
            <CardView_card img={img} key={i} />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}
