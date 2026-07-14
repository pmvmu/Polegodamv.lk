# Using a Google Sheet as the database

This turns the Applications Portal from "each browser stores its own copy"
into "everyone reads/writes the same Google Sheet." No paid hosting or
coding tools needed beyond a free Google account.

## 1. Create the Sheet

1. Go to https://sheets.google.com and create a new blank spreadsheet.
2. Name it something like **"Polegoda Applications Database"**.
3. You don't need to add any tabs or headers yourself — the script below
   creates `School`, `Categories`, and `Applications` tabs automatically
   the first time it runs, and fills them with the site's current default
   data.

## 2. Add the Apps Script

1. In the Sheet, go to **Extensions → Apps Script**.
2. Delete anything in the default `Code.gs` file that opens.
3. Paste in the entire contents of **`Code.gs`** (included alongside this
   file) and save (Ctrl/Cmd+S). Name the project if it asks, e.g.
   "Applications API".

## 3. Deploy it as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Set:
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**.
5. The first time, Google will ask you to authorize the script — click
   **Authorize access**, choose your Google account, click **Advanced**
   then **Go to [project name] (unsafe)** if it warns you (this warning
   just means Google hasn't reviewed the script, not that anything is
   wrong), then **Allow**.
6. Copy the **Web app URL** it gives you — it looks like
   `https://script.google.com/macros/s/AKfycb.../exec`

## 4. Connect the site to it

1. Open `app.js` in the site files.
2. Find this line near the top:
   ```js
   const API_URL = '';
   ```
3. Paste your Web app URL between the quotes:
   ```js
   const API_URL = 'https://script.google.com/macros/s/AKfycb.../exec';
   ```
4. Save, and re-upload/republish the site files.

That's it. Open `admin.html`, sign in, and edit something — it now writes
straight to the Sheet. Any device that loads `index.html` afterwards will
see the update.

## Notes and limits

- **PDF files:** Google Sheets cells cap out around 50,000 characters, so
  a PDF uploaded and embedded directly (the "Or upload a PDF file" option)
  won't fit once a spreadsheet is the database — the admin panel will warn
  you if a file is too big. Instead, upload the PDF to Google Drive, set
  sharing to "Anyone with the link", and paste that link into the
  **PDF URL** field.
- **Admin passcode:** it's stored as a row in the `School` tab (key
  `adminPassword`). You can also change it by editing that cell directly
  in the Sheet.
- **Offline / first load:** every page keeps a copy of the last-loaded
  data in the browser's local storage, so pages still show something
  instantly and keep working if the Sheet is briefly unreachable.
- **Multiple admins editing at once:** the site does a "full replace"
  save (the whole dataset each time), so if two people save changes at
  the exact same moment, the later save wins and the earlier one can be
  overwritten. Fine for a school office with occasional edits; not meant
  for simultaneous heavy editing.
- **Re-deploying the script:** if you ever edit `Code.gs` again, use
  **Deploy → Manage deployments → edit (pencil) → New version** so the
  same Web app URL keeps working — creating a brand-new deployment gives
  you a different URL.
