const toggle = document.querySelector("[data-nav-toggle]");

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-open");
  });
}

for (const link of document.querySelectorAll(".sidebar-link")) {
  link.addEventListener("click", () => {
    document.body.classList.remove("sidebar-open");
  });
}

