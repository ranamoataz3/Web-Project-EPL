import { Field } from "formik";
import styles from "./textareafield.module.css";

export default function TextAreaField(props) {
    return (
        <div className={styles.boxContainer}>
            <label className={styles.label}> {props.label}</label>
            <Field name={props.name}>
                {({ field }) => (
                    <textarea
                        {...field}
                        className={`${styles.field}`}
                        autoComplete="off"
                        placeholder={props.placeholder}
                    />
                )}
            </Field>
        </div>
    );
}
