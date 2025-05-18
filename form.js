const quantity = document.getElementById("quantity");
const customerName = document.getElementById("name");
const customerMobileNo = document.getElementById("phone");
const customerAddress = document.getElementById("address");
const submitButton = document.getElementById("submit-btn");
const orderProcess = document.getElementById("order-process");
const deliveryChargesMessage = document.getElementById(
  "delivery-charges-message"
);
const totalAmount = document.getElementById("total-amount");
const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get("id")); // Get product ID from URL
let productName = document.getElementById("product-name");
let productPrice = document.getElementById("product-unit-price");

// Product array
const products = [
  {
    id: 1,
    product: "Rh20 1.5 Liter pet (pack of 6)",
    price: 320,
    image: "./assets/card1-image.jpeg",
    deliveryCharges: 0,
  },
  {
    id: 2,
    product: "Rh20 500 ml pet (pack of 12)",
    price: 320,
    image: "./assets/card2-image.jpeg",
    deliveryCharges: 0,
  },
  {
    id: 3,
    product: "Classic purified(19 Liters)",
    price: 80,
    image: "./assets/card-image.png",
    deliveryCharges: 30,
  },
  {
    id: 4,
    product: "Premium Mineral Boosted(19 Liters)",
    price: 100,
    image: "./assets/card-image.png",
    deliveryCharges: 30,
  },
  {
    id: 5,
    product: "Ozonated Mineral Boosted(19 Liters)",
    price: 120,
    image: "./assets/card-image.png",
    deliveryCharges: 30,
  },
];

// Find the selected product based on the product ID from URL
const selectedProduct = products.find((p) => p.id === productId);

// Declare the initial values object
let initialValues = {
  customerName: "",
  customerAddress: "",
  customerMobileNo: "",
  items: [
    {
      productName: "",
      quantity: 0,
      perUnitPrice: 0,
    },
  ],
};

// If selected product exists, update product details
if (selectedProduct) {
  productName.textContent = selectedProduct.product;
  productPrice.textContent = selectedProduct.price;

  if (selectedProduct.deliveryCharges) {
    deliveryChargesMessage.style.display = "block";
  }

  initialValues.items[0].productName = selectedProduct.product;
  initialValues.items[0].perUnitPrice = selectedProduct.price;

  // Set initial total amount
  updateTotalAmount(selectedProduct.price, selectedProduct.deliveryCharges);
} else {
  console.error("Product not found");
}

// Updating the total amount

function updateTotalAmount(price, deliveryCharges) {
  const quantityValue = parseInt(quantity.value);
  if (deliveryCharges > 0) {
    const total = quantityValue * price + deliveryCharges;
    totalAmount.textContent = total;
  } else {
    const total = quantityValue * price;
    totalAmount.textContent = total;
  }
}

// Form field validation

function checkFields() {
  if (
    customerName.value.length >= 3 &&
    customerMobileNo.value.length === 10 &&
    customerAddress.value.length >= 10 &&
    quantity.value > 0
  ) {
    submitButton.disabled = false;
    submitButton.style.backgroundColor = "#6987ac";
    submitButton.style.cursor = "pointer";
  } else {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "rgb(203, 199, 199)";
  }
}

// Updating initial values

function formValues() {
  initialValues.customerName = customerName.value;
  initialValues.customerAddress = customerAddress.value;
  initialValues.customerMobileNo = "+92" + customerMobileNo.value;
  initialValues.items[0].quantity = parseInt(quantity.value) || 0;
  return initialValues;
}

quantity.addEventListener("input", () => {
  if (selectedProduct) {
    updateTotalAmount(selectedProduct.price, selectedProduct.deliveryCharges);
  }
  checkFields();
});

customerName.addEventListener("input", checkFields);
customerMobileNo.addEventListener("input", checkFields);
customerAddress.addEventListener("input", checkFields);

// Phone number formatting

customerMobileNo.addEventListener("input", function () {
  this.value = this.value.replace(/\D/g, "");
  if (this.value.length > 10) {
    this.value = this.value.slice(0, 10);
  }
  checkFields();
});

// Post data to server

async function post(data) {
  await fetch("https://app.hydrila.com/api/webstoreorders", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

// Submit event

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const formData = formValues();
  post(formData);

  orderProcess.style.display = "inline-block";

  setTimeout(() => {
    orderProcess.style.display = "none";
    Swal.fire({
      text: "Hey! Your order has been placed successfully.",
      timer: 2000,
      showConfirmButton: false,
    });
  }, 2000);

  // setTimeout(() => {
  //   window.location.href = "index.html";
  // }, 3000);
});
