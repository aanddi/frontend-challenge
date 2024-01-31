import { FC } from "react";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
const Header: FC = () => {
   return (
      <header className={styles.header}>
         <div className="header__container">
            <nav className={styles.header__nav}>
               <NavLink   className={styles.header__link} to="/">
                  Все котики
               </NavLink>
               <NavLink  className={styles.header__link} to="/favorites">
                  Любимые котики
               </NavLink>
            </nav>
         </div>
      </header>
   );
};

export default Header;
