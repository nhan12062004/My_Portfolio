import React, { useRef, useState } from "react";
import "./button.css";

export default function ButtonCustom(props) {
  const [onMouseEnter, setOnMouseEnter] = useState(false);

  const handleToggleOnMouse = () => {
    setOnMouseEnter(!onMouseEnter);
  };

  return (
    <>
      <button
        className={`btn ${props.className} ${onMouseEnter ? "is-mouse" : ""}`}
        type={props.type}
        onMouseEnter={handleToggleOnMouse}
        onMouseLeave={handleToggleOnMouse}
      >
        {props.children}
      </button>
    </>
  );
}
