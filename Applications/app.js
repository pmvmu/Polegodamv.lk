/* =========================================================================
   WP/Hr/Polegoda Maha Vidyalaya — Applications Portal
   Shared data layer + i18n. Loaded by index.html, preview.html, admin.html
   Data lives in a Google Sheet (the real database) once you set API_URL
   below — see SPREADSHEET_SETUP.md. Every page also keeps a local cache in
   localStorage (STORAGE_KEY) so it still loads instantly and still works
   if the spreadsheet is briefly unreachable. If API_URL is left blank, the
   site falls back to the original per-browser-only behaviour.
   ========================================================================= */

const STORAGE_KEY = 'wpmv_applications_data_v1';
const LANG_KEY = 'wpmv_lang';

/* ---------- spreadsheet database config ----------
   Paste the "Web app URL" you get after deploying the Apps Script below.
   See SPREADSHEET_SETUP.md for step-by-step instructions.
   Leave this as '' to keep using only this browser's storage (old behaviour). */
const API_URL = 'https://script.google.com/macros/s/AKfycbyX1hXOmYOnEVU0PdSmK75NEslOZBqo3G8l5Ga6BbxAbMsIay0dQAzMf17nsm7iERfH4g/exec';

const DEFAULT_DATA = {
  school: {
    name_si: "බප/හො/පොලේගොඩ මහා විද්‍යාලය",
    name_en: "WP/ Hr/ Polegoda Maha Vidyalaya",
    place: "Mahagama",
    phone: "034 224 4063",
    year: "2026",
    adminPassword: "admin123"
  },
  categories: [
    { id: "office", en: "Issued by the Office", si: "කාර්යාලය මගින් නිකුත් කරන ලද" },
    { id: "it", en: "Issued by the IT Circle", si: "තොරතුරු තාක්ෂණ කවය මගින් නිකුත් කරන ලද" }
  ],
  applications: [
    {
      id: "app-2028al",
      categoryId: "office",
      title_en: "Application for 2028 A/L class",
      title_si: "2028 උසස් පෙළ පන්තිය සඳහා අයදුම්පත",
      pdfUrl: "",
      date: "2026-07-01"
    },
    {
      id: "app-resignation",
      categoryId: "office",
      title_en: "Application for obtaining a resignation certificate",
      title_si: "ඉල්ලා අස්වීමේ සහතිකයක් ලබා ගැනීම සඳහා අයදුම්පත",
      pdfUrl: "",
      date: "2026-06-20"
    },
    {
      id: "app-admission",
      categoryId: "office",
      title_en: "Application for School Admission",
      title_si: "පාසල් ප්‍රවේශය සඳහා අයදුම්පත",
      pdfUrl: "",
      date: "2026-06-15"
    },
    {
      id: "app-itcircle",
      categoryId: "it",
      title_en: "Application to join the IT Circle",
      title_si: "තොරතුරු තාක්ෂණ කවයට සම්බන්ධ වීම සඳහා අයදුම්පත",
      pdfUrl: "",
      date: "2026-06-10"
    }
  ]
};

/* ---------- data access ----------
   loadCachedData()  — synchronous, instant. Reads the last known copy from
                        this browser so pages can paint immediately.
   loadData()        — asynchronous. If API_URL is set, fetches the current
                        data from the Google Sheet (source of truth) and
                        refreshes the local cache; falls back to the cache
                        if the sheet can't be reached (offline, etc.).
   saveData(data)     — asynchronous. Always updates the local cache, and
                        (if API_URL is set) writes the change to the Sheet
                        too. Returns true/false depending on whether the
                        write actually reached the spreadsheet (when one
                        is configured).
   ---------------------------------------------------------------- */

function hasApi() {
  return !!API_URL;
}

function cacheData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error('Failed to cache data locally (storage may be full)', e);
    return false;
  }
}

function loadCachedData() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      cacheData(DEFAULT_DATA);
      return structuredClone(DEFAULT_DATA);
    }
    return JSON.parse(raw);
  } catch (e) {
    console.error('Failed to read local cache, falling back to defaults', e);
    return structuredClone(DEFAULT_DATA);
  }
}

