window.onload = function () {
  const loader = document.getElementById("loader-box");
  document.body.classList.add("no-scroll");

  setTimeout(() => {
    loader.classList.add("hide");
    setTimeout(() => {
      loader.style.display = "none";
      document.body.classList.remove("no-scroll");
    }, 1000);
  }, 3000);
};
