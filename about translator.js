// About Page Language Translator Functions

// Toggle Language Dropdown Menu
function toggleLanguageMenu() {
  const languageMenu = document.getElementById("language-menu");
  const languageContainer = document.querySelector(".language-dropdown-container");
  
  languageMenu.classList.toggle("show");
  languageContainer.classList.toggle("active");
}

// Options Menu Toggle
function optMenu() {
  document.getElementById("opt-menu").classList.toggle("show");
}

// Switch Language Function
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

// Apply English translations
function applyEnglishTranslations() {
  // More Options
  document.getElementById('more-lang').textContent = "Change Language";
  document.getElementById('more-user').textContent = "User Profile";
  document.getElementById('more-donate').textContent = "Donate";
  document.getElementById('more-theme').textContent = "About Theme of Header";
  document.getElementById('more-dark').textContent = "Dark Mode";
  document.getElementById('more-saturation').textContent = "Saturate / Desaturate";
  document.getElementById('more-feed').textContent = "Feedback";
  document.getElementById('lang-code-en').textContent = "EN";
  document.getElementById('lang-code-si').textContent = "SI";

  // Navigation
  document.getElementById('nav-home').innerHTML = '<i class="fas fa-home"></i> Home';
  document.getElementById('nav-top').textContent = "Top";
  document.getElementById('nav-symbols').textContent = "Symbols";
  document.getElementById('nav-anthem').textContent = "Anthem";
  document.getElementById('nav-leadership').textContent = "Leadership";
  document.getElementById('nav-staff').textContent = "Staff";
  document.getElementById('nav-contact').textContent = "Contact";

  // Header Section
  document.getElementById('header-name').textContent = "WP/ Hr/ Polegoda M. V.";
  document.getElementById('header-year').textContent = "Established in 1926";
  document.getElementById('header-motto').textContent = '"Vidya Dadathi Vinayan"';
  document.getElementById('header-former').innerHTML = 'Formerly known as: <strong id="header-former-text">Mahagama South Sucharithawardhana Swabhasha Mixed School.</strong>';

  // School Symbols Section
  document.getElementById('symbols-title').textContent = "School Symbols";
  document.getElementById('symbol-logo').textContent = "School Logo";
  document.getElementById('symbol-flag').textContent = "School Flag";
  document.getElementById('symbol-Prefect').textContent = "Prefect Insignia";
  document.getElementById('symbol-uniform').textContent = "Uniform Insignia";

  // School Uniforms Section
  document.getElementById('uniforms-title').textContent = "School Uniforms";
  document.getElementById('girls-uniform').textContent = "Girls' Uniform";
  document.getElementById('boys-uniform').textContent = "Boys' Uniform";

  // Vision and Mission Section
  document.getElementById('vision-title').textContent = "Our Vision";
  document.getElementById('vision-description').textContent = "A quality child through good management..";
  document.getElementById('mission-title').textContent = "Our Mission";
  document.getElementById('mission-description').textContent = "It is our mission to raise a noble generation of children who are wise, spiritual, and capable of standing on their own.";

  // School Anthem Section
  document.getElementById('anthem-title').textContent = "School Anthem";
  document.getElementById('anthem-listen').textContent = "Listen to Our School Anthem";
  document.getElementById('downloadLyricsBtn').innerHTML = '<i class="fa fas fa-download"></i>&nbsp;&nbsp;Download Lyrics (PDF)';
  document.getElementById('downloadAudioBtn').innerHTML = '<i class="fa fas fa-download"></i>&nbsp;&nbsp;Download Audio (MP3)';
  
  // Statistics Section
  document.getElementById('stats-title').textContent = "School Statistics";
  document.getElementById('stats-students').textContent = "Total Students";
  document.getElementById('stats-staff').textContent = "Teaching Staff";
  document.getElementById('stats-nonac-staff').textContent = "Non-Academic Staff";

  // Academic Leadership Section
  document.getElementById('leadership-title').textContent = "Academic Leadership";
  document.getElementById('leadership-intro').textContent = "Meet our dedicated leadership team who guide our school with vision and commitment.";
  document.getElementById('senior-leadership-title').textContent = "Senior Leadership Team";
  document.getElementById('principal-name').textContent = "Mrs W.D. Duleeka Madhumali Premathilaka";
  document.getElementById('principal-title').textContent = "Principal";
  document.getElementById('deputy1-name').textContent = "Mr Ruwan P. Kumara";
  document.getElementById('deputy1-title').textContent = "Deputy Principal";
  document.getElementById('deputy2-name').textContent = "Mrs W.Dushanthi Duleeka";
  document.getElementById('deputy2-title').textContent = "Deputy Principal";
  document.getElementById('assistant-name').textContent = "Mrs S.W. Lilani Madhubhashini";
  document.getElementById('assistant-title').textContent = "Assistant Principal";

  // Heads of Departments
  document.getElementById('hod-title').textContent = "Heads of Departments";
  document.getElementById('hod1-name').textContent = "Mrs Pushpalatha";
  document.getElementById('hod1-title').textContent = "Head of Department - Grades 6-9";
  document.getElementById('hod2-name').textContent = "Mrs Chandrika Manel";
  document.getElementById('hod2-title').textContent = "Head of Department - Grades 10-11";
  document.getElementById('hod3-name').textContent = "Mrs D.C.E. Walpiita";
  document.getElementById('hod3-title').textContent = "Head of Department - Grades 12-13";

  // Teaching Staff Section
  document.getElementById('staff-title').textContent = "Teaching Staff";

  // Department Titles
  document.getElementById('ad-title').textContent = "Arts Department";
  document.getElementById('cd-title').textContent = "Commerce Department";
  document.getElementById('md-title').textContent = "Mathematics Department";
  document.getElementById('sd-title').textContent = "Science Department";
  document.getElementById('atd-title').textContent = "Aesthetics Department";
  document.getElementById('it-title').textContent = "IT Department";
  document.getElementById('other-title').textContent = "Other Subjects";

  //Teacherss Names (for staff listings)
  const teachersTranslations = {
    'ad-staff1-name': 'Mr H.S. Nadeeka Prabhath Pushpakumara',
    'ad-staff2-name': 'Mrs. P.D. Chathurika Manori',
    'ad-staff3-name': 'Mrs M. Senani Senarathna',
    'ad-staff4-name': 'Mrs D.L. S. Madhushani Liyanag',
    'ad-staff5-name': 'Mrs M.D. Chandima Kumudini',
    'ad-staff6-name': 'Mrs D.C.E. Walpita',
    'ad-staff7-name': 'Mr B.L.P. Nuwan Kumara',
    'ad-staff8-name': 'Ms J. Vishwa Sandeepani Siriwadhana',
    'ad-staff9-name': 'Mr M.G. Sanjeewa',
    'ad-staff10-name': 'Mrs. D. Kalyani Ranasinghe',
    'cd-staff1-name': 'Mr S. Sudheera Sampath',
    'cd-staff2-name': 'Mr Vimukthi Madhujith Kumarasinghe',
    'cd-staff3-name': 'Ms J. Vishwa Sandeepani Siriwadhana',
    'md-staff1-name': 'Mrs D. Niluka Dilrukshi',
    'md-staff2-name': 'Mrs H.P. Srinali Anjani Premarathna',
    'md-staff3-name': 'Mrs T. Sumudu Shashikala Peiris',
    'sd-staff1-name': 'Mrs H.P. Srinali Anjani Premarathna',
    'sd-staff2-name': ' ',
    'sd-staff3-name': ' ',
    'atd-staff1-name': 'Mrs H. Sanjeewani Hewage',
    'atd-staff2-name': 'Mrs T. Anuradha Niroshini Fernando',
    'atd-staff3-name': 'Mr Lenin Priyantha Liyanage',
    'atd-staff4-name': 'Mrs S.W. Lilani Madhubhashini',
    'it-staff1-name': 'Mrs K. Kanchana Samanpura',
    'it-staff2-name': 'Mrs H.D. Chamari Kanchanamala'
  };

  // Apply subject translations
  for (const [id, translation] of Object.entries(teachersTranslations)) {
    const element = document.getElementById(id);
    if (element) element.textContent = translation;
  }

    // Other Teachers translations
  const otherNames = {
    'other-staff1-name': 'Mrs D. Kalyani Ranasinghe',
    'other-staff2-name': 'Mrs D.C.E. Walpita',
    'other-staff3-name': 'Mr A.D. Thiraj Lasantha',
    'other-staff4-name': 'Mrs W. Dinusha Darshani Piyasoma',
    'other-staff5-name': 'Mr M.G. Sanjeewa',
    'other-staff6-name': 'Mrs A. Kokila',
    'other-staff7-name': 'Mrs E.M.S. Probodhini Edirisinghe',
    'other-staff8-name': 'Ms V.K. Senarathna',
    'other-staff9-name': 'Mrs D. Niluka Dilrukshi',
    'other-staff10-name': 'Mrs T. Sumudu Sashikala Peiris',
    'other-staff11-name': 'Mr Priyashan Dilruk Senevirathna',
    'other-staff12-name': 'Mrs W. Dushanthi Duleeka',
    'other-staff13-name': 'Mrs P.D. Manori Chathurika',
    'other-staff14-name': 'Mrs Kaushani Chathurika Disanayaka',
    'other-staff15-name': 'Mrs H.P. Srinali Anjani Premarathna',
    'other-staff16-name': 'Mrs P.A. Pushpalatha',
    'other-staff17-name': 'Mrs A.A. Chandrika Manel',
    'other-staff18-name': 'Mr S. Sudheera Sampath',
    'other-staff19-name': 'Mr H.S.N. Prabhath Pushpakumara',
    'other-staff20-name': 'Mr B.L.P. Nuwan Kumara',
    'other-staff21-name': 'Mr Vimukthi Madhujith Kumarasinghe',
    'other-staff22-name': 'Mrs U. Chalani Madhusanka',
    'other-staff23-name': 'Mrs D.L.S. Madhushani',
    'other-staff24-name': 'Mrs M.D. Chamdima Kumudini',
    'other-staff25-name': 'Mrs W.H.M. Janakanthi',
    'other-staff26-name': 'Mrs M. Senani Senarathn',
    'other-staff27-name': 'Ms J. Wishwa Sandeepani Siriwadhana',
    'other-staff28-name': 'Mrs A.A. Nirmali Amarasinghe',
    'other-staff29-name': 'Mrs M.M.P. Munidasa',
    'other-staff30-name': 'Mr U. Ishara Lakmal Nuwansiri',
    'other-staff31-name': 'Mrs A.G. Chandrangani Senevirathna',
    'other-staff32-name': 'Mrs D.D. Wajira Nandani'
  };

  // Apply other subjects translations
  for (const [id, translation] of Object.entries(otherNames)) {
    const element = document.getElementById(id);
    if (element) element.textContent = translation;
  }

  // Non-Academic Staff Section
  document.getElementById('non-ac-staff').textContent = "Non-Academic Staff";
  const nonAcademicNames = {
    'non-ac-staff1-name': 'Mrs B.G.M. Randisha Batagalla',
    'non-ac-staff2-name': 'Mrs K.M. Uthpala Ireshani',
    'non-ac-staff3-name': 'Mrs A.D. Kaumadi Niroshana',
    'non-ac-staff4-name': 'Mrs M.M.D. Chandima Dilrukshi',
    'non-ac-staff5-name': 'Mrs P.M. Kanthi',
    'non-ac-staff6-name': 'Mr R.D. Premachandra',
    'non-ac-staff7-sname': 'Mr W.H.N. Rizan'
  };

  // Apply non-academic subjects translations
  for (const [id, translation] of Object.entries(nonAcademicNames)) {
    const element = document.getElementById(id);
    if (element) element.textContent = translation;
  }


  // Subject Names (for staff listings)
  const subjectTranslations = {
    'ad-staff1-subject': 'Geography',
    'ad-staff2-subject': 'History',
    'ad-staff3-subject': 'Media',
    'ad-staff4-subject': 'Agriculture',
    'ad-staff5-subject': 'Home Economics',
    'ad-staff6-subject': 'Buddhist Civilization',
    'ad-staff7-subject': 'Political Science',
    'ad-staff8-subject': 'Economics',
    'ad-staff9-subject': 'Sinhala',
    'ad-staff10-subject': 'Buddhist Civilization',
    'cd-staff1-subject': 'Accounting',
    'cd-staff2-subject': 'Business Studies',
    'cd-staff3-subject': 'Economics',
    'md-staff1-subject': 'Combined Maths',
    'md-staff2-subject': 'Chemistry',
    'md-staff3-subject': 'Physics',
    'sd-staff1-subject': 'Chemistry',
    'sd-staff2-subject': 'Physics',
    'sd-staff3-subject': 'Biology',
    'atd-staff1-subject': 'Music',
    'atd-staff2-subject': 'Dancing',
    'atd-staff3-subject': 'Drama',
    'atd-staff4-subject': 'Art',
    'it-staff1-subject': 'ICT',
    'it-staff2-subject': 'ICT'
  };

  // Apply subject translations
  for (const [id, translation] of Object.entries(subjectTranslations)) {
    const element = document.getElementById(id);
    if (element) element.textContent = translation;
  }

  // Other Subjects translations
  const otherSubjects = {
    'other-staff1-subject': 'Buddhism',
    'other-staff2-subject': 'Buddhism',
    'other-staff3-subject': 'Sinhala',
    'other-staff4-subject': 'Sinhala',
    'other-staff5-subject': 'Sinhala',
    'other-staff6-subject': 'English',
    'other-staff7-subject': 'English',
    'other-staff8-subject': 'English',
    'other-staff9-subject': 'Mathematics',
    'other-staff10-subject': 'Mathematics',
    'other-staff11-subject': 'Mathematics',
    'other-staff12-subject': 'History',
    'other-staff13-subject': 'History',
    'other-staff14-subject': 'Science',
    'other-staff15-subject': 'Science',
    'other-staff16-subject': 'Science',
    'other-staff17-subject': 'Science',
    'other-staff18-subject': 'Accounting',
    'other-staff19-subject': 'Geography',
    'other-staff20-subject': 'Civic Education',
    'other-staff21-subject': 'Business Studies',
    'other-staff22-subject': 'Tamil',
    'other-staff23-subject': 'Agriculture',
    'other-staff24-subject': 'Home Economics',
    'other-staff25-subject': 'Health Education',
    'other-staff26-subject': 'Media',
    'other-staff27-subject': 'Economics',
    'other-staff28-subject': 'Counseling',
    'other-staff29-subject': 'Relief',
    'other-staff30-subject': 'Relief',
    'other-staff31-subject': 'Relief',
    'other-staff32-subject': 'Special Education'
  };

  // Apply other subjects translations
  for (const [id, translation] of Object.entries(otherSubjects)) {
    const element = document.getElementById(id);
    if (element) element.textContent = translation;
  }

  // Non-Academic Staff Section
  document.getElementById('non-ac-staff').textContent = "Non-Academic Staff";
  const nonAcademicSubjects = {
    'non-ac-staff1-subject': 'Development Officer',
    'non-ac-staff2-subject': 'Development Officer',
    'non-ac-staff3-subject': 'School Work Assistant',
    'non-ac-staff4-subject': 'Laboratory Assistant',
    'non-ac-staff5-subject': 'Sanitation Worker',
    'non-ac-staff6-subject': 'School Guard',
    'non-ac-staff7-subject': 'School Guard'
  };

  // Apply non-academic subjects translations
  for (const [id, translation] of Object.entries(nonAcademicSubjects)) {
    const element = document.getElementById(id);
    if (element) element.textContent = translation;
  }

  // Footer Section
  document.getElementById('footer-note').innerHTML = '<strong>*Please note that the above information is accurate as of August 1, 2025.</strong>';
  document.getElementById('copyright').textContent = '© 2025 WP/ Hr/ Polegoda M. V. &#11044; All rights reserved.';
  document.getElementById('contact-info').textContent = 'Contact us at: ';
}

