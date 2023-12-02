import AuthCard from "@features/auth/_common/ui/card/auth-card";
import Form from "@components/form-components/form";
import Input from "@components/form-components/input";
import AuthActions from "@features/auth/_common/ui/card/auth-actions";
import PasswordInput from "@components/form-components/password";

export default function SignUp() {
    return (
        <AuthCard title="Join to" titleHasLogo>
            <Form>
                <Input label="Full Name" name="name" required />
                <Input label="Email" name="email" required />
                <PasswordInput />
                <AuthActions
                    link={{
                        label: "Sign In",
                        href: "/auth/sign-in",
                    }}
                    question="Already have an account?"
                    primaryButton={{
                        label: "Sign Up",
                    }}
                />
            </Form>
        </AuthCard>
    );
}
