import React from "react";
import styles from "./Button.module.scss";
import GenericButton from "./GenericButton";

export default function PrimaryButton(props) {
    return (

            <GenericButton
                {...props}
                type={"primary"}
                className={[styles.buttonPrimary, props.className].join(" ")}
            />
    );
}

PrimaryButton.propTypes = {
    ...GenericButton.propTypes,
};
