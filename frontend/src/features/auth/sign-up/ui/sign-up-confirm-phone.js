import AuthCard from "@features/auth/_common/ui/card/auth-card";
import Form from "@components/form-components/form";
import Input from "@components/form-components/input";
import Button from "@components/button";
import styles from "../../_common/ui/card/auth-card.module.scss";

export default function SignUpConfirmPhone() {
    return (
        <AuthCard title="Join to" titleHasLogo>
            <Form>
                <Input label="Phone Number" name="phone" />
                <Button className={styles.primaryAction}>Continue</Button>
            </Form>
        </AuthCard>
    );
}
