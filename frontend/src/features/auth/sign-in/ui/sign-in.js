import AuthCard from "@features/auth/_common/ui/card/auth-card";
import Form from "@components/form-components/form";
import Input from "@components/form-components/input";
import AuthActions from "@features/auth/_common/ui/card/auth-actions";
import Link from "next/link";

const SignIn = () => {
  return (
    <AuthCard title="Welcome to" titleHasLogo>
      <Form>
        <Input label="Email" name="email" required />
        <Input label="Password" name="password" type="password" required />
        <Link className="mt-[-8px] text-end" href="/auth/forgot-password">
          Forget Password?
        </Link>
        <AuthActions
          link={{
            label: "Sign Up",
            href: "/auth/sign-up",
          }}
          question="Don't have an account?"
          primaryButton={{
            label: "Sign In",
          }}
        />
      </Form>
    </AuthCard>
  );
};

export default SignIn;
