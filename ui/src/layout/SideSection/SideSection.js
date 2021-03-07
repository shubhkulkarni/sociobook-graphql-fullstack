import React from "react";
import "./Side.css";
import Search from "./../../components/TextInput/Search";
import UsersSection from "./UsersSection";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/actions/userActions";
function SideSection() {
  const searchInput = useSelector((state) => state.data.searchInput);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setSearch(e.target.value));
  };
  return (
    <div className="sideSection">
      <Search
        placeholder="Search"
        name="search"
        className="searchBar"
        onChange={handleChange}
        value={searchInput}
      />
      <UsersSection />
    </div>
  );
}

export default SideSection;
