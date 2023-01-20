import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.css";
//Importar LOGO

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>
        PersonalProjects
      </Link>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link to="/projects">My Projects</Link>
        </li>
        <li className={styles.item}>
          <Link to="/user">User</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
