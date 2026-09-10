// MOVEZA UI interactions

const mobileMenuButton = document.querySelector(".menu");
const mobileNav = document.querySelector(".nav");

function closeMobileMenu() {
  mobileNav?.classList.remove("open");
  mobileMenuButton?.setAttribute("aria-expanded", "false");
  mobileMenuButton?.setAttribute("aria-label", "Abrir menu");
  document.body.style.overflow = "";
}

mobileMenuButton?.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  mobileMenuButton.setAttribute("aria-expanded", String(open));
  mobileMenuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
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
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


// Soft parallax for hero
const heroImage = document.querySelector(".hero-img");

window.addEventListener(
  "scroll",
  () => {
    if (!heroImage) return;

    const scroll = window.scrollY;

    if (scroll < window.innerHeight) {
      heroImage.style.transform =
        `scale(1.015) translateY(${scroll * 0.06}px)`;
    }
  },
  { passive: true }
);


// Smooth internal navigation
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});


// Header transparency response
const headerNav = document.querySelector(".nav");

window.addEventListener(
  "scroll",
  () => {
    if (!headerNav) return;

    if (window.scrollY > 100) {
      headerNav.style.background = "rgba(255,255,255,.86)";
    } else {
      headerNav.style.background = "rgba(255,255,255,.72)";
    }
  },
  { passive: true }
);


// Demo form handling
const form = document.querySelector("#form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const button = form.querySelector("button");

  const previousText = button.textContent;

  button.textContent = "Pedido enviado ✓";
  button.disabled = true;

  setTimeout(() => {
    button.textContent = previousText;
    button.disabled = false;
    form.reset();
  }, 3000);
});
