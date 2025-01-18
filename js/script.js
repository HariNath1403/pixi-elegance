// Hide Reviews Page -- Postponed Task
const feedbackPage = document.getElementById("Feedback");
const hideDisplay = document.querySelectorAll(".hide-display");

hideDisplay.forEach((el) => (el.style.display = "none"));

// Logo Animation
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.getElementById("home-logo");
  if (logo) {
    // Trigger animation after the page has loaded
    setTimeout(() => {
      logo.classList.add("animate");
    }, 200); // Slight delay for effect
  }
});

// Expertise animation
const expertiseSection = document.querySelector("#expertise");
const expertiseItems = document.querySelectorAll(".expertise__list--index");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        expertiseItems.forEach((item, index) => {
          item.style.animation = `slideInFromRight 0.5s ease-out forwards`;
          item.style.animationDelay = `${index * 0.2}s`;
        });
      }
    });
  },
  { threshold: 0.1 }
);

observer.observe(expertiseSection);

// Video scrolling Effect
const videoBox = document.getElementById("video");
const video = document.querySelector(".video__box--video");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const direction = scrollTop > lastScrollTop ? 1 : -1; // 1 for down, -1 for up

  // Adjust the speed multiplier as needed
  const speed = 0.075;
  // const speed = 0.1;

  // Update video currentTime based on scroll direction
  video.currentTime += speed * direction;

  // Prevent video from going out of bounds
  if (video.currentTime < 0) video.currentTime = 0;
  if (video.currentTime > video.duration) video.currentTime = video.duration;

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
});

// Parallax Scrolling
const customPage = document.getElementById("custom");
const parallaxBar = document.getElementById("parallaxBar");
const tableCells = document.querySelectorAll(
  ".custom__table td, .custom__table th"
);
const footer = document.getElementById("footer");

const bufferSpace = 450; // Space before the footer where the bar should disappear

window.addEventListener("scroll", function () {
  const customRect = customPage.getBoundingClientRect();
  const footerRect = footer.getBoundingClientRect();

  const scrollY = window.scrollY - customPage.offsetTop;

  // Check if the bar is within the custom section and not near the footer
  if (
    customRect.top < window.innerHeight &&
    customRect.bottom > 0 &&
    footerRect.top > window.innerHeight - bufferSpace
  ) {
    parallaxBar.style.opacity = "1";
    parallaxBar.style.transform = `translateY(${
      scrollY * 0.3
    }px) rotate(-7.5deg)`;

    // Check overlap with table cells
    const barRect = parallaxBar.getBoundingClientRect();

    tableCells.forEach((cell) => {
      const cellRect = cell.getBoundingClientRect();
      const isOverlapping =
        barRect.bottom > cellRect.top && barRect.top < cellRect.bottom;

      if (isOverlapping) {
        cell.classList.add("under-bar");
      } else {
        cell.classList.remove("under-bar");
      }
    });
  } else if (footerRect.top <= window.innerHeight - bufferSpace) {
    // Animate the bar downwards when reaching the footer
    parallaxBar.style.opacity = "0";
    parallaxBar.style.transform = `translateY(${
      scrollY * 0.3 + 100
    }px) rotate(-7.5deg)`; // Slide down
  } else {
    // Animate the bar upwards when scrolling above the custom section
    parallaxBar.style.opacity = "0";
    parallaxBar.style.transform = `translateY(${
      scrollY * 0.3 - 100
    }px) rotate(-7.5deg)`; // Slide up
  }
});

// Navigation
const navBtn = document.getElementById("navBtn");
const navPage = document.getElementById("navPage");
const navLinks = document.querySelectorAll(".nav-page__list a");
const body = document.body;

const toggleNav = () => {
  navBtn.classList.toggle("is-active");
  navPage.classList.toggle("is-active");

  // Disable/enable scrolling on body
  if (navPage.classList.contains("is-active")) {
    body.classList.add("no-scroll");
  } else {
    body.classList.remove("no-scroll");
  }
};

// Event listener for the button click
navBtn.addEventListener("click", toggleNav);

// Event listener for each link click
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Close the navigation and re-enable scrolling
    if (navPage.classList.contains("is-active")) {
      toggleNav();
    }
  });
});

// Whatsapp Icon
window.addEventListener("scroll", function () {
  const whatsappButton = document.querySelector(".whatsapp");
  const homeSection = document.getElementById("home");

  const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
  const scrollPosition = window.scrollY + window.innerHeight;

  if (scrollPosition > homeBottom) {
    whatsappButton.classList.add("show");
  } else {
    whatsappButton.classList.remove("show");
  }
});

// Load Page - Spinner
window.addEventListener("load", function () {
  const loadingOverlay = document.getElementById("loading-overlay");
  loadingOverlay.classList.add("hidden");
});
