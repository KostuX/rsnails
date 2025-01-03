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
        "Moters grožis atsiskleidžia jos šypsenoje, spindinčiose akyse, širdies gerume, elegancijoje, natūralume, pasitikėjime savimi, charizmoje ir išskirtinume. Dar labiau pabrėžkite šį grožį įspūdingu nagų dizainu!"
      </div>
    </div>
  );
}
