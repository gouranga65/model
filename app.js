const btn = document
  .querySelector(".btn")
  .addEventListener("click", function () {
    hideUnhide.classList.add("open-modal");
  });
const hideUnhide = document.querySelector(".hideUnhide");
const closeBtn = document
  .querySelector(".closeBtn")
  .addEventListener("click", function () {
    hideUnhide.classList.remove("open-modal");
  });
