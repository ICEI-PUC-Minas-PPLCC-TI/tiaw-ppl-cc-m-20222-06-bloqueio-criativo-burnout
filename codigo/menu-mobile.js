const menuMobile = document.querySelector(".menu-mobile");
const abreMenu = document.querySelector(".abre-btn");
const fechaMenu = document.querySelector(".fecha-btn");
abreMenu.addEventListener("click", () => {
  menuMobile.classList.add("visible");
  fechaMenu.classList.add("visible");
  abreMenu.style.display = "none";
});
fechaMenu.addEventListener("click", (e) => {
  menuMobile.classList.remove("visible");
  fechaMenu.classList.remove("visible");
  abreMenu.style.display = "flex";
});
