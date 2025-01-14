import animateTitle from "../components/reusable/animateTitle";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

export default function ComponentLayout(props) {
  let el = props.props.elements;
  let left = props.props.leftSide;
  let config = props.props.config;

  let imageComp =  <Parallax speed={-1}><div className="grid justify-center mt-12 ">{el.img}</div></Parallax>;

  let textComp = (
    <div className=" items-center content-center justify-center max-w-2xl">
      <div className="text-center mt-12 ">
      <Parallax speed={1}>
        <div
          className={`w-full mb-4 ${config.fonts.subTitle.size} ${config.fonts.subTitle.font} `}
        >
          {el.subTitle}
        </div>
        </Parallax>
        <Parallax speed={-1}>
        <div
          className={`text-center mx-12  ${config.fonts.text.size} ${config.fonts.text.font} `}
        >
          {el.content}
        </div>
        </Parallax>
      </div>
    </div>
  );
  return (
    <ParallaxProvider>
    <div style={{ minHeight: "75vh" }}>
        <Parallax speed={1}>
      <div className={`uppercase  ${left ? "text-left" : "text-right"} mx-12`}>
        {animateTitle(el.title, left)}
      </div>
      </Parallax>
      <Parallax speed={-1}>
      <div className="grid sm:grid-cols-2 grid-cols-1 overflow-hidden ">
        {left ? textComp : imageComp}
        {left ? imageComp : textComp}
      </div>
      </Parallax>
    </div>
    </ParallaxProvider>
  );
}
