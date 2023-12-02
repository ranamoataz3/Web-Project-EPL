import React from "react";
import styles from "./Button.module.scss";
import GenericButton from "./GenericButton";
import PropTypes from "prop-types";

export default function SecondaryButton(props) {
    return (
        <GenericButton
            {...props}
            className={[
                styles.buttonSecondary,
                props.mono ? styles.buttonMono : "",
                props.className,
            ].join(" ")}
        />
    );
}
SecondaryButton.propTypes = {
    ...GenericButton.propTypes,
    mono: PropTypes.bool,
};
