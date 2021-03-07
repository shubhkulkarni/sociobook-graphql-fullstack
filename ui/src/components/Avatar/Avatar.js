import React from "react";
import avt from "../../assets/img_avatar.png";
import "./Avatar.css";
function Avatar({ src = avt, size = "default", loading }) {
  if (src) {
    if (loading) {
      return <div className="loader"></div>;
    }
    return (
      <img
        src={src}
        alt="avatar"
        className={size}
        onError={(i) => (i.target.src = avt)}
      />
    );
  }
}

export default Avatar;
