(() => {
  const button = document.querySelector(".menu");
  const navigation = document.querySelector(".nav");
  if (!button || !navigation) return;

  const setLabel = (label) => {
    if (button.firstChild) button.firstChild.nodeValue = label + " ";
  };

  const close = () => {
    navigation.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "Abrir menu");
    setLabel("");
    document.body.style.overflow = "";
  };

  button.addEventListener("click", () => {
    const open = navigation.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    setLabel(open ? "Fechar" : "");
    document.body.style.overflow = open ? "hidden" : "";
  });

  navigation.querySelectorAll("nav a").forEach(link => link.addEventListener("click", close));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") close();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) close();
  }, { passive: true });
})();
