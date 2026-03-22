document.addEventListener("DOMContentLoaded", () => {
  // Spotlight effect on cards
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--y", `${e.clientY - rect.top}px`);
    });
  });

  // Scroll to contact section
  const contactBtn = document.querySelector(".contact-btn");
  const contactTarget = document.querySelector(".contact-section");

  if (contactBtn && contactTarget) {
    contactBtn.addEventListener("click", () => {
      contactTarget.scrollIntoView({ behavior: "smooth" });
    });
  }
});
