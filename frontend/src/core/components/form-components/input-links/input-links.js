import FormItemWrapper from "@components/form-components/form/FormItemWrapper";
import formElementsProptypes from "@components/form-components/common/form-elements-proptypes";
import Input from "@components/form-components/input";
import { useEffect, useId, useReducer, useState } from "react";
import extractFavIcon from "@utils/fav-icon-extractor";
import _ from "lodash";
import { CloseCircleIcon, PlusIcon } from "@icons";
import linksReducer from "@components/form-components/input-links/input-links-reducer";

InputLinks.propTypes = {
    ...formElementsProptypes,
};

function SingleInputLink(props) {
    const [domain, setDomain] = useState("-");
    const id = useId();
    const regex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/gim;

    const onChange = _.debounce((value) => {
        const match = value.split(regex)[1];
        const isValidDomain = match && value.includes(".");
        if (isValidDomain) setDomain(match);
        else setDomain("-");
        props.onChange(value);
    }, 200);
    return (
        <div className="single-link-wrapper ">
            <Input
                color={[props.color, `[&>input]:${props.color}`].join(" ")}
                required={props.required}
                name={`link-${id}`}
                rules={[
                    {
                        type: "url",
                        message: "Please enter a valid URL",
                        validateTrigger: "onBlur",
                    },
                    {
                        validateTrigger: "onBlur",
                        validator: (_, value) => {
                            value ??= "";
                            if (!props.domain) return Promise.resolve();
                            const requiredDomain = props.domain.split(regex)[1];
                            const actualDomain = value.split(regex)[1];

                            if (requiredDomain === actualDomain)
                                return Promise.resolve();
                            else
                                return Promise.reject(
                                    `Please enter a valid ${props.placeholder} URL`
                                );
                        },
                    },
                ]}
                className={"lib-single-input-link peer"}
                onChange={onChange}
                placeholder={`${props.placeholder ?? ""} ${
                    props.required ? "(Required)" : ""
                }`}
                icon={
                    <div className="single-link-icon-wrapper">
                        <div className="single-link-icon">
                            <img
                                className="rounded-full"
                                src={
                                    props.domain
                                        ? extractFavIcon(props.domain)
                                        : extractFavIcon(domain)
                                }
                                alt={`${domain} image`}
                            />
                        </div>
                    </div>
                }
            />

            {!props.disableDelete && !props.required && (
                <button
                    className="link-remove-button peer-hover:opacity-100 "
                    onClick={props.handleDelete}
                    type="button"
                >
                    <CloseCircleIcon size={24} />
                </button>
            )}
        </div>
    );
}

function InputLinksContent({ value, onChange, defaultLinks, color }) {
    const [state, dispatch] = useReducer(linksReducer, {
        links: [
            {
                id: 1,
                url: "",
                show: true,
            },
        ],
    });

    useEffect(() => {
        if (defaultLinks)
            dispatch({
                type: "populate_default_links",
                payload: defaultLinks,
            });
    }, [defaultLinks]);

    useEffect(() => {
        if (value)
            dispatch({
                type: "populate_links",
                payload: value,
            });
    }, [value]);

    useEffect(() => {
        onChange?.(state.links);
    }, [state]);
    return (
        <div className={"lib-input-links-wrapper"}>
            {state.links.map((link, index) => (
                <SingleInputLink
                    color={color}
                    {...link}
                    key={link.id}
                    disableDelete={state.links.length === 1}
                    handleDelete={() => {
                        dispatch({
                            type: "remove_link",
                            index,
                        });
                    }}
                    onChange={(v) =>
                        dispatch({
                            type: "modify_link",
                            index,
                            payload: v,
                        })
                    }
                />
            ))}
            <button
                className="lib-links-button"
                type="button"
                onClick={() =>
                    dispatch({
                        type: "add_link",
                    })
                }
            >
                Add New Link
                <span>
                    <PlusIcon size={13} />
                </span>
            </button>
        </div>
    );
}

export default function InputLinks({ defaultLinks, ...props }) {
    return (
        <FormItemWrapper
            {...props}
            rules={[
                {
                    required: true,
                },
            ]}
            className={`lib-input-links ${props.className ?? ""}`}
        >
            <InputLinksContent
                color={props.color}
                defaultLinks={defaultLinks}
            />
        </FormItemWrapper>
    );
}
