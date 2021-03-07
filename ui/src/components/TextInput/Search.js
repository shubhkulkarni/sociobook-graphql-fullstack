import React from "react";
import "./input.css";
function Search({ type = "text", ...props }) {
  return <input type={type} {...props} className={"search"} />;
}

export default Search;
