import GenericButton from "@components/button/GenericButton";
import PropTypes from "prop-types";
import PrimaryButton from "@components/button/Button";
import SecondaryButton from "@components/button/SecondaryButton";
import MashedButton from "@components/button/MashedButton";

export default function Button({ type, ...props }) {
    props["data-icon-hover"] = props.iconOnHover;
    switch (type) {
        case "secondary":
            return <SecondaryButton {...props} />;
        case "icon":
            return <MashedButton {...props} />;
        default:
            return <PrimaryButton {...props} />;
    }
}

Button.propTypes = {
    ...GenericButton.propTypes,
    mono: PropTypes.bool,
    type: PropTypes.oneOf(["primary", "secondary", "icon"]),
    iconOnHover: PropTypes.bool,
};
