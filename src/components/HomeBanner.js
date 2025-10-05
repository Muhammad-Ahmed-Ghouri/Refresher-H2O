import React from 'react';
import styles from './HomeBanner.module.css';
import bannerImage from '../assets/home-delivery-banner.jpeg';

function HomeBanner() {
  return (
    <div className={styles.mainBanner}>
      <img src={bannerImage} alt="Home Delivery" />
    </div>
  );
}

export default HomeBanner;
