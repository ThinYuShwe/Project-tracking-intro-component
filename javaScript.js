const closeIcon = document.querySelector(".icon-close");
const hamburger = document.querySelector(".hamburger");
const dropDownBox = document.querySelector(".dropdownBox");

hamburger.addEventListener("click", () => {
  dropDownBox.style.display = "flex";
  hamburger.style.display = "none";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  closeIcon.style.display = "none";
  dropDownBox.style.display = "none";
  hamburger.style.display = "block";
});
