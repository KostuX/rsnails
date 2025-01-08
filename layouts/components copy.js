import animateTitle from "../components/reusable/animateTitle";
export default function ComponentLayout(props) {
  let el = props.props.elements;
  let left = props.props.leftSide;
  let config = props.props.config;

  let imageComp = (
    <div className="grid justify-center content-center mt-12 ">{el.img}</div>
  );

  let textComp = (
    <div className=" items-center content-center justify-center max-w-2xl">
      <div className="text-center mt-12 ">
        <div className={`w-full mb-4 ${config.fonts.subTitle.size}`}>
          {el.subTitle}
        </div>
        <div
          className={`text-center mx-12 ${config.fonts.text.size} ${config.fonts.text.font} `}
        >
          {el.content}
        </div>
      </div>
    </div>
  );
  return (
    <div className="" style={{ minHeight: "75vh" }}>
      <div
        className={`uppercase text-left ${
          left ? "text-left" : "text-right"
        } mx-12`}
      >
        {animateTitle(el.title, left)}
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 overflow-hidden ">
        {left ? textComp : imageComp}
        {left ? imageComp : textComp}
      </div>
    </div>
  );
}
