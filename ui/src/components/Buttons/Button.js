import React from "react";
import "./Button.css";
function Button({ type = "primary", children, ...props }) {
  return (
    <button className={type} {...props}>
      {children}
    </button>
  );
}

export default Button;
