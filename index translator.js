// Language Changer Functions
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

// Switch Language Function - Fixed version
function switchLanguage(lang) {
  // Remove active class from all options
  document.querySelectorAll('.language-option').forEach(option => {
    option.classList.remove('active');
  });
  
  // Add active class to selected option and apply translations
  if (lang === 'en') {
    document.querySelector('.language-option:first-child').classList.add('active');
    applyEnglishTranslations();
    localStorage.setItem('selectedLanguage', 'en');
  } else if (lang === 'si') {
    document.querySelector('.language-option:last-child').classList.add('active');
    applySinhalaTranslations();
    localStorage.setItem('selectedLanguage', 'si');
  }
  
  // Close the dropdown
  toggleLanguageMenu();
}

// Apply English translations (fixed version of your incomplete function)
function applyEnglishTranslations() {
  // Logo Text
  document.getElementById('logo-text').textContent = "WP/ Hr/ Polegoda M. V.";
  document.getElementById('logo-motto').textContent = "Vidya Dadathi Vinayan";

  // Navigation
  document.getElementById('home-nav').textContent = "Home";
  document.getElementById('mv-nav').textContent = "Mission & Vision";
  document.getElementById('principal-nav').textContent = "Principal";
  document.getElementById('teachers-nav').textContent = "Teachers";
  document.getElementById('history-nav').textContent = "History";
  document.getElementById('programs-nav').textContent = "Programs";
  document.getElementById('office-nav').textContent = "Office Hours";
  document.getElementById('contact-nav').textContent = "Contact";
  document.getElementById('auth-nav').textContent = "Login";

  // More Options
  document.getElementById('more-lang').textContent = "Change Language";
  document.getElementById('more-user').textContent = "User Profile";
  document.getElementById('more-donate').textContent = "Donate";
  document.getElementById('more-theme').textContent = "About Theme of Header";
  document.getElementById('more-dark').textContent = "Dark Mode";
  document.getElementById('more-feed').textContent = "Feedback";
  document.getElementById('lang-code-en').textContent = "EN";
  document.getElementById('lang-code-si').textContent = "SI";


  // Hero Section
  document.getElementById('hero-title').textContent = "WP /Hr /Polegoda Maha Vidyalaya";
  document.getElementById('hero-subtitle').textContent = "Vidya Dadathi Vinayan";

  // Marquee Section
  document.getElementById('marquee-text').textContent = "WP /Hr /Polegoda M. V.";
  document.getElementById('marquee-text2').textContent = "Official Website..";
  document.getElementById('marquee-text3').textContent = "Powered by:";
  document.getElementById('marquee-text4').textContent = "Media Unit of Polegoda M. V. (PMVMU)";

  // Mission-Vision Section
  document.getElementById('mv-section-title').textContent = "Mission & Vision";
  document.getElementById('mv-titlem').textContent = "Mission";
  document.getElementById('mv-textm').textContent = "It is our mission to raise a noble generation of children who are wise, spiritual, and capable of standing on their own.";
  document.getElementById('mv-titlev').textContent = "Vision";
  document.getElementById('mv-textv').textContent = "A quality child through good management..";

  // Principal Section
  document.getElementById('principal-section-title').textContent = "Principal's Message";
  document.getElementById('principal-name').textContent = "Mrs. W.D.D.M.Premathilaka";
  document.getElementById('principal-message').textContent = "It is with great pleasure that I welcome you to the PW/ Hr/ Polegoda M. V. website. Our school is committed to providing a supportive and enriching environment where students can achieve their full potential. We believe in nurturing not just academic excellence, but also character, creativity, and social responsibility.";
  document.getElementById('principal-message-2').textContent = "Our dedicated team of teachers and staff work tirelessly to ensure that each student receives the guidance and support they need to succeed. We pride ourselves on our strong partnership with parents and the wider community, as we believe that education is a collaborative process.";
  document.getElementById('principal-quote').textContent = '"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela';

  // Teachers Section
  document.getElementById('teachers-section-title').textContent = "Deputy Principals";
  document.getElementById('view-all-teachers-btn').textContent = "View All Teachers";

  // Apply translations to deputy principals
  const teacherInfoElements = document.querySelectorAll('.teacher-info');
  if (teacherInfoElements.length >= 1) {
    const englishDeputyPrincipals = [
      {
        name: "Mr. Ruwan P. Kumara",
        role: "Deputy Principal - Academics"
      },
      {
        name: "Mrs. Dushanthi Duleeka",
        role: "Deputy Principal - Administration"
      }
    ];

    for (let i = 0; i < Math.min(teacherInfoElements.length, englishDeputyPrincipals.length); i++) {
      const teacherInfo = teacherInfoElements[i];
      const h3 = teacherInfo.querySelector('h3');
      const p = teacherInfo.querySelector('p');

      if (h3) h3.textContent = englishDeputyPrincipals[i].name;
      if (p) p.textContent = englishDeputyPrincipals[i].role;
    }
  }

  // History Section
  document.getElementById('history-section-title').textContent = "Our History";
  document.getElementById('history-excerpt').textContent = "According to the existing records of Polegoda Maha Vidyalaya, Polegoda Maha Vidyalaya was established in 1926. At the time of its establishment, there were eight students and three teachers, and the founding principal was Mr. P. C. M. Kularatne. He served as the principal for a long time. The founding student was Mr. Somapala Kularatne, P. C. M. Kularatne's son.";
  document.getElementById('history-excerpt-2').textContent = "It is mentioned in the book that our school was initially located in a house in the Kurunduwatte area and was brought to the current school site in 1929. Old records state that in 1929, a Sanghagatha Dakshina was established at the current Polegoda Maha Vidyalaya site, after which the school was started. Initially, three coconut frond sheds were used for teaching.";
  document.getElementById('read-more-history-btn').textContent = "Read More";
  document.getElementById('listen-history-title').textContent = "Listen to Our History";

  // Programs & Events Section
  document.getElementById('programs-section-title').textContent = "Events & Programs";
  document.getElementById('event-title-special').textContent = "Special";
  document.getElementById('event-title-educational').textContent = "Eduacational";
  document.getElementById('event-title-sports').textContent = "Sports";
  document.getElementById('event-btn').textContent = "View All";


  // Office Hours Section
  document.getElementById('office-hours-title').textContent = "Office Hours";
  document.getElementById('office-services-title1').textContent = "Administrative Services";
  document.getElementById('office-services-title2').textContent = "To Meet the Principal";
  document.getElementById('office-services-title3').textContent = "Issuance of Certificates";
  
  // Days
  document.getElementById('monday').textContent = "Monday";
  document.getElementById('tuesday').textContent = "Tuesday";
  document.getElementById('wednesday').textContent = "Wednesday";
  document.getElementById('thursday').textContent = "Thursday";
  document.getElementById('friday').textContent = "Friday";
  document.getElementById('weekend').textContent = "Weekends & Holidays";
  document.getElementById('monwed').textContent = "Monday & Wednesday";
  document.getElementById('monthu').textContent = "Monday & Thursday";
  
  // Times
  document.getElementById('monwed-time').textContent = "12:30 PM - 2:30 PM";
  document.getElementById('monthu-time').textContent = "12:30 PM - 1:30 PM";

  // Update office hours times
  const timeElements = document.querySelectorAll('.hours-list li .time');
  if (timeElements.length >= 6) {
    for (let i = 0; i < 5; i++) { // Monday to Friday
      timeElements[i].textContent = "7:30 AM - 1:30 PM";
    }
    timeElements[5].textContent = "Closed"; // Weekend
  }

  // Footer Section
  document.getElementById('contact-us-title').textContent = "Contact Us";
  document.getElementById('address').textContent = "Ihala Welgama rd, Polegoda, Mahagama";
  document.getElementById('phone').textContent = "+94 34 224 4063";
  document.getElementById('email').textContent = "info@polegodamv.edu.lk";
  document.getElementById('project').textContent = "About the Project";
  document.getElementById('quick-links-title').textContent = "Quick Links";
  document.getElementById('home-link').textContent = "Home";
  document.getElementById('faculty-link').textContent = "Teachers";
  document.getElementById('events-link').textContent = "Events";
  document.getElementById('full-history-link').textContent = "Full History";
  document.getElementById('connect-title').textContent = "Connect With Us";
  document.getElementById('copyright-text').textContent = "© 2025 WP/ Hr/ Polegoda M. V. All Rights Reserved.";
  document.getElementById('power').textContent = "Powered by";
  document.getElementById('PMVMU').textContent = "Media Unit of Polegoda M. V.";
}

