import React from 'react';
import Certificates from './Certificates';
import styles from './Footer.module.css';
import logo from '../assets/company-logo.jpeg';
import telephone from '../assets/telephone.png';
import location from '../assets/location.png';

function Footer() {
  return (
    <footer className={styles.websiteFooter}>
      <div className={styles.footerBox}>
        <Certificates />

        <div className={styles.footerBoxPart2}>
          <div className={styles.footerBoxPart2Content1}>
            <img src={logo} alt="Refresher H2O Logo" />
            <p>Refresher H<small>2</small>0 PVT Ltd</p>
          </div>

          <div className={styles.footerBoxPart2Content2}>
            <p>telephone<img src={telephone} alt="Phone" />:</p>
            <a href="tel:03047952551">&nbsp;0304-7952551</a>
          </div>

          <div className={styles.footerBoxPart2Content3}>
            <p>location<img src={location} alt="Location" />:</p>
            <a
              href="https://www.google.com/maps/place/G8M3%2BQPR,+154n+Ghazali+Rd,+Samanabad+Town,+Lahore,+54000,+Pakistan/@31.5345347,74.3016609,17z/data=!3m1!4b1!4m6!3m5!1s0x391903676b13f633:0xf31a6e75db13c06e!8m2!3d31.5345347!4d74.3042358!16s%2Fg%2F11gf97_lkc?entry=ttu&g_ep=EgoyMDI1MDQyOC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;154 N Ghazali Road Lahore
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
