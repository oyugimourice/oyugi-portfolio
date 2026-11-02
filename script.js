// Theme toggle (dark by default, light when chosen or preferred by the OS)
const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

function syncThemeToggle() {
  const isLight = root.classList.contains("light-mode");
  themeIcon.className = isLight ? "bx bx-moon" : "bx bx-sun";
  themeToggle.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
}
syncThemeToggle();

themeToggle.onclick = function () {
  const isLight = root.classList.toggle("light-mode");
  localStorage.setItem("theme", isLight ? "light" : "dark");
  syncThemeToggle();
};

// Mobile menu
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

function closeMenu() {
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
  menuIcon.setAttribute("aria-expanded", "false");
}

menuIcon.onclick = () => {
  const open = navbar.classList.toggle("active");
  menuIcon.classList.toggle("bx-x", open);
  menuIcon.setAttribute("aria-expanded", String(open));
};

navbar.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

// Highlight the nav link for the section currently on screen
let navLinks = document.querySelectorAll("header nav a");
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
      });
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
document.querySelectorAll("section[id]").forEach((sec) => sectionObserver.observe(sec));

// Sticky header background
let header = document.querySelector("header");
window.addEventListener(
  "scroll",
  () => {
    header.classList.toggle("sticky", window.scrollY > 100);
    if (navbar.classList.contains("active")) closeMenu();
  },
  { passive: true }
);

// ===================================================================

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduceMotion) {
  document.querySelector(".multiple-text").textContent = "Software Engineer";
} else {
  new Typed(".multiple-text", {
    strings: ["Software Engineer", "Frontend Developer", "Backend Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
  });
}

// ===================================================================

if (!reduceMotion) {
  ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal(".heading, .home-content h1, .home-sci, .about-content p", { origin: "top" });
  ScrollReveal().reveal(".about-img, .contact, .textarea-field", {
    origin: "bottom",
  });
  ScrollReveal().reveal(
    ".btn-box, .text-animate, .about-content h3, .skills-list li, .portfolio-box, .input-box, .btn-readmore",
    { origin: "left" }
  );
  ScrollReveal().reveal(".logo, .home-content p, .title", { origin: "right" });
}

// Contact form (Netlify Forms)
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  formStatus.className = "form-status";
  formStatus.textContent = "Sending…";

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(new FormData(contactForm)).toString(),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Request failed: " + response.status);
      formStatus.classList.add("success");
      formStatus.textContent = "Message sent successfully! I'll get back to you soon.";
      contactForm.reset();
    })
    .catch((error) => {
      formStatus.classList.add("error");
      formStatus.textContent = "Oops! Something went wrong. Please try again or reach me on LinkedIn.";
      console.error(error);
    })
    .finally(() => {
      submitBtn.disabled = false;
    });
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

function toggleContent() {
  const content = document.getElementById("expandableContent");
  const btn = document.querySelector(".btn-readmore");
  const open = content.style.display !== "grid";
  content.style.display = open ? "grid" : "none";
  btn.textContent = open ? "Show Less" : "Read More";
  btn.setAttribute("aria-expanded", String(open));
}

function toggleSection(button) {
  const section = button.parentElement;
  const items = section.querySelectorAll(".hidden-items");
  const open = button.getAttribute("aria-expanded") !== "true";

  items.forEach((item) => {
    item.style.display = open ? "block" : "none";
  });

  button.setAttribute("aria-expanded", String(open));
  button.innerHTML = open
    ? 'Show Less <i class="fas fa-chevron-up"></i>'
    : 'Show All <i class="fas fa-chevron-down"></i>';
}
