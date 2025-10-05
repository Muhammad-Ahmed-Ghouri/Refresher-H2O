import React from 'react';
import styles from './ContactBanner.module.css';

function ContactBanner() {
  return (
    <header className={styles.cartHeader}>
      <div className={styles.cartHeaderContent}>
        <p className={styles.cartHeaderContentHeadings}>
          SHOPPING CART
        </p>
      </div>
    </header>
  );
}

export default ContactBanner;
