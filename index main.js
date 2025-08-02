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



// Option Button (existing function)
function optMenu() {
  document.getElementById("opt-menu").classList.toggle("show");
}

// Toggle Language Dropdown Menu
function toggleLanguageMenu() {
  const languageMenu = document.getElementById("language-menu");
  const languageContainer = document.querySelector(".language-dropdown-container");
  
  languageMenu.classList.toggle("show");
  languageContainer.classList.toggle("active");
}

// Switch Language Function
function switchLanguage(lang) {
  // Remove active class from all options
  document.querySelectorAll('.language-option').forEach(option => {
    option.classList.remove('active');
  });
  
  // Add active class to selected option
  if (lang === 'en') {
    document.querySelector('.language-option:first-child').classList.add('active');
    // Redirect to English version or update content
    window.location.href = './index.html';
  } else if (lang === 'si') {
    document.querySelector('.language-option:last-child').classList.add('active');
    // Redirect to Sinhala version or update content
    // window.location.href = './index-si.html'; // if you have separate Sinhala page
    console.log('Switched to Sinhala');
  }
  
  // Close the dropdown
  toggleLanguageMenu();
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
  const languageContainer = document.querySelector('.language-dropdown-container');
  const languageMenu = document.getElementById('language-menu');
  
  if (!languageContainer.contains(event.target)) {
    languageMenu.classList.remove('show');
    languageContainer.classList.remove('active');
  }
});

document.addEventListener('click', function(event) {
  const languageContainer = document.querySelector('.more-container');
  const languageMenu = document.getElementById('opt-menu');
  
  if (!languageContainer.contains(event.target)) {
    languageMenu.classList.remove('show');
    languageContainer.classList.remove('active');
  }
});


// Set initial active language (call this on page load)
function setInitialLanguage() {
  // Check current page or stored preference
  const currentPath = window.location.pathname;
  
  if (currentPath.includes('index.html') || currentPath.endsWith('/')) {
    document.querySelector('.language-option:first-child').classList.add('active');
  } else if (currentPath.includes('si') || currentPath.includes('sinhala')) {
    document.querySelector('.language-option:last-child').classList.add('active');
  }
}

// Call when page loads
document.addEventListener('DOMContentLoaded', setInitialLanguage);



// # Scroll Stop
document.querySelectorAll('.prevent-hash').forEach(btn => {
  btn.addEventListener('click', function(e) {
    if (this.getAttribute('href')
    === '#') {
      e.preventDefault();
    }
  });
});


// Dark Mode
const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute(
    'data-theme',
    currentTheme === 'dark' ? 'light' : 'dark'
  );
};




// ======================================
// ======================================
// ============Update Report=============
// ======================================
// ======================================

// // Scroll to top functionality
//         const scrollToTopBtn = document.getElementById('scrollToTop');
        
//         window.addEventListener('scroll', () => {
//             if (window.pageYOffset > 300) {
//                 scrollToTopBtn.classList.add('visible');
//             } else {
//                 scrollToTopBtn.classList.remove('visible');
//             }
//         });
        
//         scrollToTopBtn.addEventListener('click', () => {
//             window.scrollTo({
//                 top: 0,
//                 behavior: 'smooth'
//             });
//         });

//         // Add animation delays to version containers
//         const versionContainers = document.querySelectorAll('.version-container');
//         versionContainers.forEach((container, index) => {
//             container.style.animationDelay = `${index * 0.2}s`;
//         });

//         // Add hover effects to feature items
//         const featureItems = document.querySelectorAll('.feature-item');
//         featureItems.forEach(item => {
//             item.addEventListener('mouseenter', () => {
//                 item.style.transform = 'translateX(10px) scale(1.02)';
//             });
            
//             item.addEventListener('mouseleave', () => {
//                 item.style.transform = 'translateX(5px) scale(1)';
//             });
//         });

//         // Animate stats on scroll
//         const observerOptions = {
//             threshold: 0.5,
//             rootMargin: '0px 0px -100px 0px'
//         };

//         const observer = new IntersectionObserver((entries) => {
//             entries.forEach(entry => {
//                 if (entry.isIntersecting) {
//                     const statNumbers = entry.target.querySelectorAll('.stat-number');
//                     statNumbers.forEach(stat => {
//                         stat.style.animation = 'countUp 2s ease-out forwards';
//                     });
//                 }
//             });
//         }, observerOptions);

//         const statsContainer = document.querySelector('.stats-container');
//         if (statsContainer) {
//             observer.observe(statsContainer);
//         }

//         // Add CSS animation for count up effect
//         const style = document.createElement('style');
//         style.textContent = `
//             @keyframes countUp {
//                 from {
//                     opacity: 0;
//                     transform: translateY(20px) scale(0.5);
//                 }
//                 to {
//                     opacity: 1;
//                     transform: translateY(0) scale(1);
//                 }
//             }
//         `;
//         document.head.appendChild(style);

// Saturate / Desaturate
const satBtn = document.getElementById("toggleSaturation");

satBtn.addEventListener("click", () => {
  const body = document.body;

  if (body.classList.contains("desaturated")) {
    body.classList.remove("desaturated");
    body.classList.add("saturated");
  } else {
    body.classList.remove("saturated");
    body.classList.add("desaturated");
  }
});