import React from "react";
import "./input.css";
function TextArea({ type = "text", ...props }) {
  return <textarea type={type} {...props} className={"input"} />;
}

export default TextArea;
