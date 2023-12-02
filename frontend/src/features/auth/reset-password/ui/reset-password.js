import { useState } from "react";
import AuthCard from "@features/auth/_common/ui/card/auth-card";
import Form from "@components/form-components/form";
import Button from "@components/button";
import styles from "@features/auth/_common/ui/card/auth-card.module.scss";
import Link from "next/link";
import PasswordInput from "@components/form-components/password";

export default function ResetPassword() {
    const [success, setSuccess] = useState(false);
    return success ? (
        <AuthCard title="Reset Password">
            <p>Your password has been successfully changed.</p>
            <Link href={"/auth/sign-in"}>
                <Button className={[styles.primaryAction, "mt-10"].join(" ")}>
                    Sign In
                </Button>
            </Link>
        </AuthCard>
    ) : (
        <AuthCard title="Forget Password">
            <Form size="lg" onFinish={() => setSuccess(true)}>
                <PasswordInput />
                <Button className={styles.primaryAction}>
                    Request a Reset Link
                </Button>
            </Form>
        </AuthCard>
    );
}
