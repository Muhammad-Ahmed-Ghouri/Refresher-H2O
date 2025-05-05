window.onload = function () {
  if (window.location.pathname === "/index.html") {
    const loader = document.getElementById("loader-box");
    document.body.classList.add("no-scroll");

    setTimeout(() => {
      loader.classList.add("hide");
      setTimeout(() => {
        loader.style.display = "none";
        document.body.classList.remove("no-scroll");
      }, 1000);
    }, 3000);
  }
};

const quantity = document.getElementById("quantity");
const unitPrice = parseInt(document.getElementById("total-amount").innerHTML);
function quantityCount() {
  const quantity = document.getElementById("quantity").value;
  if (quantity >= 0) {
    let finalAmount = "";
    finalAmount = quantity * unitPrice;
    document.getElementById("total-amount").innerHTML = finalAmount;
  }
}

quantity.addEventListener("input", () => {
  quantityCount();
});

const submitButton = document.getElementById("submit-btn");
const arrayOfProductDetails = [
  {
    customerName: "",
    customerAddress: "",
    customerMobileNo: "",
  },
  {
    productName: "19 Lit",
    quantity: 1,
    perUnitPrice: 100,
  },
];

const customerName = document.getElementById("name");
const customerMobileNo = document.getElementById("phone");
const customerAddress = document.getElementById("address");

function checkFields() {
  if (
    customerName.value.length >= 3 &&
    customerMobileNo.value.length >= 8 &&
    customerAddress.value.length >= 10 &&
    quantity.value > 0
  ) {
    submitButton.disabled = false;
    submitButton.style.backgroundColor = "#f16320";
    submitButton.style.cursor = "pointer";
  } else {
    submitButton.disabled = true;
    submitButton.style.backgroundColor = "rgb(203, 199, 199)";
  }
}

function arrayOfInformation() {
  arrayOfProductDetails[0].customerName = customerName.value;
  arrayOfProductDetails[0].customerAddress = customerAddress.value;
  arrayOfProductDetails[0].customerMobileNo = customerMobileNo.value;
  arrayOfProductDetails[1].quantity = quantity.value;
  console.log(arrayOfProductDetails);
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  arrayOfInformation();
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
