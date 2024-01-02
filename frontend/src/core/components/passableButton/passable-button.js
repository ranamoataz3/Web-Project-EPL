import React from "react";
import styles from "./passable-button.module.css";
const PassableButton = (props) => {
  return (
    <div className={`${props.className}`}>
      {" "}
      <button
        className={`${styles.button} w-full centered ${props.btnclassName}`}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default PassableButton;
