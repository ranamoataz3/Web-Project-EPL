import Input from "@components/form-components/input";
import { useMemo, useState } from "react";

export default function PasswordInput() {
    const cases = {
        length: {
            name: "8+ characters",
            regex: /.{8,}/,
        },
        case: {
            name: "Include upper and lowercase letters",
            regex: /(?=.*[a-z])(?=.*[A-Z])/,
        },
        includeSpecialCharacters: {
            name: "At least one special character",
            regex: /(?=.*[!@#$%^&*])/,
        },
        includeNumbers: {
            name: "At least one number",
            regex: /(?=.*[0-9])/,
        },
    };

    const [doneCases, setDoneCases] = useState({});
    const doneCasesLength = useMemo(() => Object.keys(cases).length, []);

    return (
        <>
            <Input
                label="Password"
                name="password"
                type="password"
                required
                rules={[
                    {
                        message: "Weak Password",
                        validator: (_, value) => {
                            const newDoneCases = {};
                            for (const key in cases) {
                                if (cases[key].regex.test(value)) {
                                    newDoneCases[key] = true;
                                }
                            }
                            setDoneCases(newDoneCases);
                            if (
                                Object.keys(newDoneCases).length ===
                                doneCasesLength
                            )
                                return Promise.resolve();
                            else return Promise.reject();
                        },
                    },
                ]}
            />
            <Input
                label="Confirm Password"
                name="confirm_password"
                type="password"
                disabled={Object.keys(doneCases).length === doneCasesLength}
                required
                rules={[
                    ({ getFieldValue }) => ({
                        message: "Password does not match",
                        validator: (_, value) => {
                            if (getFieldValue("password") === value)
                                return Promise.resolve();
                            else return Promise.reject();
                        },
                    }),
                ]}
            />
            <div className="mt-[-12px]">
                <p className="paragraph2 font-normal text-font-4 tracking-[-0.154px]">
                    <span className="text-red">* </span>
                    8+ characters, Include upper and lowercase letters, at least
                    one special character, at least one number
                </p>
                <div className="row gap-1 mt-3">
                    {Object.keys(cases).map((key, i) => (
                        <div
                            key={key}
                            className={[
                                "h-[3px] w-[64px] rounded-[1px] bg-divider transition-all",
                                i <= Object.keys(doneCases).length - 1
                                    ? "bg-primary"
                                    : "",
                            ].join(" ")}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
