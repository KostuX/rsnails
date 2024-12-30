import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div className="text-black font-lg">
    {text}
    <div className="bg-black">.</div>
  </div>
);

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 54.8985,
      lng: 23.9036,
    },
    zoom: 15,
  };

  let googleKey = process.env.GOOGLE_MAP_API_KEY;

  return (
    <div className="mr-24 w-[50vh] h-[50vh]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleKey }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={54.8985} lng={23.9036} text="RS Nails" />
      </GoogleMapReact>
    </div>
  );
}
