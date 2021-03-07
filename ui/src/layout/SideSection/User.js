import React from "react";
import Avatar from "../../components/Avatar/Avatar";
import "./Side.css";
function User({ name, avatar, email }) {
  return (
    <div className="userItem">
      <div className="userInf">
        <Avatar src={avatar} size="large" />
        <div className="user__data">
          <div className="userName">{name}</div>
          <div className="userEmail">{email}</div>
        </div>
      </div>
      <div className="followBtn">
        <button className="follow">follow</button>
      </div>
    </div>
  );
}

export default User;
