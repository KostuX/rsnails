import LogoGSAP from "../reusable/logoGSAP";
import ButtonsContactScreen from "../reusable/buttonsContactScreen";

export default function Landing_Banner() {
  return (
    <div className=" static h-screen bg-[url('/bg/bg.jpg')] bg-cover bg-center ">
      <LogoGSAP />
      <ButtonsContactScreen />
    </div>
  );
}
