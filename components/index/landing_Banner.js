import LogoGSAP from "../reusable/logoGSAP";
import ButtonsContactScreen from "../reusable/buttonsContactScreen";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
export default function Landing_Banner() {
  return (
    <ParallaxProvider>
      <div className=" static h-screen bg-[url('/bg/bg.jpg')] bg-cover bg-center ">
        <Parallax speed={-10}>
          <LogoGSAP />
        </Parallax>
        <Parallax speed={-10}>
          <ButtonsContactScreen />
        </Parallax >
      </div>
    </ParallaxProvider>
  );
}
