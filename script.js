// Responsive header navigation
const mobileMenuButton = document.querySelector(".menu");
const mobileNav = document.querySelector(".nav");

function setMenuText(label) {
  if (mobileMenuButton?.firstChild) {
    mobileMenuButton.firstChild.nodeValue = label + " ";
  }
}

function closeMobileMenu() {
  if (!mobileNav || !mobileMenuButton) return;
  mobileNav.classList.remove("open");
  mobileMenuButton.setAttribute("aria-expanded", "false");
  mobileMenuButton.setAttribute("aria-label", "Abrir menu");
  setMenuText("Menu");
  document.body.style.overflow = "";
}

mobileMenuButton?.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  mobileMenuButton.setAttribute("aria-expanded", String(open));
  mobileMenuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  setMenuText(open ? "Fechar" : "Menu");
  document.body.style.overflow = open ? "hidden" : "";
});

mobileNav?.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMobileMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) closeMobileMenu();
}, { passive: true });