// Apply Sinhala translations
function applySinhalaTranslations() {
  // More Options
  document.getElementById('more-lang').textContent = "භාෂාව වෙනස් කරන්න";
  document.getElementById('more-user').textContent = "පරිශීලක පැතිකඩ";
  document.getElementById('more-donate').textContent = "පරිත්‍යාග";
  document.getElementById('more-theme').textContent = "තේමාව ගැන";
  document.getElementById('more-dark').textContent = "අඳුරු මුහුණත";
  document.getElementById('more-saturation').textContent = "සන්තෘප්ත / අසන්තෘප්ත";
  document.getElementById('more-feed').textContent = "ප්‍රතිපෝෂණ";
  document.getElementById('lang-code-en').textContent = "ඉං";
  document.getElementById('lang-code-si').textContent = "සිං";

  // Navigation
  document.getElementById('nav-home').innerHTML = '<i class="fas fa-home"></i> මුල් පිටුව';
  document.getElementById('nav-top').textContent = "ඉහළට";
  document.getElementById('nav-symbols').textContent = "සංකේත";
  document.getElementById('nav-anthem').textContent = "ගීය";
  document.getElementById('nav-leadership').textContent = "නායකත්වය";
  document.getElementById('nav-staff').textContent = "කාර්ය මණ්ඩලය";
  document.getElementById('nav-contact').textContent = "සම්බන්ධතාව";

  // Header Section
  document.getElementById('header-name').textContent = "බප/ හො/ පොලේගොඩ ම.වි.";
  document.getElementById('header-year').textContent = "1926 දී ආරම්භ කරන ලදී";
  document.getElementById('header-motto').textContent = '"විද්‍යා දදාති විනයං"';
  document.getElementById('header-former').innerHTML =පෙර හැඳින්වූ නම: <strong id="header-former-text">දකුණු මහගම සුචරිතවර්ධන ස්වභාෂා මිශ්‍ර පාසල.</strong>';

  // School Symbols Section
  document.getElementById('symbols-title').textContent = "පාසල් සංකේත";
  document.getElementById('symbol-logo').textContent = "පාසල් ලාංඡනය";
  document.getElementById('symbol-flag').textContent = "පාසල් කොඩිය";
  document.getElementById('symbol-Prefect').textContent = "ප්‍රිෆෙක්ට් ලාංඡනය";
  document.getElementById('symbol-uniform').textContent = "නිල ඇඳුම් ලාංඡනය";

  // School Uniforms Section
  document.getElementById('uniforms-title').textContent = "පාසල් නිල ඇඳුම්";
  document.getElementById('girls-uniform').textContent = "ගැහැණු සිසුන්ගේ නිල ඇඳුම";
  document.getElementById('boys-uniform').textContent = "පිරිමි සිසුන්ගේ නිල ඇඳුම";

  // Vision and Mission Section
  document.getElementById('vision-title').textContent = "අපගේ දැක්ම";
  document.getElementById('vision-description').textContent = "යහපත් කළමනාකරණය තුළින් ගුණාත්මක දරුවෙක්..";
  document.getElementById('mission-title').textContent = "අපගේ මෙහෙවර";
  document.getElementById('mission-description').textContent = "නැණ නුවණින් යුත්, ආධ්‍යාත්මයෙන් පිරිපුන්, ස්ව ශක්තියෙන් නැගීසිටිය හැකි උදාර දරු පරපුරක් බිහිනිරීම අපගේ යුග මෙහෙවරයි.";

  // School Anthem Section
  document.getElementById('anthem-title').textContent = "පාසල් ගීය";
  document.getElementById('anthem-listen').textContent = "අපගේ පාසල් ගීය අසන්න";
  document.getElementById('downloadLyricsBtn').innerHTML = '<i class="fa fas fa-download"></i>&nbsp;&nbsp;ගීත පද බාගතකරන්න (PDF)';
  document.getElementById('downloadAudioBtn').innerHTML = '<i class="fa fas fa-download"></i>&nbsp;&nbsp;ගීතය බාගතකරන්න (MP3)';

  // Statistics Section
  document.getElementById('stats-title').textContent = "පාසල් සංඛ්‍යාලේඛන";
  document.getElementById('stats-students').textContent = "සමස්ත සිසුන්";
  document.getElementById('stats-staff').textContent = "ගුරු මණ්ඩලය";
  document.getElementById('stats-nonac-staff').textContent = "අධ්‍යාපනික නොවන කාර්ය මණ්ඩලය";

  // Academic Leadership Section
  document.getElementById('leadership-title').textContent = "අධ්‍යාපනික නායකත්වය";
  document.getElementById('leadership-intro').textContent = "දැක්මක් සහ කැපවීමක් සහිතව අපගේ පාසල මෙහෙයවන කැපවූ නායකත්ව කණ්ඩායම මුණගැසෙන්න.";
  document.getElementById('senior-leadership-title').textContent = "ජ්‍යෙෂ්ඨ නායකත්ව කණ්ඩායම";
  document.getElementById('principal-name').textContent = "ඩබ්.ඩී. දුලීකා මධුමාලි ප්‍රේමතිලක මිය";
  document.getElementById('principal-title').textContent = "විදුහල්පති";
  document.getElementById('deputy1-name').textContent = "රුවන් පී. කුමාර මයා";
  document.getElementById('deputy1-title').textContent = "නියෝජ්‍ය විදුහල්පති";
  document.getElementById('deputy2-name').textContent = "ඩබ්.දුශාන්ති දුලීකා මිය";
  document.getElementById('deputy2-title').textContent = "නියෝජ්‍ය විදුහල්පති";
  document.getElementById('assistant-name').textContent = "එස්.ඩබ්. ලිලානි මධුභාෂිණී මිය";
  document.getElementById('assistant-title').textContent = "සහකාර විදුහල්පති";

  // Heads of Departments
  document.getElementById('hod-title').textContent = "අංශ ප්‍රධානීන්";
  document.getElementById('hod1-name').textContent = "පුෂ්පලතා මිය";
  document.getElementById('hod1-title').textContent = "අංශ ප්‍රධානී - 6-9 ශ්‍රේණි";
  document.getElementById('hod2-name').textContent = "චන්ද්‍රිකා මනෙල් මිය";
  document.getElementById('hod2-title').textContent = "අංශ ප්‍රධානී - 10-11 ශ්‍රේණි";
  document.getElementById('hod3-name').textContent = "ඩී.සී.ඊ. වල්පිට මිය";
  document.getElementById('hod3-title').textContent = "අංශ ප්‍රධානී - 12-13 ශ්‍රේණි";

  // Teaching Staff Section
  document.getElementById('staff-title').textContent = "ගුරු මණ්ඩලය";

  // Department Titles
  document.getElementById('ad-title').textContent = "කලා අංශය";
  document.getElementById('cd-title').textContent = "වාණිජ අංශය";
  document.getElementById('md-title').textContent = "ගණිත අංශය";
  document.getElementById('sd-title').textContent = "විද්‍යා අංශය";
  document.getElementById('atd-title').textContent = "සෞන්දර්ය අංශය";
  document.getElementById('it-title').textContent = "තොරතුරු තාක්ෂණ අංශය";
  document.getElementById('other-title').textContent = "වෙනත් විෂයයන්";

  //Teacherss Names (for staff listings)
  const teachersTranslations = {
    'ad-staff1-name': 'එච්.එස්. නදීක ප්‍රභාත් පුෂ්පකුමාර මයා',
    'ad-staff2-name': 'පී.ඩී. චතුරිකා මනෝරි මිය',
    'ad-staff3-name': 'එම්. සේනානි සේනාරත්න මිය',
    'ad-staff4-name': 'ඩී.එල්.එස්. මධුෂානි මිය',
    'ad-staff5-name': 'එම්.ඩී. චන්දිමා කුමුදුනී මිය',
    'ad-staff6-name': 'ඩී.සී.ඊ. වල්පිට මිය',
    'ad-staff7-name': 'බී.එල්.පී. නුවන් කුමාර මයා',
    'ad-staff8-name': 'ජේ. විශ්වා සංදීපනී සිරිවදන මෙනවිය',
    'ad-staff9-name': 'එම්.ජී. සංජීව',
    'ad-staff10-name': 'ඩී. කල්‍යාණි රණසිංහ මිය',
    'cd-staff1-name': 'එස්. සුධීර සම්පත් මයා',
    'cd-staff2-name': 'විමුක්ති මධුජිත් කුමාරසිංහ මයා',
    'cd-staff3-name': 'ජේ. විශ්වා සංදීපනී සිරිවදන මෙනවිය',
    'md-staff1-name': 'ඩී. නිලූකා දිල්රුක්ෂි මිය',
    'md-staff2-name': 'එච්.පී. ශ්‍රීනාලි අංජනී ප්‍රේමරත්න මිය',
    'md-staff3-name': 'ටී. සුමුදු සශිකලා පීරිස් මිය',
    'sd-staff1-name': 'එච්.පී. ශ්‍රීනාලි අංජනී ප්‍රේමරත්න මිය',
    'sd-staff2-name': ' ',
    'sd-staff3-name': ' ',
    'atd-staff1-name': 'එච්. සංජීවනී හේවගේ මිය',
    'atd-staff2-name': 'ටී. අනුරාධා නිරෝෂිනී ප්‍රනාන්දු මිය',
    'atd-staff3-name': 'ලෙනින් ප්‍රියන්ත ලියනගේ මයා',
    'atd-staff4-name': 'එස්.ඩබ්ලිව්. ලිලානි මධුභාෂිණි',
    'it-staff1-name': 'කේ. කාංචනා සමන්පුර මිය',
    'it-staff2-name': 'එච්.ඩී. චමරී කාංචනමාලා මිය'
  };

  // Apply subject translations
  for (const [id, translation] of Object.entries(teachersTranslations)) {
    const element = document.getElementById(id);
    if (element) element.textContent = translation;
  }

    // Other Teachers translations
  const otherNames = {
    'other-staff1-name': 'ඩී. කල්‍යාණි රණසිංහ මිය',
    'other-staff2-name': 'ඩී.සී.ඊ. වල්පිට මිය',
    'other-staff3-name': 'ඒ. ඩී. තිරාජ් ලසන්ත මයා',
    'other-staff4-name': 'ඩබ්. දිනූෂා දර්ශනී පියසෝම මිය',
    'other-staff5-name': 'එම්.ජී. සංජීව මයා',
    'other-staff6-name': 'ඒ. කෝකිලා මිය',
    'other-staff7-name': 'ඊ.එම්.එස්. ප්‍රොබෝදිනී එදිරිසිංහ',
    'other-staff8-name': 'විහංගා කෞෂානි සේනාරත්න මෙනවිය',
    'other-staff9-name': 'ඩී. නිලූකා දිල්රුක්ෂි මිය',
    'other-staff10-name': 'ටී. සුමුදු සශිකලා පීරිස් මිය',
    'other-staff11-name': 'ප්‍රියශාන් දිල්රුක් සෙනෙවිරත්න මයා',
    'other-staff12-name': 'ඩබ්. දුෂාන්ති දුලීකා මිය',
    'other-staff13-name': 'පී.ඩී. මනෝරි චතුරිකා මිය',
    'other-staff14-name': 'කෞෂානි චතුරිකා දිසානායක මිය',
    'other-staff15-name': 'එච්.පී. ශ්‍රීනාලි අංජනී ප්‍රේමරත්න මිය',
    'other-staff16-name': 'පී.ඒ. පුෂ්පලතා මිය',
    'other-staff17-name': 'ඒ.ඒ. චන්ද්‍රිකා මානෙල් මිය',
    'other-staff18-name': 'එස්. සුධීර සම්පත් මයා',
    'other-staff19-name': 'එච්.එස්.එන්. ප්‍රභාත් පුෂ්පකුමාර',
    'other-staff20-name': 'බී.එල්.පී මයා නුවන් කුමාර මයා',
    'other-staff21-name': 'විමුක්ති මධුජිත් කුමාරසිංහ මයා',
    'other-staff22-name': 'යූ. චලනි මධුසංකා මිය',
    'other-staff23-name': 'ඩී.එල්.එස්. මධුෂානි මිය',
    'other-staff24-name': 'එම්.ඩී. චන්දිමා කුමුදුනී මිය',
    'other-staff25-name': 'ඩබ්.එච්.එම්. ජනකන්ති මිය',
    'other-staff26-name': 'එම්. සේනානි සේනාරත්න මිය',
    'other-staff27-name': 'ජේ. විශ්වා සංදීපනී සිරිවර්ධන මෙනවිය',
    'other-staff28-name': 'ඒ.ඒ. නිර්මලී අමරසිංහ මිය',
    'other-staff29-name': 'එම්.එම්.පී. මුනිදාස මිය',
    'other-staff30-name': 'යූ. ඉෂාර ලක්මාල් නුවන්සිරි මයා',
    'other-staff31-name': 'ඒ.ජී. චන්ද්‍රාංගනී සෙනෙවිරත්න මිය',
    'other-staff32-name': 'ඩී.ඩී. වජිරා නන්දනී මිය'
  };

  // Apply other subjects translations
  for (const [id, translation] of Object.entries(otherNames)) {
    const element = document.getElementById(id);
    if (element) element.textContent = translation;
  }

  // Non-Academic Staff Section
  document.getElementById('non-ac-staff').textContent = "අනධ්‍යන කාර්ය මණ්ඩලය";
  const nonAcademicNames = {
    'non-ac-staff1-name': 'බී.ජී.එම්. රන්දිශා බටගල්ල මිය',
    'non-ac-staff2-name': 'කේ.එම්. උත්පලා මිය',
    'non-ac-staff3-name': 'ඒ.ඩී. කෞමදී නිරෝෂණා මිය',
    'non-ac-staff4-name': 'එම්.එම්.ඩී. චන්දිමා දිල්රුක්ෂි මිය',
    'non-ac-staff5-name': 'පී.එම්. කාන්ති මිය',
    'non-ac-staff6-name': 'ආර්.ඩී. ප්‍රේමචන්ද්‍ර මයා',
    'non-ac-staff7-name': 'ඩබ්.එච්.එන්. රිසාන් මයා'
  };

  // Apply non-academic subjects translations
  for (const [id, translation] of Object.entries(nonAcademicNames)) {
    const element = document.getElementById(id);
    if (element) element.textContent = translation;
  }
  
  // Subject Names (for staff listings)
  const subjectTranslations = {
    'ad-staff1-subject': 'භූගෝල විද්‍යාව',
    'ad-staff2-subject': 'ඉතිහාසය',
    'ad-staff3-subject': 'මාධ්‍ය අධ්‍යයනය',
    'ad-staff4-subject': 'කෘෂිකර්ම විද්‍යාව',
    'ad-staff5-subject': 'ගෘහ ආර්ථික විද්‍යාව',
    'ad-staff6-subject': 'බෞද්ධ ශිෂ්ටාචාරය',
    'ad-staff7-subject': 'දේශපාලන විද්‍යාව',
    'ad-staff8-subject': 'ආර්ථික විද්‍යාව',
    'ad-staff9-subject': 'සිංහල',
    'ad-staff10-subject': 'බෞද්ධ ශිෂ්ටාචාරය',
    'cd-staff1-subject': 'ගණකාධිකරණය',
    'cd-staff2-subject': 'ව්‍යාපාර අධ්‍යයනය',
    'cd-staff3-subject': 'ආර්ථික විද්‍යාව',
    'md-staff1-subject': 'සංයුක්ත ගණිතය',
    'md-staff2-subject': 'රසායන විද්‍යාව',
    'md-staff3-subject': 'භෞතික විද්‍යාව',
    'sd-staff1-subject': 'රසායන විද්‍යාව',
    'sd-staff2-subject': 'භෞතික විද්‍යාව',
    'sd-staff3-subject': 'ජීව විද්‍යාව',
    'atd-staff1-subject': 'සංගීතය',
    'atd-staff2-subject': 'නර්තනය',
    'atd-staff3-subject': 'නාට්‍ය',
    'atd-staff4-subject': 'චිත්‍ර කලාව',
    'it-staff1-subject': 'තොරතුරු හා සන්නිවේදන තාක්ෂණය',
    'it-staff2-subject': 'තොරතුරු හා සන්නිවේදන තාක්ෂණය'
  };

  // Apply subject translations
  for (const [id, translation] of Object.entries(subjectTranslations)) {
    const element = document.getElementById(id);
    if (element) element.textContent = translation;
  }

  // Other Subjects translations
  const otherSubjects = {
    'other-staff1-subject': 'බුද්ධ ධර්මය',
    'other-staff2-subject': 'බුද්ධ ධර්මය',
    'other-staff3-subject': 'සිංහල',
    'other-staff4-subject': 'සිංහල',
    'other-staff5-subject': 'සිංහල',
    'other-staff6-subject': 'ඉංග්‍රීසි',
    'other-staff7-subject': 'ඉංග්‍රීසි',
    'other-staff8-subject': 'ඉංග්‍රීසි',
    'other-staff9-subject': 'ගණිතය',
    'other-staff10-subject': 'ගණිතය',
    'other-staff11-subject': 'ගණිතය',
    'other-staff12-subject': 'ඉතිහාසය',
    'other-staff13-subject': 'ඉතිහාසය',
    'other-staff14-subject': 'විද්‍යාව',
    'other-staff15-subject': 'විද්‍යාව',
    'other-staff16-subject': 'විද්‍යාව',
    'other-staff17-subject': 'විද්‍යාව',
    'other-staff18-subject': 'ගණකාධිකරණය',
    'other-staff19-subject': 'භූගෝල විද්‍යාව',
    'other-staff20-subject': 'පුරවැසි අධ්‍යාපනය',
    'other-staff21-subject': 'ව්‍යාපාර අධ්‍යයනය',
    'other-staff22-subject': 'දෙමළ',
    'other-staff23-subject': 'කෘෂිකර්ම විද්‍යාව',
    'other-staff24-subject': 'ගෘහ ආර්ථික විද්‍යාව',
    'other-staff25-subject': 'සෞඛ්‍ය අධ්‍යාපනය',
    'other-staff26-subject': 'මාධ්‍ය අධ්‍යයනය',
    'other-staff27-subject': 'ආර්ථික විද්‍යාව',
    'other-staff28-subject': 'උපදේශන සේවා',
    'other-staff29-subject': 'සහන සේවය',
    'other-staff30-subject': 'සහන සේවය',
    'other-staff31-subject': 'සහන සේවය',
    'other-staff32-subject': 'විශේෂ අධ්‍යාපනය'
  };

  // Apply other subjects translations
  for (const [id, translation] of Object.entries(otherSubjects)) {
    const element = document.getElementById(id);
    if (element) element.textContent = translation;
  }

  // Non-Academic Staff Section
  document.getElementById('non-ac2-staff').textContent = "අනධ්‍යන කාර්ය මණ්ඩලය";
  const nonAcademicSubjects = {
    'non-ac-staff1-subject': 'සංවර්ධන නිලධාරී',
    'non-ac-staff2-subject': 'සංවර්ධන නිලධාරී',
    'non-ac-staff3-subject': 'පාසල් කාර්ය සහායක',
    'non-ac-staff4-subject': 'රසායනාගාර සහායක',
    'non-ac-staff5-subject': 'සනීපාරක්ෂක සේවක',
    'non-ac-staff6-subject': 'පාසල් ආරක්ෂක',
    'non-ac-staff7-subject': 'පාසල් ආරක්ෂක'
  };

  // Apply non-academic subjects translations
  for (const [id, translation] of Object.entries(nonAcademicSubjects)) {
    const element = document.getElementById(id);
    if (element) element.textContent = translation;
  }

  // Footer Section
  document.getElementById('footer-note').innerHTML = '<strong>*ඉහත තොරතුරු 2025 අගෝස්තු 01 දිනට සාපේක්ෂව සකස් කර ඇති බව කරුණාවෙන් සලකන්න.</strong>';
  document.getElementById('copyright').textContent = '© 2025 බප/ හො/ පොලේගොඩ ම.වි. &#11044; සියලුම හිමිකම් ඇවිරිණි.';
  document.getElementById('contact-info').textContent = 'අප අමතන්න: ';
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

// Additional utility functions for better user experience
function updateLanguageFromParent() {
  // Check if language was set from parent window (main site)
  try {
    if (window.opener && window.opener.localStorage) {
      const parentLanguage = window.opener.localStorage.getItem('selectedLanguage');
      if (parentLanguage && parentLanguage !== localStorage.getItem('selectedLanguage')) {
        localStorage.setItem('selectedLanguage', parentLanguage);
        setInitialLanguage();
      }
    }
  } catch (e) {
    // Ignore cross-origin errors
    console.log('Cannot access parent window language setting');
  }
}

// Sync language changes back to parent window
function syncLanguageToParent(lang) {
  try {
    if (window.opener && window.opener.localStorage) {
      window.opener.localStorage.setItem('selectedLanguage', lang);
      // Trigger language change in parent if it has the function
      if (window.opener.switchLanguage) {
        window.opener.switchLanguage(lang);
      }
    }
  } catch (e) {
    // Ignore cross-origin errors
    console.log('Cannot sync language to parent window');
  }
}

// Enhanced switch language function with parent sync
function switchLanguageEnhanced(lang) {
  switchLanguage(lang);
  syncLanguageToParent(lang);
}

// Keyboard shortcuts for language switching
function handleKeyboardShortcuts(event) {
  // Alt + L for language toggle
  if (event.altKey && event.key.toLowerCase() === 'l') {
    event.preventDefault();
    toggleLanguageMenu();
  }
  
  // Alt + E for English
  if (event.altKey && event.key.toLowerCase() === 'e') {
    event.preventDefault();
    switchLanguageEnhanced('en');
  }
  
  // Alt + S for Sinhala
  if (event.altKey && event.key.toLowerCase() === 's') {
    event.preventDefault();
    switchLanguageEnhanced('si');
  }
  
  // Escape to close language menu
  if (event.key === 'Escape') {
    const languageMenu = document.getElementById('language-menu');
    const languageContainer = document.querySelector('.language-dropdown-container');
    if (languageMenu && languageMenu.classList.contains('show')) {
      languageMenu.classList.remove('show');
      languageContainer.classList.remove('active');
    }
  }
}

// Enhanced language detection based on browser settings
function detectBrowserLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  
  // Check if browser is set to Sinhala or has Sinhala preference
  if (browserLang.startsWith('si') || browserLang.includes('LK')) {
    return 'si';
  }
  
  return 'en'; // Default to English
}

