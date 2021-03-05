import React from "react";
import "./input.css";
function Input({ type = "text", error, ...props }) {
  const classes = error ? "input error" : "input";
  return <input type={type} {...props} className={classes} />;
}

export default Input;
