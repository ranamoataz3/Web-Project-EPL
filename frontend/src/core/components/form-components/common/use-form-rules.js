import { useMemo } from "react";

export default function UseFormRules(props) {
    return useMemo(() => {
        const rules = [...(props.rules ?? [])];

        if (props.required)
            rules.push({
                required: true,
                message: props.requiredMessage ?? "This field is required",
            });

        return rules;
    }, [props.required, props.requiredMessage, props.rules]);
}
