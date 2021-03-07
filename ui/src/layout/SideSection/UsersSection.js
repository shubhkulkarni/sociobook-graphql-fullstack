import React from "react";
import "./Side.css";
import User from "./User";
import { useSelector } from "react-redux";
import avt from "../../assets/img_avatar.png";
function UsersSection() {
  const users = useSelector((state) => state.data.allUsers);
  const searchInput = useSelector((state) => state.data.searchInput);
  return (
    <div className="userSection">
      {users
        .filter((i) => {
          if (searchInput) {
            return i.name.includes(searchInput);
          }
          return i;
        })
        .map((user) => {
          return (
            <User
              name={user.name}
              email={user.email}
              avatar={user.profileImage || avt}
            />
          );
        })}
    </div>
  );
}

export default UsersSection;
