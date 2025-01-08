import { quote } from "../../config/variables";
export default function Quote(cfg) {
  const config = cfg.config;
  return (
    <div
      className="bg-[url('/bg/2_5.png')] dark:bg-none bg-cover bg-no-repeat flex justify-center content-center grid"
      style={{ minHeight: "75vh" }}
    >
      <div
        className={`text-center mx-6 sm:mx-24 mt-48 max-w-[98vh]  ${config.fonts.text.size} ${config.fonts.text.font} `}
      >
        {quote}
      </div>
    </div>
  );
}
