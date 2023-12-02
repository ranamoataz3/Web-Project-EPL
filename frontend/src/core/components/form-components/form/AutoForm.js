import React from "react";
import Form, { useForm } from "./Form";
import PropTypes from "prop-types";
import Button from "@components/button";
import SecondaryButton from "@components/button/SecondaryButton";
import Select from "@components/form-components/select";
import Input from "@components/form-components/input";
import FileInput from "@components/form-components/file-input";
import TextArea from "@components/form-components/text-area";

function FormItemWrapper(props) {
    switch (props.type) {
        case "select":
            return <Select {...props} />;
        case "textarea":
            return <TextArea {...props} />;
        case "file":
            return <FileInput {...props} />;
        default:
            return <Input type={props.type} {...props} />;
    }
}

export default function AutoForm(
    { primaryAction, secondaryActions, items, ...rest } = {
        primaryAction: {
            title: "Save",
        },
        items: [],
    }
) {
    const form = useForm();

    return (
        <Form {...rest} onFinish={primaryAction.submit} form={form}>
            {items?.map((it) =>
                it.type === "group" ? (
                    <div key={it.name} className="flex-wrap row">
                        {it.children
                            ? it.children
                            : it.items.map((it) => (
                                  <FormItemWrapper key={it.name} {...it} />
                              ))}
                    </div>
                ) : (
                    <FormItemWrapper key={it.name} {...it} />
                )
            )}
            <div className="flex-wrap gap-4 row-between">
                <div className=" flex-wrap gap-2 row">
                    {secondaryActions?.map((action, index) => (
                        <SecondaryButton
                            key={index}
                            icon={action.icon}
                            onClick={(e) => action.submit(form.values(), e)}
                        >
                            {action.title}
                        </SecondaryButton>
                    ))}
                </div>
                <div
                    style={{
                        marginInlineStart: "auto",
                    }}
                >
                    <Button htmlType="submit" icon={primaryAction.icon}>{primaryAction.title}</Button>
                </div>
            </div>
        </Form>
    );
}

AutoForm.propTypes = {
    className: PropTypes.string,
    form: PropTypes.any,
    errors: PropTypes.array,
    clearErrors: PropTypes.func,
    primaryAction: PropTypes.shape({
        title: PropTypes.string.isRequired,
        submit: PropTypes.func.isRequired,
    }).isRequired,
    secondaryActions: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            submit: PropTypes.func.isRequired,
        })
    ),
    items: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            type: PropTypes.oneOf([
                "text",
                "select",
                "number",
                "email",
                "textarea",
                "password",
                "file",
            ]),
            rules: PropTypes.arrayOf(PropTypes.object),
            required: PropTypes.bool,
            options: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    value: PropTypes.string.isRequired,
                })
            ),
        })
    ).isRequired,
};
