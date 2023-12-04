import React from "react";
import styles from "./button.module.css";

const Button = (props) => {
  return (
    <div className={`${props.className}`}>
      {" "}
      <button
        className={`${styles.button} w-full centered`}
        type={props.type ? props.type : "button"}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
