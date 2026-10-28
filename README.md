# Fixora Service Hub - Professional Mobile & Technical Service Center Management

[![GitHub Pages Ready](https://img.shields.io/badge/GitHub%20Pages-Ready%20to%20Deploy-brightgreen.svg)](#how-to-deploy-to-github-pages)
[![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS%20%7C%20Node.js-blue.svg)](#clean-file-structure)
[![Execution](https://img.shields.io/badge/Status-100%25%20Tested%20%26%20Verified-success.svg)](#how-to-execute-the-project-locally)

A complete, production-grade, responsive web application for **Fixora Service Hub** — a mobile phone repair and technical service center.

---

## 📁 Clean File Structure (Organized for GitHub)

The project is structured cleanly so you **do not get "too many files"** errors when pushing or uploading to GitHub:

```text
fixora-service-hub/
│
├── index.html            # Main website entry point (served directly by GitHub Pages)
├── css/
│   └── styles.css        # Clean responsive design tokens, grid layouts & animations
├── js/
│   └── app.js           # Client-side state, 11-step tracker, booking wizard & modals
├── data/
│   └── fixora_db.json    # JSON database (South India regional hubs, repairs, inventory)
├── server.js             # Express.js REST API backend (for full-stack local/cloud execution)
├── package.json          # Node.js project manifest & scripts
├── .gitignore            # Excludes node_modules and temp files from GitHub
└── README.md             # Documentation & deployment guide
```

> [!IMPORTANT]
> **Why were there "too many files"?**
> The `node_modules/` folder contains over 15,000 dependency files. **Never drag-and-drop or push `node_modules/` to GitHub.** Our configured [`.gitignore`](.gitignore) automatically prevents Git from tracking it.

---

## 🚀 How to Host on GitHub Pages (Under 1 Minute)

### Method A: Via Git CLI (Recommended)
Open PowerShell or Terminal in this folder and run:

```bash
git init
git add index.html css/ js/ data/ server.js package.json README.md .gitignore
git commit -m "Initial commit of Fixora Service Hub"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

### Method B: Via GitHub Web (Drag-and-Drop)
1. Go to [github.com/new](https://github.com/new) and create a repository.
2. Click **"uploading an existing file"**.
3. Select and drag only these files & folders:
   - `index.html`
   - `css/` folder
   - `js/` folder
   - `data/` folder
   - `server.js`
   - `package.json`
   - `README.md`
4. Commit the changes.
5. In your repository on GitHub:
   - Navigate to **Settings** ➔ **Pages** (on the left menu).
   - Under **Build and deployment** ➔ **Source**, select **Deploy from a branch**.
   - Select Branch: **`main`** and Folder: **`/ (root)`**.
   - Click **Save**.
6. Your website will be live at: `https://<YOUR-USERNAME>.github.io/<YOUR-REPOSITORY>/`

---

## ⚡ How to Execute the Project Locally

You can run Fixora Service Hub in either **static frontend mode** or **full-stack Node.js mode**:

### 1. Static Execution (Instant)
Simply double-click [`index.html`](index.html) in your file manager to open it in Chrome, Edge, Safari, or Firefox. Everything (booking, tracking, role portals, simulated payments, GST invoices) works out of the box using `localStorage`.

### 2. Full-Stack Node.js Execution (Persistent Database)
1. Install dependencies (if running on a new computer):
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Open your browser and navigate to:
   ```text
   http://localhost:3000
   ```

Verified endpoints:
- `GET /` — Serves the Fixora Service Hub web application
- `GET /api/health` — Service health & South India regional status
- `GET /api/hubs` — Active regional hubs (Bengaluru, Chennai, Hyderabad, Kochi, Coimbatore)
- `GET /api/repairs` — List all active repair tickets
- `GET /api/repairs/:id` — Look up a specific ticket (e.g. `FIX-2026-1042`)
- `POST /api/repairs` — Register a new booking in `data/fixora_db.json`

---

## 🌟 Features Included

1. **Public Web Experience**:
   - Modern, clean tech service design (Inter typography, custom color tokens, deep navy text, electric blue accents).
   - South India Regional Hubs preview (Bengaluru Flagship, Chennai Central, Hyderabad Hitec City, Kochi SmartCity, Coimbatore).
   - Comprehensive services grid (Screens, Batteries, Motherboard ICs, Water recovery, Cameras, Ports).
   - 4-step transparent service process.

2. **Multi-Step Repair Booking Wizard**:
   - **Step 1**: Category (Smartphone, Tablet, Laptop, Smartwatch, Other) & searchable brand/model.
   - **Step 2**: Fault selection with dynamic preliminary price calculator.
   - **Step 3**: Physical condition, accessories, and secure IMEI/Serial collection.
   - **Step 4**: Service Mode (Walk-In Hub, Doorstep Pickup, On-Site Tech) + appointment slot picker.
   - **Step 5**: Instant ticket generation (`FIX-2026-XXXX`).

3. **Live 11-Step Status Progression Tracker**:
   - *Booking Confirmed &rarr; Device Received &rarr; Initial Diagnosis &rarr; Awaiting Customer Approval &rarr; Waiting for Parts &rarr; Repair in Progress &rarr; Quality Testing &rarr; Ready for Collection &rarr; Out for Delivery &rarr; Completed &rarr; Cancelled*.
   - Technical inspection notes & 8-point Quality Testing status.

4. **Multi-Role Portal Switcher**:
   - **Customer Portal**: View all repair tickets, approve/reject estimates, and view active warranties.
   - **Technician Workbench**: View assigned queue, log bench diagnosis, deduct parts from inventory, and update statuses.
   - **Admin Master Console**: Revenue KPI metrics, repair order manager, inventory control (with low-stock alerts, 1-click restock, and new stock creation), and system audit logs.

5. **Indian Payment Gateway & Invoicing**:
   - **Simulated Razorpay Modal**: Authentic Indian payment gateway popup supporting UPI (GPay, PhonePe, Paytm), Credit/Debit Card, and NetBanking.
   - **Printable GST Tax Invoice**: Official invoice with GSTIN, HSN/SAC codes, CGST (9%) + SGST (9%), customer details, and a 90-day certified warranty certificate.

---

## 🧪 Sample Demo IDs for Testing

| Sample Repair ID | Device | Current Status | Features to Test |
| :--- | :--- | :--- | :--- |
| **`FIX-2026-1042`** | Apple iPhone 14 Pro | Repair in Progress | Live diagnosis notes, 8-point QC check, payment receipt |
| **`FIX-2026-2089`** | Samsung Galaxy S23 Ultra | Awaiting Approval | Click **"Review & Approve Estimate"** to test customer approval workflow |
| **`FIX-2026-3014`** | Dell XPS 15 | Completed & Invoiced | Click **"View Tax Invoice"** to inspect and print the GST bill & warranty card |
