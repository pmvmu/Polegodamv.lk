/**
 * WP/Hr/Polegoda Maha Vidyalaya — Applications Portal
 * Google Apps Script backend.
 *
 * This turns a Google Sheet into the site's database. Paste this whole
 * file into the Apps Script editor that's bound to your Sheet (Extensions
 * > Apps Script), then deploy it as a Web App. Full steps are in
 * SPREADSHEET_SETUP.md.
 *
 * Sheet tabs used (created automatically the first time this runs):
 *   School       — two columns: key | value
 *   Categories   — header row: id | en | si
 *   Applications — header row: id | categoryId | title_en | title_si | pdfUrl | date
 */

const SCHOOL_SHEET = 'School';
const CATEGORIES_SHEET = 'Categories';
const APPLICATIONS_SHEET = 'Applications';

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
    { id: "app-2028al", categoryId: "office", title_en: "Application for 2028 A/L class", title_si: "2028 උසස් පෙළ පන්තිය සඳහා අයදුම්පත", pdfUrl: "", date: "2026-07-01" },
    { id: "app-resignation", categoryId: "office", title_en: "Application for obtaining a resignation certificate", title_si: "ඉල්ලා අස්වීමේ සහතිකයක් ලබා ගැනීම සඳහා අයදුම්පත", pdfUrl: "", date: "2026-06-20" },
    { id: "app-admission", categoryId: "office", title_en: "Application for School Admission", title_si: "පාසල් ප්‍රවේශය සඳහා අයදුම්පත", pdfUrl: "", date: "2026-06-15" },
    { id: "app-itcircle", categoryId: "it", title_en: "Application to join the IT Circle", title_si: "තොරතුරු තාක්ෂණ කවයට සම්බන්ධ වීම සඳහා අයදුම්පත", pdfUrl: "", date: "2026-06-10" }
  ]
};

/* ---------- entry points ---------- */

function doGet(e) {
  ensureSheets_();
  const data = readAll_();
  return jsonOut_(data);
}

function doPost(e) {
  ensureSheets_();
  let body;
  try {
    body = JSON.parse(e.postData.contents);
  } catch (err) {
    return jsonOut_({ ok: false, error: 'Invalid JSON body' });
  }

  if (body.action !== 'save' || !body.data) {
    return jsonOut_({ ok: false, error: 'Unknown action' });
  }

  try {
    writeAll_(body.data);
    return jsonOut_({ ok: true });
  } catch (err) {
    return jsonOut_({ ok: false, error: String(err) });
  }
}

/* ---------- sheet setup ---------- */

function ensureSheets_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  if (!ss.getSheetByName(SCHOOL_SHEET)) {
    const sh = ss.insertSheet(SCHOOL_SHEET);
    sh.getRange(1, 1, 1, 2).setValues([['key', 'value']]);
  }
  if (!ss.getSheetByName(CATEGORIES_SHEET)) {
    const sh = ss.insertSheet(CATEGORIES_SHEET);
    sh.getRange(1, 1, 1, 3).setValues([['id', 'en', 'si']]);
  }
  if (!ss.getSheetByName(APPLICATIONS_SHEET)) {
    const sh = ss.insertSheet(APPLICATIONS_SHEET);
    sh.getRange(1, 1, 1, 6).setValues([['id', 'categoryId', 'title_en', 'title_si', 'pdfUrl', 'date']]);
  }

  // If the sheets are empty (no data rows yet), seed them with the defaults
  // so the site has something to show on first run.
  const school = ss.getSheetByName(SCHOOL_SHEET);
  if (school.getLastRow() < 2) {
    writeAll_(DEFAULT_DATA);
  }
}

/* ---------- read ---------- */

function readAll_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const schoolRows = ss.getSheetByName(SCHOOL_SHEET).getDataRange().getValues().slice(1);
  const school = {};
  schoolRows.forEach(row => {
    if (row[0]) school[row[0]] = row[1];
  });

  const catRows = ss.getSheetByName(CATEGORIES_SHEET).getDataRange().getValues().slice(1);
  const categories = catRows
    .filter(row => row[0])
    .map(row => ({ id: String(row[0]), en: String(row[1] || ''), si: String(row[2] || '') }));

  const appRows = ss.getSheetByName(APPLICATIONS_SHEET).getDataRange().getValues().slice(1);
  const applications = appRows
    .filter(row => row[0])
    .map(row => ({
      id: String(row[0]),
      categoryId: String(row[1] || ''),
      title_en: String(row[2] || ''),
      title_si: String(row[3] || ''),
      pdfUrl: String(row[4] || ''),
      date: formatDate_(row[5])
    }));

  return { school, categories, applications };
}

/* ---------- write (full replace, matching how the admin panel already
   treats the whole dataset as one object) ---------- */

function writeAll_(data) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // School (key/value)
  const schoolSheet = ss.getSheetByName(SCHOOL_SHEET);
  clearDataRows_(schoolSheet);
  const schoolEntries = Object.keys(data.school || {}).map(k => [k, data.school[k]]);
  if (schoolEntries.length) {
    schoolSheet.getRange(2, 1, schoolEntries.length, 2).setValues(schoolEntries);
  }

  // Categories
  const catSheet = ss.getSheetByName(CATEGORIES_SHEET);
  clearDataRows_(catSheet);
  const cats = (data.categories || []).map(c => [c.id, c.en, c.si]);
  if (cats.length) {
    catSheet.getRange(2, 1, cats.length, 3).setValues(cats);
  }

  // Applications
  const appSheet = ss.getSheetByName(APPLICATIONS_SHEET);
  clearDataRows_(appSheet);
  const apps = (data.applications || []).map(a => [a.id, a.categoryId, a.title_en, a.title_si, a.pdfUrl, a.date]);
  if (apps.length) {
    appSheet.getRange(2, 1, apps.length, 6).setValues(apps);
  }
}

function clearDataRows_(sheet) {
  const lastRow = sheet.getLastRow();
  if (lastRow > 1) {
    sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn()).clearContent();
  }
}

function formatDate_(value) {
  if (!value) return '';
  if (Object.prototype.toString.call(value) === '[object Date]') {
    return Utilities.formatDate(value, Session.getScriptTimeZone(), 'yyyy-MM-dd');
  }
  return String(value);
}

/* ---------- helpers ---------- */

function jsonOut_(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
