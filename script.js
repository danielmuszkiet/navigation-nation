const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav0 = document.getElementById("nav-0");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const navItems = [nav0, nav1, nav2, nav3, nav4];

function navAnimation(from, to) {
  navItems.forEach((item, i) => {
    item.classList.replace(`slide-${from}-${i}`, `slide-${to}-${i}`);
  });
}

function toggleNav() {
  // Toggle: Menu Bas Open/Closed
  menuBars.classList.toggle("change");
  // Toggle: Menu Active
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    // Animate In - Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
    // Animate In - Nav Items
    navAnimation("out", "in");
  } else {
    // Animate Out - Overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
    // Animate Out - Nav Items
    navAnimation("in", "out");
  }
}

// Event Listeners
menuBars.addEventListener("click", toggleNav);
navItems.forEach((item) => {
  item.addEventListener("click", toggleNav);
});
