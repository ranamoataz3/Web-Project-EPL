
import NavBar from "./nav/ui/NavBar";
import { useState , useEffect } from "react";
import styles from "./layout.module.css";

const Layout = ({ children }) => {
  const [openmenu, setOpenmenu] = useState(false);

  return (
    <div>
      <NavBar openmenu={openmenu} setOpenmenu={setOpenmenu} />
      <div className={` ${styles.layoutcontainer} ${openmenu ? styles.hidescroll : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
