import React, { useMemo } from "react";
import PropTypes from "prop-types";
import { Select as AntSelect } from "antd";
import formElementsProptypes from "../common/form-elements-proptypes";
import FormItemWrapper from "@components/form-components/form/FormItemWrapper";

export const Option = AntSelect.Option;

export default function Select(props) {
    const color = useMemo(() => {
        if (!props.color) return undefined;
        const fetchedColor = props.color.split("bg-")[1];
        return fetchedColor ? `color-${fetchedColor}` : undefined;
    }, [props.color]);
    return (
        <>
            <style>
                {color
                    ? `
                .lib-select .ant-select-selector {
                        background-color: var(--${color}) !important; 
                 }
                `
                    : ""}
            </style>
            <FormItemWrapper {...props}>
                <AntSelect
                    className={`lib-select ${props.color}`}
                    placeholder={props.placeholder}
                    allowClear
                    showSearch={props.showSearch}
                    defaultValue={props.defaultValue}
                >
                    {props.options?.length > 0
                        ? props.options.map((option) => (
                              <Option
                                  key={option.key ?? option.name}
                                  {...option}
                              >
                                  {option.name}
                              </Option>
                          ))
                        : props.children}
                </AntSelect>
            </FormItemWrapper>
        </>
    );
}

Select.propTypes = {
    ...formElementsProptypes,
    options: PropTypes.array,
    children: PropTypes.object,
    showSearch: PropTypes.bool,
};
