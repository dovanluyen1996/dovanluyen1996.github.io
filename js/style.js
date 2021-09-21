//Toggle Menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show_menu");
      toggle.classList.toggle("fa-times");
    });
  }
};
showMenu("icon-toggle", "nav-show");
