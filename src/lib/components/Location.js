import React, { useState } from "react";
import MapComponent from "./Map";
import SearchLocationInput from "./GooglePlacesApi";

const Location = ({google_Api}) => {
    const [selectedLocation, setSelectedLocation] = useState({
        lat: 6.904015816037855,
        lng: 79.85199251084842,
    });

    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <SearchLocationInput setSelectedLocation={setSelectedLocation} google_Api={google_Api} />
            <MapComponent selectedLocation={selectedLocation} google_Api={google_Api}/>
        </div>
    )
}

export default Location