async function loadData() {
  const cached = loadCachedData();
  if (!hasApi()) return cached;

  try {
    const res = await fetch(`${API_URL}?action=get`, { method: 'GET' });
    if (!res.ok) throw new Error('Network response was not OK');
    const remote = await res.json();
    if (!remote || !remote.school || !remote.categories || !remote.applications) {
      throw new Error('Spreadsheet returned unexpected data');
    }
    cacheData(remote);
    return remote;
  } catch (e) {
    console.warn('Could not reach the spreadsheet database, using local copy instead.', e);
    return cached;
  }
}

async function saveData(data) {
  // Always keep a local cache, so the site keeps working even if the
  // spreadsheet is briefly unreachable.
  cacheData(data);

  if (!hasApi()) return true;

  try {
    // Sent as text/plain (not application/json) on purpose: Apps Script Web
    // Apps don't support CORS preflight requests, and a text/plain body is
    // "simple" so the browser skips the preflight. The script still parses
    // the body as JSON on the other end.
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({ action: 'save', data })
    });
    const result = await res.json();
    return !!(result && result.ok);
  } catch (e) {
    console.error('Failed to save to the spreadsheet database', e);
    return false;
  }
}

async function resetData() {
  return saveData(DEFAULT_DATA);
}

/* ---------- language ---------- */

function getLang() {
  return localStorage.getItem(LANG_KEY) || 'en';
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
}

const T = {
  en: {
    applications: "Applications",
    searchPlaceholder: "Search applications…",
    search: "Search",
    recently: "Recently",
    oldest: "Oldest",
    az: "A – Z",
    filter: "Filter",
    allCategories: "All categories",
    language: "Language",
    openDocument: "Click here to open the Document",
    noResults: "No applications match your search.",
    back: "Back",
    pdfPreview: "PDF Preview",
    noFileYet: "This document hasn't been uploaded yet. Please check back later or contact the office.",
    download: "Download",
    instructions: "Instructions",
    stepDownload: "Download",
    stepPrint: "Print & Fill",
    stepHandOver: "Hand it over to the school",
    contactNote: "Please contact the office if a problem arises..",
    rights: "All rights reserved",
    maintainedBy: "Maintained by School's IT circle",
    adminLink: "Admin",
    notFound: "Application not found.",
    backToApplications: "Back to Applications"
  },
  si: {
    applications: "අයදුම්පත්",
    searchPlaceholder: "අයදුම්පත් සොයන්න…",
    search: "සොයන්න",
    recently: "මෑතකදී",
    oldest: "පැරණි පිළිවෙළ",
    az: "අ - ෆ",
    filter: "පෙරහන",
    allCategories: "සියලුම කාණ්ඩ",
    language: "භාෂාව",
    openDocument: "ලේඛනය විවෘත කිරීමට මෙතන ක්ලික් කරන්න",
    noResults: "ඔබගේ සෙවීමට ගැලපෙන අයදුම්පත් නොමැත.",
    back: "ආපසු",
    pdfPreview: "PDF පෙරදසුන",
    noFileYet: "මෙම ලේඛනය තවම උඩුගත කර නොමැත. කරුණාකර පසුව නැවත පරීක්ෂා කරන්න හෝ කාර්යාලය අමතන්න.",
    download: "බාගන්න",
    instructions: "උපදෙස්",
    stepDownload: "බාගන්න",
    stepPrint: "මුද්‍රණය කර පුරවන්න",
    stepHandOver: "පාසලට භාරදෙන්න",
    contactNote: "ගැටලුවක් පැන නැගුනහොත් කාර්යාලය අමතන්න..",
    rights: "සියලුම හිමිකම් ඇවිරිණි",
    maintainedBy: "පාසලේ තොරතුරු තාක්ෂණ කවය මගින් නඩත්තු කරනු ලැබේ",
    adminLink: "පරිපාලක",
    notFound: "අයදුම්පත සොයාගත නොහැක.",
    backToApplications: "අයදුම්පත් වෙත ආපසු"
  }
};

function t(key) {
  const lang = getLang();
  return (T[lang] && T[lang][key]) || T.en[key] || key;
}

/* ---------- small utils ---------- */

function qs(name) {
  return new URLSearchParams(window.location.search).get(name);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str == null ? '' : String(str);
  return div.innerHTML;
}

function slugify(str) {
  return String(str)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '') || 'item';
}
