import React from "react";
import PropTypes from "prop-types";
import formElementsProptypes from "../common/form-elements-proptypes";
import MashedButton from "@components/button/MashedButton";
import { SearchIcon } from "@icons";
import Form from "@components/form-components/form";
import Input from "@components/form-components/input";

export default function Search({ onSearch, ...props }) {
    return (
        <Form onFinish={props.onSearch} className="lib-search">
            <Input type={"search"} className={""} {...props} />
            <MashedButton type="submit" htmlType="submit">
                <SearchIcon />
            </MashedButton>
        </Form>
    );
}

Search.propTypes = {
    ...formElementsProptypes,
    onSearch: PropTypes.func.isRequired,
};
