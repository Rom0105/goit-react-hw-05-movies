import { NavLink } from 'react-router-dom';
import styles from '../Navigation/Navigation.module.css';

function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink exact to="/" className={styles.link} activeClassName={styles.activeLink}>
        Home
      </NavLink>
      <NavLink to="/movies" className={styles.link} activeClassName={styles.activeLink}>
        Movies
      </NavLink>
    </nav>
  );
}

export default Navigation;
