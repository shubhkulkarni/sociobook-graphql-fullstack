import React from "react";

import "./Profile.css";

import { Desktop } from "./../../utils/responsiveComponents";
import Stories from "./../Home/components/stories/Stories";
import MainNav from "./../../layout/navigation/MainNav";

function Profile() {
  return (
    <div className="homeLayout">
      <Desktop>
        <div className="sideContent">SideContent</div>
      </Desktop>
      <div className="stories">
        <Stories />
      </div>
      <Desktop>
        <MainNav />
      </Desktop>
    </div>
  );
}

export default Profile;
