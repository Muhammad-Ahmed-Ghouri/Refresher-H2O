import React from 'react';
import styles from './Certificates.module.css';
import certificates from '../assets/company-certificates2.jpeg';
import certificatesCrop1 from '../assets/company-certificates-crop1.jpeg';
import certificatesCrop2 from '../assets/company-certificates-crop2.jpeg';

function Certificates() {
  return (
    <div className={styles.footerBoxPart1}>
      <h1>
        Our journey so far - here's a glimpse of what we've accomplished at
        Refresher H<small>2</small>O.
      </h1>
      <img
        className={styles.companyCertificates}
        src={certificates}
        alt="Company Certificates"
      />

      <div className={styles.certificatesCropBox}>
        <img
          className={styles.certificatesCrop}
          src={certificatesCrop1}
          alt="Certificate 1"
        />
        <img
          className={`${styles.certificatesCrop} ${styles.certificatesCrop2}`}
          src={certificatesCrop2}
          alt="Certificate 2"
        />
      </div>
    </div>
  );
}

export default Certificates;
