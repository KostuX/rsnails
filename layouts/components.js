import animateTitle from "../utils/animateTitle";
export default function ComponentLayout(props) {
  return (
    <div className="h-screen  ">
      <div className="uppercase text-left ">
        {animateTitle(props.children[0])}
      </div>
      <div className="grid  sm:grid-cols-2 grid-cols-1  ">
        <div className="text-center  mx-4 grid justify-center content-center mt-12  ">
          <img
            className="personal image"
            src="/profile.jpg"
            alt="Profile Image"
            style={{ height: "30vh", width: "30vh" }}
          />
        </div>
        <div className=" items-center content-center justify-center  max-w-2xl">
          <div className="text-center  ">
            <div className="w-full font-bold text-2xl mb-4">Rs Nails</div>
            <div className="text-center font-thin mx-12">
              Esu profesionali manikiūrininkė, teikianti aukščiausios kokybės
              paslaugas. Kiekvienam klientui suteikiu individualų dėmesį,
              atsižvelgdama į jų pageidavimus ir stilių. Naudodama tik
              geriausias priemones, užtikrinu ilgalaikį ir nepriekaištingą
              rezultatą. Mano tikslas – suteikti jums elegancijos ir
              pasitikėjimo savimi.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