// Smart initial language setting
function setSmartInitialLanguage() {
  let selectedLanguage = localStorage.getItem('selectedLanguage');
  
  // If no saved preference, try to detect from browser
  if (!selectedLanguage) {
    selectedLanguage = detectBrowserLanguage();
    localStorage.setItem('selectedLanguage', selectedLanguage);
  }
  
  // Apply the selected language
  if (selectedLanguage === 'si') {
    document.querySelector('.language-option:last-child').classList.add('active');
    applySinhalaTranslations();
  } else {
    document.querySelector('.language-option:first-child').classList.add('active');
    applyEnglishTranslations();
  }
}

// Accessibility improvements
function addAccessibilityAttributes() {
  // Add ARIA labels for language options
  const languageOptions = document.querySelectorAll('.language-option');
  if (languageOptions.length >= 2) {
    languageOptions[0].setAttribute('aria-label', 'Switch to English');
    languageOptions[0].setAttribute('role', 'button');
    languageOptions[0].setAttribute('tabindex', '0');
    
    languageOptions[1].setAttribute('aria-label', 'Switch to Sinhala');
    languageOptions[1].setAttribute('role', 'button');
    languageOptions[1].setAttribute('tabindex', '0');
  }
  
  // Add keyboard navigation for language options
  languageOptions.forEach((option, index) => {
    option.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        const lang = index === 0 ? 'en' : 'si';
        switchLanguageEnhanced(lang);
      }
    });
  });
  
  // Add ARIA attributes to language menu
  const languageMenu = document.getElementById('language-menu');
  if (languageMenu) {
    languageMenu.setAttribute('role', 'menu');
    languageMenu.setAttribute('aria-label', 'Language selection menu');
  }
  
  const languageToggle = document.getElementById('language-toggle');
  if (languageToggle) {
    languageToggle.setAttribute('aria-expanded', 'false');
    languageToggle.setAttribute('aria-haspopup', 'true');
  }
}

