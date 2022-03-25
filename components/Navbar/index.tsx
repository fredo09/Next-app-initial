import React from "react";
import { ActiveLink } from "../ActiveLink";

import styles from "./Navbar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <nav>
      <div className={styles["nav-container"]}>
        {menuItems.map((item) => {
          return (
            <ActiveLink key={item.text} text={item.text} href={item.href} />
          );
        })}
      </div>
    </nav>
  );
};
