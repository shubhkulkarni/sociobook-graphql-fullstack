import React from "react";
import avt from "../../assets/img_avatar.png";
import "./Avatar.css";
function Avatar({ src = avt, size = "default", title }) {
  if (src) {
    return <img src={src} alt="avatar" className={size} />;
  }
}

export default Avatar;
