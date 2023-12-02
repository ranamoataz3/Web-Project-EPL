import React, { useState } from "react";
import PropTypes from "prop-types";
import { Form as AntForm } from "antd";
import useFormErrors from "./use-form-errors";
import ThemeProvider from "@components/theme-provider";

export const useForm = () => AntForm.useForm()[0];

export default function Form(props) {
    const _form = useForm();
    const form = props.form ?? _form;
    const [errors, setErrors] = useState(props.errors);

    useFormErrors(form, errors, () => {
        setErrors([]);
        props.clearErrors?.();
    });
    return (
        <ThemeProvider>
            <AntForm
                form={form}
                initialValues={props.initialValues}
                data-size={props.size ?? "md"}
                onFinish={props.onFinish}
                onChange={props.onChange}
                layout={props.layout ?? "vertical"}
                className={["form-container", props.className].join(" ")}
                placeholder={props.placeholder}
            >
                {props.children}
            </AntForm>
        </ThemeProvider>
        
    );
}

Form.propTypes = {
    className: PropTypes.string,
    layout: PropTypes.oneOf(["vertical", "horizontal"]),
    onFinish: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    form: PropTypes.any,
    errors: PropTypes.array,
    clearErrors: PropTypes.func,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    initialValues: PropTypes.object,
};
