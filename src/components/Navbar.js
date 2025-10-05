import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../assets/company-logo.jpeg';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <Link to="/" className={styles.logoLink}>
          <img src={logo} alt="Refresher H2O Logo" />
          <p>Refresher H<small>2</small>0</p>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
