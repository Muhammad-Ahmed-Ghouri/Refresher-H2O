import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import styles from './ContactForm.module.css';
import backgroundImage from '../assets/shopping-cart-section-background-image.jpg';
import whiteBackground from '../assets/white-background-image.jpeg';
import { productsList } from './Products';

function ContactForm() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const productId = parseInt(searchParams.get('id'));

  const selectedProduct = productsList.find((p) => p.id === productId);

  const [formData, setFormData] = useState({
    quantity: 1,
    customerName: '',
    customerMobileNo: '',
    customerAddress: '',
  });

  const [totalAmount, setTotalAmount] = useState(0);
  const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedProduct) {
      updateTotalAmount(
        formData.quantity,
        selectedProduct.price,
        selectedProduct.deliveryCharges
      );
    }
  }, [formData.quantity, selectedProduct]);

  useEffect(() => {
    checkFields();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const updateTotalAmount = (quantity, price, deliveryCharges) => {
    const total = quantity * price + (deliveryCharges > 0 ? deliveryCharges : 0);
    setTotalAmount(total);
  };

  const checkFields = () => {
    const isValid =
      formData.customerName.length >= 3 &&
      formData.customerMobileNo.length === 10 &&
      formData.customerMobileNo.charAt(0) === '3' &&
      formData.customerAddress.length >= 10 &&
      formData.quantity > 0;

    setIsSubmitEnabled(isValid);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'customerMobileNo') {
      const sanitized = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, [name]: sanitized });
    } else if (name === 'quantity') {
      setFormData({ ...formData, [name]: parseInt(value) || 0 });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isSubmitEnabled) return;

    const submitData = {
      customerName: formData.customerName,
      customerAddress: formData.customerAddress,
      customerMobileNo: `+92${formData.customerMobileNo}`,
      items: [
        {
          productName: selectedProduct.product,
          quantity: formData.quantity,
          perUnitPrice: selectedProduct.price,
        },
      ],
    };

    setIsLoading(true);

    try {
      const response = await fetch('https://app.hydrila.com/api/webstoreorders', {
        method: 'POST',
        body: JSON.stringify(submitData),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      await response.json();

      setTimeout(() => {
        setIsLoading(false);
        Swal.fire({
          text: 'Hey! Your order has been placed successfully.',
          timer: 2000,
          showConfirmButton: false,
        });

        setTimeout(() => {
          navigate('/');
        }, 2000);
      }, 2000);
    } catch (error) {
      console.error('Fetch error:', error);
      setIsLoading(false);
      Swal.fire({
        text: 'There was an error placing your order. Please try again.',
        icon: 'error',
      });
    }
  };

  if (!selectedProduct) {
    return (
      <section className={styles.shoppingCartSection}>
        <p>Product not found. Please select a product from the home page.</p>
      </section>
    );
  }

  return (
    <section className={styles.shoppingCartSection}>
      <img
        className={styles.shoppingCartSectionBackgroundImage}
        src={backgroundImage}
        alt=""
      />

      <div className={styles.shoppingCartSectionForm}>
        <div className={styles.formContent1}>
          <h1>Order Details</h1>
        </div>

        <form className={styles.formContent2} onSubmit={handleSubmit}>
          <img
            className={styles.formContent2BackgroundImage}
            src={whiteBackground}
            alt=""
          />

          <div className={styles.formContent2Box1}>
            <div className={`${styles.formContent2Field} ${styles.formContent2NameField}`}>
              <h6>Product Name</h6>
              <p>{selectedProduct.product}</p>
            </div>
            <div className={`${styles.formContent2Field} ${styles.formContent2PriceField}`}>
              <h6>Per Unit Price</h6>
              <p>{selectedProduct.price}</p>
            </div>
          </div>

          <div className={styles.formContent2Box2}>
            <div className={styles.formContent2InputField}>
              <label htmlFor="quantity">Quantity</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
                min="0"
              />
            </div>

            <div className={styles.formContent2InputField}>
              <label htmlFor="name">Customer Name</label>
              <input
                type="text"
                id="name"
                name="customerName"
                value={formData.customerName}
                onChange={handleInputChange}
                autoComplete="name"
              />
            </div>

            <div className={styles.formContent2InputField}>
              <label htmlFor="phone">Customer Mobile No</label>
              <div className={styles.formContent2InputPhoneField}>
                <p>(+92)</p>
                <input
                  type="tel"
                  id="phone"
                  name="customerMobileNo"
                  value={formData.customerMobileNo}
                  onChange={handleInputChange}
                  placeholder="300XXXXXXX"
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className={styles.formContent2InputField}>
              <label htmlFor="address">Customer Address</label>
              <input
                type="text"
                id="address"
                name="customerAddress"
                value={formData.customerAddress}
                onChange={handleInputChange}
                autoComplete="street-address"
              />
            </div>

            <div className={styles.formContent2Box2Field}>
              <h6>Total</h6>
              <p>{totalAmount}</p>
              {selectedProduct.deliveryCharges > 0 && (
                <h5 className={styles.deliveryChargesMessage}>
                  Delivery charges will apply
                </h5>
              )}
            </div>

            <div className={styles.formContent2Box2Button}>
              <button type="submit" disabled={!isSubmitEnabled}>
                {isLoading && <div className={styles.orderProcess}></div>}
                Submit
              </button>
            </div>

            <div className={styles.formContent2Box2LoginButton}>
              <a href="https://app.hydrila.com" className={styles.loginBtn}>
                Login
              </a>
              <h5 className={styles.accountLoginMessage}>
                Login if you have already account
              </h5>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
