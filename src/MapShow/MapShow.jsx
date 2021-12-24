import React, { useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import parkData from "../data/stakeboards-parks.json";
import markerIcon from "./../images/stakeboard.svg";
import "./MapShow.css";
import UserPopupModal from "../UserPopupModal/UserPopupModal";
import locationIcon from "./../images/location.svg";
import hourGlass from "./../images/hourglass.svg";
import flag from "./../images/flag.svg";

const MapShow = () => {
  const [viewport, setViewport] = React.useState({
    latitude: 45.4211,
    longitude: -75.6903,
    zoom: 10,
    width: "100vw",
    height: "100vh",
  });

  //   which icon has been selected
  const [selectedPark, setSelectedPark] = React.useState(null);

  const handleMarkerClicked = (park) => {
    setSelectedPark(park);
  };

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);
  }, []);

  const userImage =
    "	https://jobsmideat-dev.s3.amazonaws.com/be0cbe8a-e2d2-4aa6-8a1c-89cc14e2d7bd-anime.jpeg";
  const data = {
    userImage,
    locationIcon,
    hourGlass,
    flag,
  };

  return (
    <div>
      <ReactMapGL
        {...viewport}
        onViewportChange={(viewport) => setViewport(viewport)}
        // mapStyle={"mapbox://styles/muhammadowais/ckwg6vdvg5ndc14mprfnb3g1a"}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_KEY}>
        {" "}
        {/* MAP SOMETHING AS MARKERS */}
        {parkData.features.map((park) => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}>
            <button
              htmltype="button"
              className="marker-btn"
              onClick={() => handleMarkerClicked(park)}>
              <img src={markerIcon} alt="stakeboard" />
            </button>
          </Marker>
        ))}
        {/* IS ANY PARK SELECTED */}
        {selectedPark && (
          <Popup
            onClose={() => setSelectedPark(null)}
            longitude={selectedPark.geometry.coordinates[0]}
            latitude={selectedPark.geometry.coordinates[1]}>
            <UserPopupModal data={data} />
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};

export default MapShow;
