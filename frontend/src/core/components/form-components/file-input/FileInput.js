import React, { useMemo, useRef, useState } from "react";
// import styles from "./FileInput.module.scss";
import PropTypes from "prop-types";
import { Upload } from "antd";
import formElementsProptypes from "@components/form-components/common/form-elements-proptypes";
import FormItemWrapper from "@components/form-components/form/FormItemWrapper";
import { InputIcon } from "@icons";
import Button from "@components/button";

export const AcceptableFileTypes = {
    Images: "image/*",
    Videos: "video/*",
    Audio: "audio/*",
    Documents:
        ".doc,.docx,.pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

export default function FileInput(props) {
    const ref = useRef();
    const [files, setFiles] = useState([]);
    const isDataExists = useMemo(() => files.length > 0, [files]);

    function onDrop(ev) {
        ev.preventDefault();
        const dt = ev.dataTransfer;
        const files = dt.files;
        setFiles(files);
    }

    return (
        <FormItemWrapper {...props}>
            <Upload className={"uploaderWrapper"}>
                <Button
                className={["uploader", props.color].join(" ")}
                    type="secondary"
                    icon={<InputIcon />}
                >
                    {props.placeholder ?? "Upload file"}
                </Button>
            </Upload>
        </FormItemWrapper>
    );
}

FileInput.propTypes = {
    ...formElementsProptypes,
    files: PropTypes.array,
    accept: PropTypes.string,
};
