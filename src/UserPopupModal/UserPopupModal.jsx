import React from "react";
import "./UserPopupModal.css";


const UserPopupModal = ({
  data: { userImage, locationIcon, hourGlass, flag },
}) => {
  return (
    <div className="user-info-main-container">
      <div className="user-info">
        <div className="user-avatar">
          <img src={userImage} alt="user" />
        </div>
        <p className="user-name">Name</p>
      </div>
      <div className="user-locations-main">
        <div className="user-location-info">
          <img src={locationIcon} alt="stakeboard" />
          <p>Location</p>
        </div>
        <div className="user-location-info">
          <img src={hourGlass} alt="stakeboard" />
          <p>Location</p>
        </div>
        <div className="user-location-info">
          <img src={flag} alt="stakeboard" />
          <p>Location</p>
        </div>
      </div>
    </div>
  );
};

export default UserPopupModal;
