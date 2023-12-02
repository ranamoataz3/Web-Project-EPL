import React from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";
import { Button as AntButton } from "antd";
import dynamic from "next/dynamic";

const ThemeProvider = dynamic(() => import("@components/theme-provider"));
export default function GenericButton(props) {
    return (
        <ThemeProvider>
            <AntButton
                {...props}
                icon={
                    props.icon ? (
                        <div className={styles.iconContainer}>{props.icon}</div>
                    ) : null
                }
                className={[
                    styles.button,
                    props.small ? styles.small : "",
                    props.iconPosition === "end" ? "flex-row-reverse" : "",
                    props.className,
                ].join(" ")}
            />
        </ThemeProvider>
    );
}

GenericButton.propTypes = {
    ...AntButton.propTypes,
    href: PropTypes.string,
    iconPosition: PropTypes.oneOf(["start", "end"]),
    small: PropTypes.bool,
};
