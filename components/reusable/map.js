import React from "react";
import { env } from "process";
import { GoogleMap, useJsApiLoader,LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: 54.8985,
  lng: 23.9036,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBL8eEeLOenEzeDk_4jMUx-C45KGtNrDfM",
  });

  const [map, setMap] = React.useState(null);
 

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {   
    setMap(null);
  }, []);

  return isLoaded ? (
   
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <div className="bg-red-600">text</div>
    </GoogleMap>
  
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
