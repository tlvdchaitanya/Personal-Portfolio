
// Typed.js
// const typed = new Typed("#typed-name", {
//   strings: ["👨‍💻Software Engineer", "🌐Web Developer", "💻Full Stack Developer"],
//   typeSpeed: 60,
//   backSpeed: 30,
//   loop: true
// });

new Typed("#typed-name", {
  strings: ["👨‍💻Software Engineer", "🌐Web Developer", "💻Full Stack Developer"],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true,
  cursorChar: "|" // Change to "▌" or "_" if you like
});


// Dark Mode Toggle
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Nav Toggle
document.getElementById("navToggle").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("active");
});

// Popup Modal
function openPopup(img, title, desc, link) {
  document.getElementById("popup-image").src = img;
  document.getElementById("popup-title").innerText = title;
  document.getElementById("popup-desc").innerText = desc;
  document.getElementById("popup-code-link").href = link;
  document.getElementById("project-popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("project-popup").style.display = "none";
}

// Email for people

  // Initialize EmailJS with your public key
  (function () {
    emailjs.init("8RpFTDBvP1MIrp_xD"); // 🔁 Replace this with your actual EmailJS public key
  })();
  
  // Send email on form submit
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactform"); // Make sure your form has this ID
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent page reload
  
      emailjs.sendForm("service_l7rn508", "template_q5bsqrq", this)
        .then(function () {
          alert("✅ Message sent successfully!");
          form.reset();
        }, function (error) {
          alert("❌ Failed to send message. Please try again.\n" + JSON.stringify(error));
        });
    });
  });

  // sidebar effects mobile toggle

  function toggleSidebar() {
    document.getElementById('darkSidebar').classList.toggle('active');
  }

// Nav bar effects

  // Shrink effect on scroll
  window.addEventListener("scroll", () => {
    const nav = document.getElementById("nav-ultimate");
    if (window.scrollY > 10) {
      nav.classList.add("shrink");
    } else {
      nav.classList.remove("shrink");
    }
  });

// Apple nav bar 

// Shrink navbar on scroll
window.addEventListener("scroll", () => {
  const nav = document.getElementById("appleNavbar");
  if (window.scrollY > 10) {
    nav.classList.add("shrink");
  } else {
    nav.classList.remove("shrink");
  }
});

// Hamburger toggle
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navbarLinks").classList.toggle("show");
});