// Update ARIA attributes when menu toggles
function toggleLanguageMenuEnhanced() {
  const languageMenu = document.getElementById("language-menu");
  const languageContainer = document.querySelector(".language-dropdown-container");
  const languageToggle = document.getElementById('language-toggle');
  
  languageMenu.classList.toggle("show");
  languageContainer.classList.toggle("active");
  
  // Update ARIA expanded state
  const isExpanded = languageMenu.classList.contains("show");
  if (languageToggle) {
    languageToggle.setAttribute('aria-expanded', isExpanded.toString());
  }
}

// Add visual feedback for language changes
function showLanguageChangeNotification(language) {
  // Remove any existing notifications
  const existingNotification = document.querySelector('.language-notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'language-notification';
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #2c3e50;
    color: white;
    padding: 12px 20px;
    border-radius: 6px;
    font-size: 14px;
    z-index: 10000;
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  `;
  
  const message = language === 'en' ? 'Language changed to English' : 'භාෂාව සිංහල වෙත වෙනස් විය';
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.opacity = '1';
    notification.style.transform = 'translateY(0)';
  }, 100);
  
  // Animate out and remove
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(-20px)';
    setTimeout(() => notification.remove(), 300);
  }, 2500);
}

// Enhanced switch language with notification
function switchLanguageWithNotification(lang) {
  switchLanguage(lang);
  showLanguageChangeNotification(lang);
  syncLanguageToParent(lang);
}

// Call when page loads
document.addEventListener('DOMContentLoaded', function() {
  // Check for parent window language first
  updateLanguageFromParent();
  
  // Set initial language (smart detection)
  setSmartInitialLanguage();
  
  // Add accessibility improvements
  addAccessibilityAttributes();
  
  // Add keyboard shortcuts
  document.addEventListener('keydown', handleKeyboardShortcuts);
  
  // Override the global functions with enhanced versions
  window.switchLanguage = switchLanguageWithNotification;
  window.toggleLanguageMenu = toggleLanguageMenuEnhanced;
  window.optMenu = optMenu;
  
  // Add help tooltip for keyboard shortcuts
  const languageToggle = document.getElementById('language-toggle');
  if (languageToggle) {
    const originalTitle = languageToggle.getAttribute('title') || '';
    languageToggle.setAttribute('title', originalTitle + ' (Alt+L to toggle, Alt+E for English, Alt+S for Sinhala)');
  }
  
  console.log('About page translator loaded successfully');
  console.log('Keyboard shortcuts: Alt+L (toggle menu), Alt+E (English), Alt+S (Sinhala)');

});
