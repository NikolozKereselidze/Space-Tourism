import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useRef, useState } from "react";

const navigations: string[] = ["Home", "Destinations", "Crew", "Technology"];

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
    navRef.current?.classList.toggle(`${styles.responsiveNav}`);
  };

  return (
    <header className={`${styles.navContainer} ${navOpen && styles.removePad}`}>
      <div className={styles.navWrapper}>
        <img
          src="/assets/shared/logo.svg"
          alt="Website logo"
          className={`${styles.logo} ${navOpen ? styles.hide : ""}`}
        />
        <button
          className={`${!navOpen && styles.open} ${navOpen ? styles.hide : ""}`}
          onClick={toggleNav}
        >
          <img src="/assets/shared/icon-hamburger.svg" alt="open icon" />
        </button>
        <nav className={styles.navigation} ref={navRef}>
          {navigations.map((navigation: string) => (
            <NavLink key={navigation} to={`/${navigation.toLowerCase()}`}>
              {navigation}
            </NavLink>
          ))}
          <button className={styles.close} onClick={toggleNav}>
            <img src="/assets/shared/icon-close.svg" alt="close icon" />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
