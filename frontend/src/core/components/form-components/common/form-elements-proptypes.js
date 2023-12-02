import PropTypes from "prop-types";

const formElementsProptypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    required: PropTypes.bool,
    requiredMessage: PropTypes.string,
    rules: PropTypes.array,
    value: PropTypes.any,
    onChange: PropTypes.func,
    noForm: PropTypes.bool,
    placeholder: PropTypes.string,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    standalone: PropTypes.bool,
    icon: PropTypes.node,
};

export default formElementsProptypes;