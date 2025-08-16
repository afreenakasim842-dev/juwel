
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  // Toggle menu when clicking dots
  toggle.addEventListener("click", () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  });

  // Auto-close menu when link clicked
  document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", () => {
      menu.style.display = "none";
    });
  });
});
