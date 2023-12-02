import React from "react";
import styles from "./FormCard.module.scss";
import AutoForm from "@components/form-components/form/AutoForm";

export default function AutoFormCard(props) {
    return (
        <AutoForm
            {...props}
            className={[styles.container, props.className, "card"].join(" ")}
        />
    );
}

AutoFormCard.propTypes = {
    ...AutoForm.propTypes,
};
