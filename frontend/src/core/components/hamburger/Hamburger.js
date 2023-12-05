import styles from "./hamburger.module.css";

const Hamburger = ({ isopen, setopenmenu }) => {
    return (
        <div
            onClick={() => {
                setopenmenu(!isopen);
            }}
            className={`${styles.hamburger} ${isopen ? styles.open : ""}`}
        >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default Hamburger;