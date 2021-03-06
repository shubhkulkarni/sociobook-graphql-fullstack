import React from "react";
import MainNav from "../../layout/navigation/MainNav";
import "./Home.css";
import Stories from "./components/stories/Stories";
function Home() {
  return (
    <div className="homeLayout">
      <div className="sideContent">SideContent</div>
      <div className="stories">
        <Stories />
      </div>
      <MainNav />
    </div>
  );
}

export default Home;
