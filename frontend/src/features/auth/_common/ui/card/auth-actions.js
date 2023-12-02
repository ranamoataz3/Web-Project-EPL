import Button from "@components/button";
import styles from "./auth-card.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function AuthActions({
    primaryButton,
    onFacebook,
    onGoogle,
    question,
    link,
}) {
    return (
        <div className={styles.actions}>
            <Button
                className={styles.primaryAction}
                htmlType="submit"
                onClick={primaryButton?.action}
            >
                {primaryButton?.label}
            </Button>
            <div className={styles.secondaryActions}>
                <Button
                    type="secondary"
                    icon={
                        <Image
                            src={"/imgs/facebook.svg"}
                            alt="facebook"
                            width={32}
                            height={32}
                        />
                    }
                >
                    Continue with Facebook
                </Button>
                <Button
                    type="secondary"
                    icon={
                        <Image
                            src={"/imgs/google.svg"}
                            alt="google"
                            width={32}
                            height={32}
                        />
                    }
                >
                    Continue with Google
                </Button>
            </div>
            <p className={styles.question}>
                {question}
                <Link href={link.href}>{link.label}</Link>
            </p>
        </div>
    );
}
