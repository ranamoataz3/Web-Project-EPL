import React from "react";
import { ErrorMessage, Field } from "formik";
import styles from "./checkbox.module.css";

const CheckBox = (props) => {
  return (
    <div className={styles.boxContainer}>
      <label className={styles.label}>{props.label}</label>
      {props.options.map((option, index) => (
        <div className={`${props.className} ${styles.field}`} key={index}>
          <Field
            type="checkbox"
            id={option.value}
            name={props.name}
            value={option.value}
          />
          <label className={`${styles.label} pl-2`} htmlFor={option.value}>
            {option.label}
          </label>
        </div>
      ))}
      <ErrorMessage name={props.name}>{(msg) => <p>{msg}</p>}</ErrorMessage>
    </div>
  );
};

export default CheckBox;
