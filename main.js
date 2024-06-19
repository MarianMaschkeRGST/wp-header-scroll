const header = document.querySelector("header");
const nav = document.querySelector("nav");

// Scroll listener
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
    menuBtn.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    menuBtn.classList.remove("scrolled");
  }
});