// Apply Sinhala translations (your existing function works, just make sure it's accessible)
function applySinhalaTranslations() {
  // Logo Text
  document.getElementById('logo-text').textContent = "බප/හො/පොලේගොඩ ම.වි.";
  document.getElementById('logo-motto').textContent = "විද්‍යා දදාති විනයං";

  // Navigation
  document.getElementById('home-nav').textContent = "මුල් පිටුව";
  document.getElementById('mv-nav').textContent = "මෙහෙවර හා දැක්ම";
  document.getElementById('principal-nav').textContent = "විදුහල්පති";
  document.getElementById('teachers-nav').textContent = "ගුරුවරු";
  document.getElementById('history-nav').textContent = "ඉතිහාසය";
  document.getElementById('programs-nav').textContent = "වැඩසටහන්";
  document.getElementById('office-nav').textContent = "කාර්යාල වේලාවන්";
  document.getElementById('contact-nav').textContent = "සම්බන්ධ වන්න";
  document.getElementById('auth-nav').textContent = "පිවිසෙන්න";

  // More Options
  document.getElementById('more-lang').textContent = "භාෂාව වෙනස් කරන්න";
  document.getElementById('more-user').textContent = "පරිශීලක පැතිකඩ";
  document.getElementById('more-donate').textContent = "පරිත්‍යාග";
  document.getElementById('more-theme').textContent = "තේමාව ගැන";
  document.getElementById('more-dark').textContent = "අඳුරු මුහුණත";
  document.getElementById('more-feed').textContent = "ප්‍රතිපෝෂණ";
  document.getElementById('lang-code-en').textContent = "ඉං";
  document.getElementById('lang-code-si').textContent = "සිං";

  // Hero Section
  document.getElementById('hero-title').textContent = "බප/හො/පොලේගොඩ ම. වි.";
  document.getElementById('hero-subtitle').textContent = "විද්‍යා දදාති විනයං";

  // Marquee Section
  document.getElementById('marquee-text').textContent = "බප/ හො/ පොලේගොඩ මහා විද්‍යාලය";
  document.getElementById('marquee-text2').textContent = "නිල වෙබ් අඩවිය..";
  document.getElementById('marquee-text3').textContent = "බලගැන්වීම : ";
  document.getElementById('marquee-text4').textContent = "පොලේගොඩ මහා විද්‍යාලයීය මාධ්‍ය ඒකකය";

  // Mission-Vision Section
  document.getElementById('mv-section-title').textContent = "මෙහෙවර හා දැක්ම";
  document.getElementById('mv-titlem').textContent = "අපගේ මෙහෙවර";
  document.getElementById('mv-textm').textContent = "නැණ නුවණින් යුත්, ආධ්‍යාත්මයෙන් පිරිපුන්, ස්ව ශක්තියෙන් නැගීසිටිය හැකි උදාර දරු පරපුරක් බිහිනිරීම අපගේ යුග මෙහෙවරයි.";
  document.getElementById('mv-titlev').textContent = "අපගේ දැක්ම";
  document.getElementById('mv-textv').textContent = "යහපත් කළමනාකරණය තුළින් ගුණාත්මක දරුවෙක්..";

  // Principal Section
  document.getElementById('principal-section-title').textContent = "විදුහල්පතිතුමියගේ පණිවිඩය";
  document.getElementById('principal-name').textContent = "ඩබ්.ඩී.ඩී.එම්.ප්‍රේමතිලක මිය";
  document.getElementById('principal-message').textContent = "බප/ හො/ පොලේගොඩ මහා විද්‍යාලයේ වෙබ් අඩවියට ඔබව සාදරයෙන් පිළිගැනීමට ලැබීම මහත් සතුටකි. අපගේ පාසල සිසුන්ට ඔවුන්ගේ පූර්ණ විභවතාවයන් ළඟා කර ගත හැකි සහායක හා පොහොසත් පරිසරයක් සැපයීමට කැපවී සිටී. අපි අධ්‍යාපනික විශිෂ්ටත්වය පමණක් නොව, චරිතය, නිර්මාණශීලීත්වය සහ සමාජ වගකීම ද පෝෂණය කිරීමට විශ්වාස කරමු.";
  document.getElementById('principal-message-2').textContent = "අපගේ කැපවූ ගුරුවරුන් හා කාර්ය මණ්ඩලය සෑම සිසුවෙකුටම ඔවුන්ට සාර්ථක වීමට අවශ්‍ය මඟ පෙන්වීම හා සහාය ලැබෙන බවට සහතික කිරීම සඳහා නොපසුබට වෙහෙසක් දරයි. අධ්‍යාපනය සහයෝගීතා ක්‍රියාවලියක් බව අප විශ්වාස කරන බැවින් දෙමාපියන් සහ පුළුල් ප්‍රජාව සමඟ අපගේ ශක්තිමත් හවුල්කාරිත්වය ගැන අපි ආඩම්බර වෙමු.";
  document.getElementById('principal-quote').textContent = '"අධ්‍යාපනය යනු ලෝකය වෙනස් කිරීමට ඔබට භාවිතා කළ හැකි බලවත්ම ආයුධයයි." - නෙල්සන් මැන්ඩෙලා';

  // Teachers Section
  document.getElementById('teachers-section-title').textContent = "නියෝජ්‍ය විදුහල්පතිවරුන්";
  document.getElementById('view-all-teachers-btn').textContent = "සියලුම ගුරුවරුන් බලන්න";

  // Apply translations to deputy principals
  const teacherInfoElements = document.querySelectorAll('.teacher-info');
  if (teacherInfoElements.length >= 1) {
    const sinhalaDeputyPrincipals = [
      {
        name: "රුවන් පී. කුමාර මයා",
        role: "නියෝජ්‍ය විදුහල්පති - අධ්‍යාපන සංවර්ධන"
      },
      {
        name: "දුශාන්ති දුලීකා මිය",
        role: "නියෝජ්‍ය විදුහල්පති - අධ්‍යාපන පරිපාලන"
      }
    ];

    for (let i = 0; i < Math.min(teacherInfoElements.length, sinhalaDeputyPrincipals.length); i++) {
      const teacherInfo = teacherInfoElements[i];
      const h3 = teacherInfo.querySelector('h3');
      const p = teacherInfo.querySelector('p');

      if (h3) h3.textContent = sinhalaDeputyPrincipals[i].name;
      if (p) p.textContent = sinhalaDeputyPrincipals[i].role;
    }
  }

  // History Section
  document.getElementById('history-section-title').textContent = "අපගේ ඉතිහාසය";
  document.getElementById('history-excerpt').textContent = "පොලේගොඩ මහා විද්‍යාලයේ දැනට පවතින වාර්තා අනුව පොලේගොඩ මහා විද්‍යාලය 1926 වසරේ ආරම්භ වී ඇත. ආරම්භ වන විට සිසුන් අට දෙනෙක් සහ ගුරුවරුන් තිදෙනෙකුගෙන් සමන්විත වූ අතර ආරම්භක විදුහල්පතිවරයා පී. සී. එම්. කුලරත්න මහතා විය. එතුමා දීර්ඝ කාලයක් මෙහි විදුහල්පතිවරයා ලෙස සේවය කර ඇත. ආරම්භක ශිෂ්‍යයා එතුමාගේ පුතු වූ සෝමපාල කුලරත්න මහතාය.";
  document.getElementById('history-excerpt-2').textContent = "අප පාසල ආරම්භයේ කුරුඳුවත්ත ප්‍රදේශයේ නිවසක පැවැති බවද 1929 වසරේ දී වර්තමාන පාසල පවතින ස්ථානයට රැගෙන ආ බවද පොතපතෙහි සඳහන් වේ. 1929 වසරේ වත්මන් පොලේගොඩ මහා විද්‍යාලය පවතින ස්ථානයේ සියක් නමකට සංඝගත දක්ෂිණාවක් ප්‍රධානය කොට ඉන් අනතුරුව පාසල ආරම්භ කර බව පැරණි වාර්තාවල ඇතුළත් වේ. ආරම්භයේ පොල් අතු මඩු තුනක් ඉගැන්වීම් සඳහා භාවිත කර ඇත.";
  document.getElementById('read-more-history-btn').textContent = "තවත් කියවන්න";
  document.getElementById('listen-history-title').textContent = "අපගේ ඉතිහාසය අසන්න";

  // Programs & Events Section
  document.getElementById('programs-section-title').textContent = "වැඩසටහන්";
  document.getElementById('event-title-special').textContent = "විශේෂ";
  document.getElementById('event-title-educational').textContent = "අධ්‍යාපනික";
  document.getElementById('event-title-sports').textContent = "ක්‍රීඩා";
  document.getElementById('event-btn').textContent = "සියල්ල බලන්න";

  // Office Hours Section
  document.getElementById('office-hours-title').textContent = "කාර්යාල වේලාවන්";
  document.getElementById('office-services-title1').textContent = "පරිපාලන සේවා";
  document.getElementById('office-services-title2').textContent = "විදුහල්පති මුණගැසීමට";
  document.getElementById('office-services-title3').textContent = "සහතික පත්‍ර ලබාගැනීමට";
  
  // Days
  document.getElementById('monday').textContent = "සඳුදා";
  document.getElementById('tuesday').textContent = "අඟහරුවාදා";
  document.getElementById('wednesday').textContent = "බදාදා";
  document.getElementById('thursday').textContent = "බ්‍රහස්පතින්දා";
  document.getElementById('friday').textContent = "සිකුරාදා";
  document.getElementById('weekend').textContent = "සති අන්ත සහ නිවාඩු දින";
  document.getElementById('monwed').textContent = "ස‍ඳුදා සහ බදාදා";
  document.getElementById('monthu').textContent = "සඳුදා සහ බ්‍රහස්පතින්දා";
  
  // Times
  document.getElementById('monwed-time').textContent = "ප.ව 12:30 - ප.ව 2:30";
  document.getElementById('monthu-time').textContent = "ප.ව 12:30 - ප.ව 1:30";

  // Update office hours times
  const timeElements = document.querySelectorAll('.hours-list li .time');
  if (timeElements.length >= 6) {
    for (let i = 0; i < 5; i++) { // Monday to Friday
      timeElements[i].textContent = "පෙ.ව 7:30 - ප.ව 1:30";
    }
    timeElements[5].textContent = "වසා ඇත"; // Weekend
  }

  // Footer Section
  document.getElementById('contact-us-title').textContent = "අප අමතන්න";
  document.getElementById('address').textContent = "කුරුඳුවත්ත පාර, පොලේගොඩ, මහගම.";
  document.getElementById('phone').textContent = "+94 123 456 789";
  document.getElementById('email').textContent = "info@polegodamv.edu.lk";
  document.getElementById('project').textContent = "ව්‍යාපෘතිය පිළිබඳ";
  document.getElementById('quick-links-title').textContent = "ඉක්මන් සබැඳි";
  document.getElementById('home-link').textContent = "මුල් පිටුව";
  document.getElementById('faculty-link').textContent = "ගුරු මණ්ඩලය";
  document.getElementById('events-link').textContent = "උත්සව";
  document.getElementById('full-history-link').textContent = "සම්පූර්ණ ඉතිහාසය";
  document.getElementById('connect-title').textContent = "අප සමඟ සම්බන්ධ වන්න";
  document.getElementById('copyright-text').textContent = "© 2025 බප/ හො/ පොලේගොඩ මහා විද්‍යාලය. සියලුම හිමිකම් ඇවිරිණි.";
  document.getElementById('power').textContent = "බලගැන්වීම:";
  document.getElementById('PMVMU').textContent = "පොලේගොඩ මහා විද්‍යාලයීය මාධ්‍ය ඒකකය";
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
  const languageContainer = document.querySelector('.language-dropdown-container');
  const languageMenu = document.getElementById('language-menu');
  
  if (languageContainer && languageMenu && !languageContainer.contains(event.target)) {
    languageMenu.classList.remove('show');
    languageContainer.classList.remove('active');
  }
});

// Set initial active language and load saved preference
function setInitialLanguage() {
  const savedLanguage = localStorage.getItem('selectedLanguage');
  
  if (savedLanguage === 'si') {
    document.querySelector('.language-option:last-child').classList.add('active');
    applySinhalaTranslations();
  } else {
    // Default to English
    document.querySelector('.language-option:first-child').classList.add('active');
    applyEnglishTranslations();
  }
}

// Call when page loads
document.addEventListener('DOMContentLoaded', function() {
  setInitialLanguage();
  
  // Make sure functions are globally accessible
  window.switchLanguage = switchLanguage;
  window.toggleLanguageMenu = toggleLanguageMenu;
  window.optMenu = optMenu;
});