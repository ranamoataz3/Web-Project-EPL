import React from "react";
import PropTypes from "prop-types";
import { Input as AntInput } from "antd";
import formElementsProptypes from "../common/form-elements-proptypes";
import FormItemWrapper from "@components/form-components/form/FormItemWrapper";

export default function Input(props) {
    return (
        <FormItemWrapper
            {...props}
            data-size={props.size ?? "md"}
            className={`lib-input ${props.className ?? ""}`}
        >
            {props.type === "password" ? (
                <AntInput.Password
                    className={props.color}
                    value={props.value}
                    disabled={props.disabled}
                    placeholder={props.placeholder ?? props.label}
                    onChange={
                        props.onChange
                            ? (e) => props.onChange(e.target.value, e)
                            : undefined
                    }
                />
            ) : (
                <AntInput
                    className={props.color}
                    prefix={props.icon}
                    type={props.type}
                    value={props.value}
                    disabled={props.disabled}
                    placeholder={props.placeholder ?? props.label}
                    onChange={
                        props.onChange
                            ? (e) => props.onChange(e.target.value, e)
                            : undefined
                    }
                />
            )}
        </FormItemWrapper>
    );
}

Input.propTypes = {
    ...formElementsProptypes,
    type: PropTypes.string,
};
