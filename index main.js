// main.js
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");

      if (navLinks.classList.contains("active")) {
        mobileMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
      } else {
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
  }

  // Smooth scrolling for navigation links
  const navScrollLinks = document.querySelectorAll('a[href^="#"]');

  navScrollLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");

      if (targetId !== "#") {
        e.preventDefault();

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          // Close mobile menu if open
          if (navLinks && navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
          }

          // Scroll to the target element
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Accounting for fixed header
            behavior: "smooth",
          });
        }
      }
    });
  });


  // Events & Programs
  function startSlider(containerSelector) {
    const container = document.querySelector(containerSelector);
    const images = container.querySelectorAll("img");
    let current = 0;

    images[current].classList.add("active");

    setInterval(() => {
      images[current].classList.remove("active");
      current = (current + 1) % images.length;
      images[current].classList.add("active");
    }, 7000);
  }

  window.onload = () => {
    startSlider(".special");
    startSlider(".educational");
    startSlider(".sports");
  };

  // Audio player functionality
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  const stopBtn = document.getElementById("stopBtn");

  // Create an audio element
  const audioElement = new Audio("");

  if (playBtn && pauseBtn && stopBtn) {
    playBtn.addEventListener("click", function () {
      audioElement.play();
    });

    pauseBtn.addEventListener("click", function () {
      audioElement.pause();
    });

    stopBtn.addEventListener("click", function () {
      audioElement.pause();
      audioElement.currentTime = 0;
    });
  }

  // Alert functionality
  function showAlert() {
    document.getElementById("alertBox").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  }

  function closeAlert() {
    document.getElementById("alertBox").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }

  // Close alert when clicking outside
  document.getElementById("overlay").addEventListener("click", closeAlert);
});

// Function to format Sri Lanka time
function formatDateTimeSriLanka() {
  const now = new Date();
  const sriLankaOffset = 5.5 * 60; // minutes
  const sriLankaTime = new Date(now.getTime() + sriLankaOffset * 60000);

  const day = sriLankaTime.getUTCDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[sriLankaTime.getUTCMonth()];
  const year = sriLankaTime.getUTCFullYear();

  const hours = String(sriLankaTime.getUTCHours()).padStart(2, "0");
  const minutes = String(sriLankaTime.getUTCMinutes()).padStart(2, "0");

  return `${day} ${month} ${year} | ${hours}:${minutes}`;
}

// New Event Card
function addEventCard(
  title = "Sample Title",
  description = "Event description goes here.",
  imageUrl = ""
) {
  const container = document.querySelector("#events-container"); // parent element
  const timestamp = formatDateTimeSriLanka();

  const card = document.createElement("li");
  card.innerHTML = `
    <div class="event-card">
      <div class="img" style="background-image: url('${imageUrl}');"></div>
      <h3>${title}</h3>
      <p class="description">${description}</p>
      <div class="option">
        <i class="fa-regular fa-share-from-square"></i>
        <i class="fa-regular fa-heart"></i>
        <i class="fa-regular fa-comment"></i>
      </div>
      <p class="tnd">${timestamp}</p>
    </div>
  `;

  container.appendChild(card);
  // 🔁 Reapply behavior to new elements
  setupIconClicks();
}

addEventCard(
  "New Event 2",
  "Details about this awesome event 2.",
  "./link.jpg" // your image URL here
);

addEventCard(
  "Website Launch",
  "WP/ Hr/ Polegoda M.V. - Official Website.",
  "E:/Scl Project solo/New/webhero-01.jpg"
);

// Icon change
function setupIconClicks() {
  const allOptionGroups = document.querySelectorAll(".option");

  allOptionGroups.forEach((optionGroup) => {
    const icons = optionGroup.querySelectorAll("i");

    icons.forEach((icon) => {
      icon.addEventListener("click", () => {
        icons.forEach((i) => {
          i.classList.remove("fa-solid");
          i.classList.add("fa-regular");
        });
        icon.classList.remove("fa-regular");
        icon.classList.add("fa-solid");
      });
    });
  });
}
