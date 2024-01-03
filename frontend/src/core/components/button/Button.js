import React from "react";
import styles from "./button.module.css";

const Button = (props) => {
  return (
    <div className={`${props.className}`}>
      {" "}
      <button
        className={`${styles.button} w-full centered ${props.btnclassName}`}
        type={props.type ? props.type : "button"}
        onClick={props.onclick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
