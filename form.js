const quantity = document.getElementById("quantity");
const customerName = document.getElementById("name");
const customerMobileNo = document.getElementById("phone");
const customerAddress = document.getElementById("address");
const submitButton = document.getElementById("submit-btn");
const orderProcess = document.getElementById("order-process");
let totalAmount = parseInt(document.getElementById("total-amount").innerHTML);

// initial values
const initialValues = {
  customerName,
  customerAddress,
  customerMobileNo,
  items: [
    {
      productName: "19 Lit",
      quantity,
      perUnitPrice: 100,
    },
  ],
};

// updating initial values
function formValues() {
  initialValues.customerName = customerName.value;
  initialValues.customerAddress = customerAddress.value;
  initialValues.customerMobileNo = customerMobileNo.value;
  initialValues.items[0].quantity = quantity.value;

  return initialValues;
}

// validations
function checkFields() {
  if (
    customerName.value.length >= 3 &&
    customerMobileNo.value.length >= 8 &&
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

// quantity calculation
function quantityCount() {
  if (quantity.value >= 0) {
    const finalAmount = quantity.value * totalAmount;
    document.getElementById("total-amount").innerHTML = finalAmount;
  }
}

quantity.addEventListener("input", () => {
  quantityCount();
});

quantity.addEventListener("input", () => {
  checkFields();
});

customerName.addEventListener("input", () => {
  checkFields();
});

customerMobileNo.addEventListener("input", () => {
  checkFields();
});

customerAddress.addEventListener("input", () => {
  checkFields();
});

async function post(data) {
  await fetch("https://app.hydrila.com/api/webstoreorders", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const res = formValues();
  post(res);

  orderProcess.style.display = "inline-block";

  setTimeout(() => {
    orderProcess.style.display = "none";
    Swal.fire({
      text: "Hey! Your order has placed successfully.",
      timer: 2000,
      showConfirmButton: false,
    });
  }, 2000);

  setTimeout(() => {
    window.location.href = "index.html";
  }, 3000);
});
