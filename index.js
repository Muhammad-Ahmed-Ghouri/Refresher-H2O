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
