import React from "react";
import FormItemWrapper from "@components/form-components/form/FormItemWrapper";
import formElementsProptypes from "@components/form-components/common/form-elements-proptypes";
import { Input } from "antd";

export default function TextArea(props) {
    return (
        <FormItemWrapper {...props} className="lib-input-area">
            <Input.TextArea
                className={props.color}
                type={props.type}
                value={props.value}
                placeholder={props.placeholder}
                onChange={
                    props.onChange
                        ? (e) => props.onChange(e.target.value, e)
                        : undefined
                }
            />
        </FormItemWrapper>
    );
}

TextArea.propTypes = {
    ...formElementsProptypes,
};
