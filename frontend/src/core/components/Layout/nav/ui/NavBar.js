import styles from "./nav.module.css";
import NavData from "../data/NavData";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Hamburger from "@/core/components/hamburger/Hamburger";
// pages/index.js (or any other component)
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const NavBar = ({ openmenu, setOpenmenu }) => {
  const router = useRouter();
  const currentPath = router.pathname;
  const user = useSelector((state) => state.user);

  const navItems = user.isAdmin ? NavData.admin : NavData.fan;

  return (
    <nav id="nav" className={styles.container}>
      <div className={styles.brandcontainer}>
        <Link href="/" onClick={() => setOpenmenu(false)}>
          <Image
            src="/imgs/mainlogo2.png"
            width={120}
            height={100}
            alt="Brand"
          />
        </Link>
      </div>
      <ul className={styles.menucontainer}>
        {navItems.items.map((element, index) => {
          return (
            <Link
              key={element.name}
              className={styles.navitemlink}
              href={element.route}
              scroll={true}
            >
              <div className={styles.navitemtitle}>{element.name}</div>
            </Link>
          );
        })}
        {navItems.components
          ? navItems.components.map((element) => {
              return element.component;
            })
          : null}
      </ul>

      <div className={styles.menuicon}>
        <Hamburger isopen={openmenu} setopenmenu={setOpenmenu} />
      </div>

      <ul
        className={`${styles.mobilenav} ${
          openmenu ? styles.displaymobilenav : styles.hidemobilenav
        }`}
      >
        {navItems.items.map((element, index) => {
          return (
            <Link
              key={element.name}
              className={styles.navitemlink}
              scroll={true}
              href={element.route}
              onClick={() => setOpenmenu(false)}
            >
              <div className={styles.mobnavitemtitle}>{element.name}</div>
            </Link>
          );
        })}
        {navItems.components
          ? navItems.components.map((element) => {
              return element.component;
            })
          : null}
      </ul>
    </nav>
  );
};

export default NavBar;
