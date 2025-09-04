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

window.addEventListener("resize", () => {
  const minWidth = 75 * parseFloat(getComputedStyle(document.documentElement).fontSize); 
  // 75rem converted to px

  if (window.innerWidth >= minWidth) {
    dropDownBox.style.display = "none";
    hamburger.style.display = "none";
    closeIcon.style.display = "none";
  }
});
