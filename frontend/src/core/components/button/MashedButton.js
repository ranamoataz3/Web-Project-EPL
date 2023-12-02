import React from "react";
import GenericButton from "./GenericButton";
import styles from "./Button.module.scss";

export default function MashedButton(props) {
    return (
        <GenericButton
            {...props}
            className={[styles.buttonMashed, props.className].join(" ")}
        >
            {props.children}
        </GenericButton>
    );
}
MashedButton.propTypes = {
    ...GenericButton.propTypes,
};
