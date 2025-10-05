import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Products.module.css';
import card1Image from '../assets/card1-image.jpeg';
import card2Image from '../assets/card2-image.jpeg';
import cardImage from '../assets/card-image.png';

const productsList = [
  {
    id: 1,
    product: "Rh20 1.5 Liter pet (pack of 6)",
    price: 320,
    image: card1Image,
    deliveryCharges: 0,
  },
  {
    id: 2,
    product: "Rh20 500 ml pet (pack of 12)",
    price: 320,
    image: card2Image,
    deliveryCharges: 0,
  },
  {
    id: 3,
    product: "Classic purified(19 Liters)",
    price: 80,
    image: cardImage,
    deliveryCharges: 30,
  },
  {
    id: 4,
    product: "Premium Mineral Boosted(19 Liters)",
    price: 100,
    image: cardImage,
    deliveryCharges: 30,
  },
  {
    id: 5,
    product: "Ozonated Mineral Boosted(19 Liters)",
    price: 120,
    image: cardImage,
    deliveryCharges: 30,
  },
];

function Products() {
  const navigate = useNavigate();

  const handleOrderClick = (productId) => {
    navigate(`/contact?id=${productId}`);
  };

  return (
    <section className={styles.cardSection}>
      <div className={styles.loginMessage}>
        <p className={styles.loginMessageContent}>
          Already have an account?
          <a href="https://app.hydrila.com">Log in</a> and place your order from there!
        </p>
      </div>
      <div className={styles.cards}>
        {productsList.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.cardSection1}>
              <div className={styles.cardSection1Image}>
                <img src={item.image} alt={item.product} />
              </div>
              <div className={styles.cardSection1HoverOption}>
                <button
                  className={styles.cardSection1HoverButton}
                  onClick={() => handleOrderClick(item.id)}
                >
                  Order Now
                </button>
              </div>
            </div>
            <div className={styles.cardSection2}>
              <p className={styles.cardSection2Content1}>{item.product}</p>
              <p className={styles.cardSection2Content3}>₨ {item.price}</p>
              <p className={styles.cardSection2Content2}>Delivery: ₨ {item.deliveryCharges}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
export { productsList };
