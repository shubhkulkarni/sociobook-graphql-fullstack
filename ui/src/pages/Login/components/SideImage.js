import React from "react";
import sideImage from "../../../assets/sideimage.svg";
import "../Login.css";
function SideImage() {
  return (
    <div className="siCtr">
      <img src={sideImage} alt="sideImage" className="image" />
      <div className="descImg">
        SocioBook is a social media platform . Connect with people, like their
        content , and share !
        <br /> It is based on React , Node , MongoDB and GraphQL Technologies.
      </div>
    </div>
  );
}

export default SideImage;
