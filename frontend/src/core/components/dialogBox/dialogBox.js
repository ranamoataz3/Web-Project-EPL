import React from "react";
import styles from "./dialogBox.module.css";
import PassableButton from "@core/components/passableButton/passable-button";

const DialogBox = (props) => {
  return (
    <div className={styles.outerDiv}>
      <div className={styles.innerDiv}>
        {/** Icon */}
        <img src={props.description.icon} className={styles.icon} />
        {/** Title */}
        <h4
          className={styles.title}
          style={{ color: props.description.titleColor }}
        >
          {props.description.title}{" "}
        </h4>
        {/**Message */}
        <p className={styles.message}>{props.description.message}</p>
        {/** Close Button */}
        <div className="flex ml-auto pr-5"> 
          <PassableButton
            className="centered max-w-[100%] "
            btnclassName="rounded-sm"
            onClick={props.onClose}
          >
            Close
          </PassableButton>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
