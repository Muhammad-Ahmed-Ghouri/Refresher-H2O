window.onload = function () {
  const loader = document.getElementById("loader-box");

  setTimeout(() => {
    loader.classList.add("hide");
    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }, 3000);
};
