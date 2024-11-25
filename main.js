/*~~~~~~~~~~~~~~~ TOGGLE MENU ~~~~~~~~~~~~~~~*/
const header = document.getElementById("header");
const navMenu = document.getElementById("nav-menu");
const openMenuBtn = document.getElementById("open-menu");
const closeMenuBtn = document.getElementById("close-menu");
const navLinks = document.querySelectorAll(".nav-link");

function openMenu() {
  navMenu.classList.remove("-translate-x-full");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  navMenu.classList.add("-translate-x-full");
  document.body.style.overflow = "auto";
}

openMenuBtn.addEventListener("click", openMenu);
closeMenuBtn.addEventListener("click", closeMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 768) closeMenu();
  });
});

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
window.addEventListener("scroll", () => {
  header.classList.toggle("bg-primaryColor shadow-md", window.scrollY > 50);
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    closeMenu();
    document.body.style.overflow = "auto";
  }
});

/*~~~~~~~~~~~~~~~ MENU TABS ~~~~~~~~~~~~~~~*/
const menuTabs = document.querySelectorAll(".menu__tab");
const menuItems = document.querySelectorAll(".menu__item");

const filterMenuItems = (category) => {
  menuItems.forEach((item) => {
    const itemCategory = item.dataset.category;
    item.style.display =
      category === "all" || itemCategory === category ? "block" : "none";
  });
};

menuTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelector(".menu__tab.active").classList.remove("active");
    tab.classList.add("active");
    filterMenuItems(tab.dataset.name);
  });
});

/*~~~~~~~~~~~~~~~ REVIEW SLIDER ~~~~~~~~~~~~~~~*/
const reviewSwiper = new Swiper(".swiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }
});

/*~~~~~~~~~~~~~~~ DARK/LIGHT THEME ~~~~~~~~~~~~~~~*/
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Check for saved theme preference or system preference
const darkMode =
  localStorage.getItem("darkMode") ||
  window.matchMedia("(prefers-color-scheme: dark)").matches;

if (darkMode) html.classList.add("dark");

themeToggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  localStorage.setItem("darkMode", html.classList.contains("dark"));

  const icon = themeToggle.querySelector("svg path");
  icon.setAttribute(
    "d",
    html.classList.contains("dark")
      ? "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      : "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
  );
});

/*~~~~~~~~~~~~~~~ SCROLL TO TOP ~~~~~~~~~~~~~~~*/
const scrollTop = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  scrollTop.style.opacity = window.scrollY > 300 ? "1" : "0";
});

scrollTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 60;
    const sectionId = section.getAttribute("id");
    const navLink = document.querySelector(`.nav-link[href*='${sectionId}']`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add("text-secondaryColor");
    } else {
      navLink?.classList.remove("text-secondaryColor");
    }
  });
});

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400
});

sr.reveal(".home__image");
sr.reveal(".home__content", { origin: "bottom" });
sr.reveal(".category__card", { interval: 300 });
sr.reveal(".promo__card", { interval: 300 });
sr.reveal(".about__img", { origin: "left" });
sr.reveal(".about__content", { origin: "bottom" });
sr.reveal(".menu__items", { origin: "left" });
sr.reveal(".customer__review", { origin: "top" });
sr.reveal(".footer__content", { interval: 300 });
