import { NavLink } from "react-router-dom";
import logo from "../../assets/shared/logo.svg";
import styles from "./Navbar.module.css";

const navigations: string[] = ["Home", "Destinations", "Crew", "Technology"];

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navWrapper}>
        <img src={logo} alt="Website logo" className={styles.logo} />
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
