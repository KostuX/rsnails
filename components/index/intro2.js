export default function Intro2(cfg) {
  const config = cfg.config;
  return (
    <div
      className="bg-[url('/bg/2_5.png')] bg-cover bg-no-repeat flex justify-center content-center grid"
      style={{ minHeight: "75vh" }}
    >
      <div
        className={`text-center mx-6 sm:mx-24 mt-48 max-w-[98vh]  ${config.fonts.text.size} ${config.fonts.text.font} `}
      >
        "Moters grožis atsiskleidžia jos šypsenoje, spindinčiose akyse, širdies gerume, elegancijoje, natūralume, pasitikėjime savimi, charizmoje ir išskirtinume. Dar labiau pabrėžkite šį grožį įspūdingu nagų dizainu!"
      </div>
    </div>
  );
}
