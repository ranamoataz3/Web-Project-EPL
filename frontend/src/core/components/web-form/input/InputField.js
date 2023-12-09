import { ErrorMessage, Field } from "formik";
import styles from "./input.module.css";

export default function InputField(props) {

  return (
    <div className={styles.boxContainer}>
      <label className={styles.label}> {props.label}</label>
      <Field
        className={`${props.className} ${styles.field}`}
        name={props.name}
        autoComplete="off"
        placeholder={props.placeholder}
        type={props.type ? props.type : "text"}
      />
      <ErrorMessage name={props.name}>{(msg) => <p>{msg}</p>}</ErrorMessage>
    </div>
  );
}
