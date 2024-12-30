export default function Intro2(cfg) {
  const config = cfg.config;
  return (
    <div
      className="sm:bg-[url('/bg/bg-btn.jpg')] bg-white bg-center bg-no-repeat flex justify-center"
      style={{ minHeight: "75vh" }}
    >
      <div
        className={`text-center mx-6 sm:mx-24 mt-48 max-w-1/2 text-black ${config.fonts.text.size} ${config.fonts.text.font} `}
      >
        "Moters grožis yra unikalus ir daugiabriaunis. Jis atsiskleidžia ne tik
        fiziniuose bruožuose, bet ir jos viduje: išmintyje, šilumoje, rūpesčio
        kupinuose žodžiuose. Grožis slypi jos šypsenoje, žvilgsnyje ir gestuose.
        Ji spinduliuoja pasitikėjimu, stiprybe ir jautrumu. Moters grožis
        niekada nėra vien tik išorinis; jis kyla iš jos širdies, iš meilės,
        kurią ji dovanoja pasauliui. Kiekviena moteris yra graži savo būdu, nes
        jos vidinis pasaulis yra nepaprastai turtingas."
      </div>
    </div>
  );
}
