import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const navigations: string[] = ["Home", "Destinations", "Crew", "Technology"];

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navWrapper}>
        <img
          src="/assets/shared/logo.svg"
          alt="Website logo"
          className={styles.logo}
        />
        <div className={styles.navigation}>
          {navigations.map((navigation: string) => (
            <NavLink key={navigation} to={`/${navigation.toLowerCase()}`}>
              {navigation}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
