import React from "react";
import MainNav from "../../layout/navigation/MainNav";
import "./Home.css";
import Stories from "./components/stories/Stories";
import { Desktop } from "./../../utils/responsiveComponents";
function Home() {
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

export default Home;
