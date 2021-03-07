import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
import { NAVMENU } from "./navMenu";
import Avatar from "./../../components/Avatar/Avatar";
import { useSelector } from "react-redux";
import capitalizeName from "./../../utils/CapitalizeName";
import avt from "../../assets/img_avatar.png";
function MainNav() {
  const userProfile = useSelector((state) => state.app.userProfile);
  const signOut = async () => {
    await localStorage.removeItem("authToken");
    window.location.reload();
  };
  return (
    <div className="nav">
      <div className="navbar">
        {NAVMENU.map((item) => {
          return (
            // <div className="navItem" key={item.name}>
            <NavLink
              to={item.path}
              className="navLink"
              activeClassName="isActiveNav"
            >
              <span className="navIcon">
                <i className={item.icon} aria-hidden="true" />
              </span>{" "}
              {item.name}
            </NavLink>
            // </div>
          );
        })}
      </div>
      <div className="navFooter">
        <Avatar src={userProfile.profileImage || avt} size="xl" />

        <div className="ftrName">
          {userProfile.name && capitalizeName(userProfile.name)}
        </div>
        <div className="ftrEmail">{userProfile.email}</div>
        <div className="signOut" onClick={signOut}>
          Sign out
        </div>
      </div>
    </div>
  );
}

export default MainNav;
