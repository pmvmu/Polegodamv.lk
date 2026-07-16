const uploadedFiles = {};

const siteData = {
  currentLanguage: localStorage.getItem('siteLanguage') || 'en',
  translations: {
    en: {
      applications: 'APPLICATIONS',
      searchPlaceholder: 'Search applications',
      recently: 'Recently',
      mostPopular: 'Most Popular',
      newest: 'Newest',
      filter: 'Filter',
      home: 'Home',
      searchResults: 'Search Results',
      menu: 'Menu',
      language: 'Language',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      searchButton: 'Search',
      pdfPreview: 'PDF Header Preview',
      uploadPdf: 'Upload PDF',
      issuedByOffice: 'Issued By the OFFICE',
      issuedByITCircle: 'Issued By the IT Circle',
      applicationAL: 'Application for 2028 A/L class',
      applicationResignation: 'Application for obtaining a resignation certificate',
      applicationAdmission: 'Application for School Admission',
      openDocument: 'Click here to open the Document',
      downloadDocument: 'Download Document',
      uploadHelp: 'Enter the target card ID to upload a PDF to that card.',
      cardIdPlaceholder: 'Card ID',
      noFileSelected: 'Select a PDF file first.',
      noMatchingCard: 'No matching card ID found.',
      uploadedTo: 'Uploaded to',
      allRights: 'All rights reserved',
      schoolFooter: '2026 Polegoda Maha Vidyalaya - Mahagama',
      maintainedBy: 'Maintained by School’s IT circle',
      noResults: 'No results found for',
      searchSummary: 'Showing results for',
      searchAllPages: 'Search results from all pages',
      languageName: 'English',
      sinhalaName: 'සිංහල'
    },
    si: {
      applications: 'යෙදුම්',
      searchPlaceholder: 'යෙදුම් සෙවීම',
      recently: 'නැවතී',
      mostPopular: 'ප්‍රසිද්ධම',
      newest: 'නවතම',
      filter: 'පෙරහන්',
      home: 'මුල් පිටුව',
      searchResults: 'සෙවුම් ප්‍රතිඵල',
      menu: 'මෙනු',
      language: 'භාෂාව',
      openMenu: 'මෙනුව විවෘත කරන්න',
      closeMenu: 'මෙනුව වසන්න',
      searchButton: 'සෙවීම',
      pdfPreview: 'PDF මාතෘකාව පෙරදසුන',
      uploadPdf: 'PDF උඩුගත කරන්න',
      issuedByOffice: 'කාර්යාලය විසින් නිකුත් කරන ලදී',
      issuedByITCircle: 'තොරතුරු තාක්ෂණ කලාපය විසින් නිකුත් කරන ලදී',
      applicationAL: '2028 උසස් පෙළ පන්තිය සඳහා යෙදුම',
      applicationResignation: 'පවත්වීමේ සහතිකයක් ලබා ගැනීම සඳහා යෙදුම',
      applicationAdmission: 'පාසලට ඇතුළු වීමට යෙදුම',
      openDocument: 'ලේඛනය විවෘত කිරීමට මෙතැන ක්ලික් කරන්න',
      downloadDocument: 'ලේඛනය බාගත කරන්න',
      uploadHelp: 'PDF එක අදාළ කාඩ් හැඳුනුමට උඩුගත කිරීමට කාඩ් හැඳුනුම ඇතුළත් කරන්න.',
      cardIdPlaceholder: 'කාඩ් හැඳුනුම',
      noFileSelected: 'පළමුව PDF ගොනුවක් තෝරන්න.',
      noMatchingCard: 'අදාළ කාඩ් හැඳුනුම හමු නොවීය.',
      uploadedTo: 'උඩුගත කරන ලදි',
      allRights: 'සියලු හිමිකම් ඇවිරිණි',
      schoolFooter: '2026 පොලෙගොඩ මහ විදුලිය - මහගම',
      maintainedBy: 'පාසලේ පරිගණක කලාපය විසින් පවත්වා ඇත',
      noResults: 'පෙන්වූ කිසිදු ප්‍රතිඵල නොමැත',
      searchSummary: 'මෙම සඳහා ප්‍රතිඵල',
      searchAllPages: 'සියලු පිටු වලින් සෙවුම් ප්‍රතිඵල',
      languageName: 'English',
      sinhalaName: 'සිංහල'
    }
  },
  pages: [
    {
      path: 'index.html',
      title: {
        en: 'Applications',
        si: 'යෙදුම්'
      },
      description: {
        en: 'Main applications portal for school forms and documents.',
        si: 'පාසලේ පෝරම සහ ලේඛන සඳහා ප්‍රධාන යෙදුම් පෝටලය.'
      },
      keywords: 'office, it circle, admission, resignation, application'
    },
    {
      path: 'search.html',
      title: {
        en: 'Search results',
        si: 'සෙවුම් ප්‍රතිඵල'
      },
      description: {
        en: 'Search through every page and document listing on the site.',
        si: 'අඩවියේ සියලු පිටු සහ ලේඛන ඇතුළත් කිරීම් හරහා සෙවුම් කරන්න.'
      },
      keywords: 'search, results, pages'
    }
  ]
};

