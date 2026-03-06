let dark = document.getElementById("DarkMode");
dark.onclick = function () {
  document.body.classList.toggle("dark-mode");
};

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// ===================================================================

const typed = new Typed(".multiple-text", {
  strings: ["Software Engineer", "Frontend Developer", "Backend Developer", "Web designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// ===================================================================

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(
  ".heading, .home-content h1, .home-sci, .about-content p, .progress i, .progress span ",
  { origin: "top" }
);
ScrollReveal().reveal(".about-img, .contact, .textarea-field", {
  origin: "bottom",
});
ScrollReveal().reveal(
  ".btn-box, .text-animate, .about-content h3, .progress h3, .bar span, .portfolio-box, .input-box, .btn-readmore",
  { origin: "left" }
);
ScrollReveal().reveal(".logo, .home-content p, .title", { origin: "right" });

// Initialize EmailJS
(function() {
  emailjs.init("eM2mO7s0WlBN_kuoc"); // Replace with your EmailJS User ID(public key)
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload/prevent the default form submission

  // Collect form data
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  // send email using EmailJS
  emailjs.send("service_2l2sler","template_d6q7w68",{
    name: name,
    email: email,
    mobile: mobile,
    subject: subject,
    message: message
  })
  .then(() => {
    alert("Message sent successfully! 📩");
    document.getElementById("contact-form").reset(); // Clear form after submission
  }, (error) => {
    alert("Oops! Something went wrong. ❌");
    console.error(error);
    });
});

function toggleContent(e) {
  e.preventDefault();
  const content = document.getElementById('expandableContent');
  const btn = document.querySelector('.btn-readmore');
  content.style.display = content.style.display === 'grid' ? 'none' : 'grid';
  btn.textContent = content.style.display === 'grid' ? 'Show Less' : 'Read More';
}

function toggleSection(button) {
  const section = button.parentElement;
  const items = section.querySelectorAll('.hidden-items');
  const icon = button.querySelector('i');
  
  items.forEach(item => {
      item.style.display = item.style.display === 'block' ? 'none' : 'block';
  });
  
  icon.style.transform = icon.style.transform === 'rotate(180deg)' 
      ? 'rotate(0deg)' 
      : 'rotate(180deg)';
  
  button.textContent = button.textContent.includes('Show All') 
      ? 'Show Less' 
      : 'Show All';
}
