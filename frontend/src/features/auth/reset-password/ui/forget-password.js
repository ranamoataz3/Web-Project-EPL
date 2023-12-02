import AuthCard from "@features/auth/_common/ui/card/auth-card";
import { useState } from "react";
import Form from "@components/form-components/form";
import Input from "@components/form-components/input";
import Button from "@components/button";
import styles from "../../_common/ui/card/auth-card.module.scss";

export default function ForgetPassword() {
    const [success, setSuccess] = useState(false);
    return success ? (
        <AuthCard title="Reset Password">
            <p>
                We sent an email to{" "}
                <strong className="font-bold">name@gmail.com</strong> with a
                link to reset your password.
            </p>
        </AuthCard>
    ) : (
        <AuthCard title="Forget Password">
            <Form onFinish={() => setSuccess(true)}>
                <Input type="email" name="email" label="Email" required />
                <Button className={styles.primaryAction}>
                    Request a Reset Link
                </Button>
            </Form>
        </AuthCard>
    );
}
