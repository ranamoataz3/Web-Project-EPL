import Image from "next/image";
import styles from "./auth-card.module.scss";

export default function AuthCard({ title, titleHasLogo, children }) {
    return (
        <main className={styles.main}>
            <div className={styles.card}>
                <h1>
                    <span>{title}</span>
                    {titleHasLogo && (
                        <Image
                            src={"/imgs/logo.svg"}
                            alt={"div-academy"}
                            width={243}
                            height={35}
                        />
                    )}
                </h1>
                <div>{children}</div>
            </div>
            <footer>
                Powered By <a href={"https://div-systems.com"}>Div Systems</a>
            </footer>
        </main>
    );
}
