import React from "react";
import PropTypes from "prop-types";
import { Form as AntForm } from "antd";
import formElementsProptypes from "@components/form-components/common/form-elements-proptypes";
import UseFormRules from "@components/form-components/common/use-form-rules";

export default function FormItemWrapper(props) {
    const rules = UseFormRules(props);
    return (
        <AntForm.Item
            className={`lib-form-item ${props.className ?? ""}`}
            name={props.name}
            id={props.id}
            label={props.label}
            rules={[...rules]}
        >
            {props.children}
        </AntForm.Item>
    );
}

FormItemWrapper.propTypes = {
    ...formElementsProptypes,
    children: PropTypes.object,
    className: PropTypes.string,
};
