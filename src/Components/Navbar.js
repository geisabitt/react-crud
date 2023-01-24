import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/">Cadastro</Link>
        </li>
        <li className={styles.item}>
          <Link id="rota-consulta" to="/consulta">
            Consulta
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
