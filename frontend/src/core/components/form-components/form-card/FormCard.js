import React from "react";
import styles from "./FormCard.module.scss";
import Form from "../form";

export default function FormCard(props) {
    return (
        <Form
            {...props}
            className={[styles.container, props.className, "card"].join(" ")}
        >
            {props.children}
        </Form>
    );
}

FormCard.propTypes = {
    ...Form.propTypes,
};