function translatePage(language) {
  const translations = siteData.translations[language] || siteData.translations.en;
  document.documentElement.lang = language === 'si' ? 'si' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (key && translations[key]) {
      element.textContent = translations[key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (key && translations[key]) {
      element.placeholder = translations[key];
    }
  });
  document.querySelectorAll('[data-i18n-label]').forEach((element) => {
    const key = element.dataset.i18nLabel;
    if (key && translations[key]) {
      element.setAttribute('aria-label', translations[key]);
    }
  });
  document.querySelectorAll('[data-i18n-card-title]').forEach((element) => {
    const cardKey = element.dataset.i18nCardTitle;
    if (cardKey && translations[cardKey]) {
      element.textContent = translations[cardKey];
    }
  });
}

function setLanguage(language) {
  siteData.currentLanguage = language;
  localStorage.setItem('siteLanguage', language);
  translatePage(language);
}

function openMenu() {
  const menu = document.querySelector('.page-menu');
  const menuButton = document.querySelector('.menu-toggle');
  menu?.classList.add('open');
  menu?.setAttribute('aria-hidden', 'false');
  menuButton?.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  const menu = document.querySelector('.page-menu');
  const menuButton = document.querySelector('.menu-toggle');
  menu?.classList.remove('open');
  menu?.setAttribute('aria-hidden', 'true');
  menuButton?.setAttribute('aria-expanded', 'false');
}

function createSearchResults(query) {
  const resultsContainer = document.getElementById('search-results');
  const summary = document.getElementById('search-summary');
  const translations = siteData.translations[siteData.currentLanguage];
  if (!resultsContainer || !summary) return;
  const normalizedQuery = query.trim().toLowerCase();
  const matches = siteData.pages.filter((page) => {
    const title = page.title[siteData.currentLanguage].toLowerCase();
    const description = page.description[siteData.currentLanguage].toLowerCase();
    const keywords = page.keywords.toLowerCase();
    return (
      title.includes(normalizedQuery) ||
      description.includes(normalizedQuery) ||
      keywords.includes(normalizedQuery)
    );
  });
  summary.textContent = normalizedQuery
    ? `${translations.searchSummary} “${query}”`
    : translations.searchAllPages;
  resultsContainer.innerHTML = '';
  if (!normalizedQuery) {
    resultsContainer.innerHTML = `<p class="no-results">${translations.searchAllPages}</p>`;
    return;
  }
  if (matches.length === 0) {
    resultsContainer.innerHTML = `<p class="no-results">${translations.noResults} “${query}”.</p>`;
    return;
  }
  resultsContainer.innerHTML = matches
    .map((page) => {
      return `
        <article class="card result-card">
          <div class="card-body">
            <h3 class="card-title">${page.title[siteData.currentLanguage]}</h3>
            <p>${page.description[siteData.currentLanguage]}</p>
            <a href="${page.path}" class="card-action">${translations.openDocument}</a>
          </div>
        </article>
      `;
    })
    .join('');
}

function getQueryParameter(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name) || '';
}

function normalizeCardId(value) {
  return String(value || '').trim().toLowerCase();
}

function findCardById(targetId, fileName) {
  const normalizedTarget = normalizeCardId(targetId);
  const cards = Array.from(document.querySelectorAll('.card[data-card-id]'));
  if (normalizedTarget) {
    let exact = cards.find((card) => normalizeCardId(card.dataset.cardId) === normalizedTarget);
    if (exact) return exact;
  }
  const normalizedFile = normalizeCardId(fileName);
  return cards.find((card) => normalizedFile.includes(normalizeCardId(card.dataset.cardId)));
}

function previewPdfOnCard(card, file) {
  const cardId = card.dataset.cardId || 'document';
  const displayName = `${cardId}.pdf`;
  const previewUrl = URL.createObjectURL(file);
  const cardPreview = card.querySelector('.card-preview');
  const actionLink = card.querySelector('.card-action');
  if (!cardPreview || !actionLink) {
    return;
  }

  const previousUrl = cardPreview.dataset.fileUrl;
  if (previousUrl) {
    URL.revokeObjectURL(previousUrl);
  }

  cardPreview.dataset.fileUrl = previewUrl;
  cardPreview.innerHTML = `<iframe src="${previewUrl}" title="${displayName} preview"></iframe>`;

  actionLink.classList.remove('disabled');
  actionLink.href = previewUrl;
  actionLink.download = displayName;
  actionLink.setAttribute('aria-label', `Download ${displayName}`);
  actionLink.dataset.i18n = 'downloadDocument';

  uploadedFiles[cardId] = {
    url: previewUrl,
    name: displayName,
    originalName: file.name
  };
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(siteData.currentLanguage);
  const menuToggle = document.querySelector('.menu-toggle');
  const menuClose = document.querySelector('.close-menu');
  const menuOverlay = document.querySelector('.menu-overlay');
  const languageButtons = document.querySelectorAll('.lang-option');

  menuToggle?.addEventListener('click', () => {
    const isOpen = document.querySelector('.page-menu')?.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });
  menuClose?.addEventListener('click', closeMenu);
  menuOverlay?.addEventListener('click', closeMenu);

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const lang = button.dataset.lang;
      if (lang) setLanguage(lang);
      closeMenu();
    });
  });

});
