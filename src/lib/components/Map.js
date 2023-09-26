import React from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";


const MapComponent = ({ selectedLocation, google_Api }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: google_Api,
  });
  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);
  if (loadError) return "Error";
  if (!isLoaded) return "Maps";

  return (
    <div style={{ marginTop: "20px" }}>
      <GoogleMap
        mapContainerStyle={{
          height: "800px",
        }}
        center={selectedLocation}
        zoom={13}
        onLoad={onMapLoad}
      >
        <MarkerF
          position={selectedLocation}
          icon={"http://maps.google.com/mapfiles/ms/icons/red-dot.png"}
        />
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
