const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets from project root (including index.html)
app.use(express.static(__dirname));

// Ensure data folder exists
const DATA_DIR = path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'fixora_db.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// South India Regional Hubs Initial Data
const SOUTH_INDIA_HUBS = [
  {
    id: "hub-blr",
    name: "Bengaluru Regional Flagship Hub",
    state: "Karnataka",
    city: "Bengaluru",
    address: "#42, 100 Feet Road, 4th Block, Koramangala, Bengaluru, Karnataka 560034",
    landmark: "Near Sony World Junction & Wipro Park",
    phone: "+91 80 4965 4321",
    mobile: "+91 98450 12345",
    whatsapp: "919845012345",
    email: "bengaluru@fixora.in",
    hours: "Mon - Sat: 09:30 AM – 08:30 PM • Sun: 10:00 AM – 04:00 PM",
    leadTech: "Rajesh Kumar (Apple & Android Level-3 Master)",
    mapUrl: "https://maps.google.com/?q=Koramangala+4th+Block+Bengaluru",
    status: "OPEN",
    pincodesCovered: "560034, 560038, 560095, 560102, 560001, 560025, 560076",
    activeBenchCount: 14
  },
  {
    id: "hub-chn",
    name: "Chennai Central Technical Hub",
    state: "Tamil Nadu",
    city: "Chennai",
    address: "#18, Usman Road, Opp. Panagal Park, T. Nagar, Chennai, Tamil Nadu 600017",
    landmark: "Opposite Panagal Park / Ranganathan Street Junction",
    phone: "+91 44 2434 5678",
    mobile: "+91 94440 98765",
    whatsapp: "919444098765",
    email: "chennai@fixora.in",
    hours: "Mon - Sat: 09:30 AM – 08:30 PM • Sun: 10:00 AM – 04:00 PM",
    leadTech: "K. Senthil Nathan (BGA & Micro-soldering Lead)",
    mapUrl: "https://maps.google.com/?q=T+Nagar+Panagal+Park+Chennai",
    status: "OPEN",
    pincodesCovered: "600017, 600028, 600004, 600096, 600041, 600020, 600034",
    activeBenchCount: 11
  },
  {
    id: "hub-hyd",
    name: "Hyderabad Hitec City Hub",
    state: "Telangana",
    city: "Hyderabad",
    address: "Plot #88, Ground Floor, Cyber Hills Colony, Madhapur, Hyderabad, Telangana 500081",
    landmark: "Next to Inorbit Mall & Durgam Cheruvu Metro Station",
    phone: "+91 40 6678 1234",
    mobile: "+91 98850 43210",
    whatsapp: "919885043210",
    email: "hyderabad@fixora.in",
    hours: "Mon - Sat: 09:30 AM – 08:30 PM • Sun: 10:00 AM – 04:00 PM",
    leadTech: "V. Srinivas Rao (Display Calibration & FaceID Specialist)",
    mapUrl: "https://maps.google.com/?q=Madhapur+Cyber+Hills+Hyderabad",
    status: "OPEN",
    pincodesCovered: "500081, 500032, 500084, 500033, 500090, 500016",
    activeBenchCount: 12
  },
  {
    id: "hub-cok",
    name: "Kochi SmartCity Hub",
    state: "Kerala",
    city: "Kochi",
    address: "#2B, Metro Pillar 482, MG Road, Ernakulam, Kochi, Kerala 682016",
    landmark: "Opposite Maharaja's College Ground Metro Station",
    phone: "+91 484 235 7890",
    mobile: "+91 97450 67890",
    whatsapp: "919745067890",
    email: "kochi@fixora.in",
    hours: "Mon - Sat: 09:30 AM – 08:00 PM • Sun: Closed",
    leadTech: "Binu Mathew (Corrosion & Liquid Damage Recovery Specialist)",
    mapUrl: "https://maps.google.com/?q=MG+Road+Ernakulam+Kochi",
    status: "OPEN",
    pincodesCovered: "682016, 682024, 682030, 682011, 682035",
    activeBenchCount: 8
  },
  {
    id: "hub-cbe",
    name: "Coimbatore Western Hub",
    state: "Tamil Nadu",
    city: "Coimbatore",
    address: "#104, D.B. Road, RS Puram, Coimbatore, Tamil Nadu 641002",
    landmark: "Near Thiruvenkataswamy Road Intersection",
    phone: "+91 422 254 3210",
    mobile: "+91 94420 54321",
    whatsapp: "919442054321",
    email: "coimbatore@fixora.in",
    hours: "Mon - Sat: 09:30 AM – 08:00 PM • Sun: 10:00 AM – 02:00 PM",
    leadTech: "P. Ramesh Kumar (Hardware & Thermal Diagnostics)",
    mapUrl: "https://maps.google.com/?q=DB+Road+RS+Puram+Coimbatore",
    status: "OPEN",
    pincodesCovered: "641002, 641001, 641018, 641012, 641004",
    activeBenchCount: 7
  }
];

// Initial Seed Data
const DEFAULT_STORE = {
  hubs: SOUTH_INDIA_HUBS,
  repairs: [
    {
      repairId: "FIX-2026-1042",
      trackingToken: "tk_9f82a17b",
      customerName: "Kavita Sharma",
      customerPhone: "+91 98450 12345",
      customerEmail: "kavita.sharma@example.com",
      hubId: "hub-blr",
      hubName: "Bengaluru Regional Flagship Hub",
      serviceCity: "Bengaluru",
      serviceState: "Karnataka",
      deviceCategory: "Smartphone",
      deviceBrand: "Apple",
      deviceModel: "iPhone 14 Pro",
      serialOrImei: "358921094821034",
      issues: ["Broken or cracked display"],
      problemDescription: "OLED matrix cracked on lower quadrant, touch digitizer erratic. TrueTone data read cleanly for migration.",
      serviceType: "WALK_IN",
      status: "REPAIR_IN_PROGRESS",
      statusIndex: 5,
      appointmentDate: "2026-10-21",
      appointmentSlot: "10:00 AM - 11:30 AM",
      assignedTech: "Rajesh Kumar (Senior Level 3)",
      partsCost: 2400,
      laborCost: 600,
      taxAmount: 540,
      totalCost: 3540,
      estimateApproved: true,
      paymentStatus: "PAID",
      paymentMethod: "UPI (Razorpay)",
      warrantyDays: 90,
      qcPassed: ["Display Calibration", "Face ID / Sensors", "Haptic Touch"],
      createdAt: "2026-10-21"
    },
    {
      repairId: "FIX-2026-2089",
      trackingToken: "tk_4a11c88d",
      customerName: "Amitabh Verma",
      customerPhone: "+91 97112 34567",
      customerEmail: "amitabh.verma@example.com",
      hubId: "hub-chn",
      hubName: "Chennai Central Technical Hub",
      serviceCity: "Chennai",
      serviceState: "Tamil Nadu",
      deviceCategory: "Smartphone",
      deviceBrand: "Samsung",
      deviceModel: "Galaxy S23 Ultra",
      serialOrImei: "359871029481234",
      issues: ["Battery draining quickly", "Charging port issue"],
      problemDescription: "Device battery drops 40% in 1 hour. Fast charging not initiating.",
      serviceType: "PICKUP_DELIVERY",
      status: "AWAITING_CUSTOMER_APPROVAL",
      statusIndex: 3,
      appointmentDate: "2026-10-20",
      appointmentSlot: "02:30 PM - 04:00 PM",
      assignedTech: "K. Senthil Nathan (BGA Lead)",
      partsCost: 1950,
      laborCost: 450,
      taxAmount: 432,
      totalCost: 2832,
      estimateApproved: false,
      paymentStatus: "PENDING",
      paymentMethod: null,
      warrantyDays: 180,
      qcPassed: [],
      createdAt: "2026-10-20"
    },
    {
      repairId: "FIX-2026-3014",
      trackingToken: "tk_7c29e44f",
      customerName: "Pooja Reddy",
      customerPhone: "+91 99001 22334",
      customerEmail: "pooja.reddy@example.com",
      hubId: "hub-hyd",
      hubName: "Hyderabad Hitec City Hub",
      serviceCity: "Hyderabad",
      serviceState: "Telangana",
      deviceCategory: "Laptop",
      deviceBrand: "Dell",
      deviceModel: "XPS 15 9520",
      serialOrImei: "DLXPS9520K812",
      issues: ["Motherboard repair"],
      problemDescription: "Short circuit on 19V rail after voltage surge. Mosfet replaced and thermal repasted.",
      serviceType: "WALK_IN",
      status: "COMPLETED",
      statusIndex: 9,
      appointmentDate: "2026-10-18",
      appointmentSlot: "12:00 PM - 01:30 PM",
      assignedTech: "V. Srinivas Rao (Cleanroom Lead)",
      partsCost: 3200,
      laborCost: 1200,
      taxAmount: 792,
      totalCost: 5192,
      estimateApproved: true,
      paymentStatus: "PAID",
      paymentMethod: "Card (Razorpay)",
      warrantyDays: 90,
      qcPassed: ["Display Calibration", "Thermal Stress", "Audio & Mic", "Fast Charge Test"],
      createdAt: "2026-10-18"
    }
  ],
  inquiries: [
    {
      id: "INQ-2026-801",
      customerName: "Dr. Anirudh Venkat",
      customerEmail: "anirudh.v@hospital.org",
      customerPhone: "+91 98401 23456",
      preferredHub: "hub-chn",
      hubName: "Chennai Central Technical Hub (T. Nagar)",
      deviceInfo: "iPad Pro 12.9 (M2)",
      issueSummary: "Screen digitizer cracked after OT desk fall. Need genuine Apple display with TrueTone within 24 hours.",
      servicePreference: "Doorstep Pickup (Adyar, Chennai)",
      status: "NEW",
      createdAt: "2026-10-28 10:15",
      notes: "Express priority requested. Customer ready for estimate."
    },
    {
      id: "INQ-2026-784",
      customerName: "Deepa Nambiar",
      customerEmail: "deepa.nambiar@techsol.in",
      customerPhone: "+91 97451 98765",
      preferredHub: "hub-cok",
      hubName: "Kochi SmartCity Hub (MG Road)",
      deviceInfo: "MacBook Air M1",
      issueSummary: "Liquid coffee spill on keyboard. Trackpad clicking but keys sticky and power button unresponsive.",
      servicePreference: "Walk-in Hub",
      status: "IN_REVIEW",
      createdAt: "2026-10-27 16:40",
      notes: "Advised customer not to power on. Ultrasonic PCB wash scheduled."
    },
    {
      id: "INQ-2026-752",
      customerName: "Raghavendra Rao",
      customerEmail: "raghav.rao@startupblr.com",
      customerPhone: "+91 99800 55443",
      preferredHub: "hub-blr",
      hubName: "Bengaluru Regional Flagship Hub (Koramangala)",
      deviceInfo: "OnePlus 11 5G",
      issueSummary: "Green line issue appearing vertically on AMOLED display after software update.",
      servicePreference: "Walk-in Hub",
      status: "CONTACTED",
      createdAt: "2026-10-27 11:20",
      notes: "Quote of ₹5,200 shared via WhatsApp. Customer visiting hub tomorrow 11 AM."
    }
  ],
  inventory: [
    { sku: "DISP-IP14-01", name: "iPhone 14 Pro Super Retina OLED", category: "Display", brand: "Apple", cost: 1800, selling: 2400, stock: 14, minStock: 5, hub: "Bengaluru Hub" },
    { sku: "BATT-S23-08", name: "Samsung Galaxy S23 Ultra Battery", category: "Battery", brand: "Samsung", cost: 850, selling: 1200, stock: 9, minStock: 4, hub: "Chennai Hub" },
    { sku: "PORT-USBC-PIX", name: "Google Pixel 8 Pro USB-C Sub-board", category: "Charging Port", brand: "Google", cost: 420, selling: 750, stock: 3, minStock: 5, hub: "Hyderabad Hub" },
    { sku: "CAM-IP13-03", name: "iPhone 13 Dual Camera Sensor Module", category: "Camera", brand: "Apple", cost: 950, selling: 1400, stock: 6, minStock: 3, hub: "Bengaluru Hub" },
    { sku: "IC-PMIC-UNIV", name: "Qualcomm PM8350 Power Management IC", category: "Motherboard IC", brand: "Multi-Brand", cost: 350, selling: 900, stock: 18, minStock: 6, hub: "Kochi Hub" },
    { sku: "DISP-OP11-02", name: "OnePlus 11 Fluid AMOLED 120Hz Panel", category: "Display", brand: "OnePlus", cost: 3800, selling: 5200, stock: 5, minStock: 3, hub: "Bengaluru Hub" }
  ],
  audit: [
    { timestamp: "2026-10-28 10:15", action: "NEW_INQUIRY_RECEIVED", entity: "Inquiry INQ-2026-801", user: "Customer (Web Portal)", details: "Dr. Anirudh Venkat requested iPad Pro 12.9 display service for Chennai Hub" },
    { timestamp: "2026-10-27 16:40", action: "NEW_INQUIRY_RECEIVED", entity: "Inquiry INQ-2026-784", user: "Customer (Web Portal)", details: "Deepa Nambiar submitted liquid spill inquiry for Kochi Hub" },
    { timestamp: "2026-10-21 14:15", action: "PAYMENT_VERIFIED", entity: "Payment #RZP-90214", user: "system (Razorpay Gateway)", details: "Amount: ₹3,540 verified via HMAC signature (Bengaluru Hub)" },
    { timestamp: "2026-10-21 12:40", action: "STATUS_UPDATE", entity: "Repair FIX-2026-1042", user: "Rajesh Kumar (Tech)", details: "Status advanced to REPAIR_IN_PROGRESS" }
  ],
  reviews: [
    {
      id: "rev-1",
      customerName: "Karthikeyan Ramamurthy",
      location: "T. Nagar, Chennai",
      hubName: "Chennai Hub",
      rating: 5,
      date: "25 Oct 2026",
      device: "iPhone 13 Pro Max",
      service: "Screen Replacement",
      comment: "Super impressed with the T. Nagar hub! The TrueTone calibration works flawlessly, and they completed it in 50 minutes while I waited in their clean ESD lounge. Certified 90-day warranty card issued on spot."
    },
    {
      id: "rev-2",
      customerName: "Shweta Hegde",
      location: "Indiranagar, Bengaluru",
      hubName: "Bengaluru Hub",
      rating: 5,
      date: "23 Oct 2026",
      device: "MacBook Pro M1 14\"",
      service: "Liquid Damage Recovery",
      comment: "Authorized service center asked for ₹48,000 for full logic board swap. Rajesh Kumar at Fixora Koramangala repaired the power rail IC for under ₹6,000! Saved all my architecture project files."
    },
    {
      id: "rev-3",
      customerName: "Syed Fazil Hussain",
      location: "Madhapur, Hyderabad",
      hubName: "Hyderabad Hub",
      rating: 5,
      date: "21 Oct 2026",
      device: "Samsung Galaxy S22 Ultra",
      service: "Battery Replacement",
      comment: "Genuine OEM 5000mAh battery installed with zero gaps. Water resistance seal was re-applied properly. Real-time SMS and tracking portal kept me updated throughout."
    },
    {
      id: "rev-4",
      customerName: "Aswathy Menon",
      location: "Kakkanad, Kochi",
      hubName: "Kochi Hub",
      rating: 5,
      date: "19 Oct 2026",
      device: "Google Pixel 7 Pro",
      service: "Charging Port Sub-board",
      comment: "Fast doorstep pickup in Kakkanad InfoPark and returned same evening. Super clean GST invoice and seamless Razorpay UPI payment."
    }
  ]
};

// Database Read/Write Helpers
function readDb() {
  try {
    if (!fs.existsSync(DB_FILE)) {
      fs.writeFileSync(DB_FILE, JSON.stringify(DEFAULT_STORE, null, 2), 'utf-8');
      return DEFAULT_STORE;
    }
    const raw = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading database file, using default store:', err);
    return DEFAULT_STORE;
  }
}

function writeDb(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error writing database file:', err);
    return false;
  }
}

// ----------------------------------------------------
// REST API ENDPOINTS (Stores live data into the site)
// ----------------------------------------------------

// 1. Health check & business profile
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'Fixora Service Hub - South India Regional HQ',
    region: 'South India (Bengaluru, Chennai, Hyderabad, Kochi, Coimbatore)',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'production'
  });
});

// 2. Hubs endpoint
app.get('/api/hubs', (req, res) => {
  const db = readDb();
  res.json({ success: true, hubs: db.hubs || SOUTH_INDIA_HUBS });
});

// 3. Repairs endpoints
app.get('/api/repairs', (req, res) => {
  const db = readDb();
  res.json({ success: true, data: db.repairs || [] });
});

app.get('/api/repairs/:id', (req, res) => {
  const db = readDb();
  const id = req.params.id.toUpperCase();
  const found = (db.repairs || []).find(r => r.repairId.toUpperCase() === id || (r.trackingToken && r.trackingToken.toUpperCase() === id));
  if (found) {
    res.json({ success: true, data: found });
  } else {
    res.status(404).json({ success: false, message: 'Repair order not found' });
  }
});

app.post('/api/repairs', (req, res) => {
  const db = readDb();
  const newOrder = req.body;
  if (!newOrder.repairId) {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    newOrder.repairId = `FIX-2026-${randomNum}`;
  }
  if (!newOrder.createdAt) {
    newOrder.createdAt = new Date().toISOString().substring(0, 10);
  }
  db.repairs = db.repairs || [];
  db.repairs.unshift(newOrder);

  // Add audit log
  db.audit = db.audit || [];
  db.audit.unshift({
    timestamp: new Date().toISOString().replace('T', ' ').substring(0, 16),
    action: "NEW_BOOKING_CREATED",
    entity: `Repair ${newOrder.repairId}`,
    user: newOrder.customerName || "Customer",
    details: `Customer registered ticket for ${newOrder.deviceBrand || ''} ${newOrder.deviceModel || ''} (${newOrder.hubName || 'South India Hub'})`
  });

  writeDb(db);
  res.status(201).json({ success: true, data: newOrder });
});

app.put('/api/repairs/:id', (req, res) => {
  const db = readDb();
  const id = req.params.id.toUpperCase();
  const idx = (db.repairs || []).findIndex(r => r.repairId.toUpperCase() === id);
  if (idx !== -1) {
    db.repairs[idx] = { ...db.repairs[idx], ...req.body };
    writeDb(db);
    res.json({ success: true, data: db.repairs[idx] });
  } else {
    res.status(404).json({ success: false, message: 'Ticket not found' });
  }
});

// 4. Contact Inquiries Endpoints (Live Inquiries from South India Customers)
app.get('/api/inquiries', (req, res) => {
  const db = readDb();
  res.json({ success: true, data: db.inquiries || [] });
});

app.post('/api/inquiries', (req, res) => {
  const db = readDb();
  const inquiry = req.body;
  const count = (db.inquiries || []).length + 101;
  inquiry.id = inquiry.id || `INQ-2026-${count}`;
  inquiry.createdAt = inquiry.createdAt || new Date().toISOString().replace('T', ' ').substring(0, 16);
  inquiry.status = inquiry.status || 'NEW';

  db.inquiries = db.inquiries || [];
  db.inquiries.unshift(inquiry);

  // Add audit entry
  db.audit = db.audit || [];
  db.audit.unshift({
    timestamp: inquiry.createdAt,
    action: "NEW_INQUIRY_RECEIVED",
    entity: `Inquiry ${inquiry.id}`,
    user: inquiry.customerName || "Web Lead",
    details: `${inquiry.customerName} submitted technical inquiry for ${inquiry.deviceInfo || 'device'} (${inquiry.hubName || 'South India Hub'})`
  });

  writeDb(db);
  res.status(201).json({ success: true, data: inquiry });
});

app.put('/api/inquiries/:id', (req, res) => {
  const db = readDb();
  const id = req.params.id.toUpperCase();
  const idx = (db.inquiries || []).findIndex(i => i.id.toUpperCase() === id);
  if (idx !== -1) {
    db.inquiries[idx] = { ...db.inquiries[idx], ...req.body };
    writeDb(db);
    res.json({ success: true, data: db.inquiries[idx] });
  } else {
    res.status(404).json({ success: false, message: 'Inquiry not found' });
  }
});

// 5. Inventory Endpoints
app.get('/api/inventory', (req, res) => {
  const db = readDb();
  res.json({ success: true, data: db.inventory || [] });
});

app.post('/api/inventory', (req, res) => {
  const db = readDb();
  const item = req.body;
  db.inventory = db.inventory || [];
  db.inventory.push(item);
  writeDb(db);
  res.status(201).json({ success: true, data: item });
});

app.put('/api/inventory/:sku', (req, res) => {
  const db = readDb();
  const sku = req.params.sku.toUpperCase();
  const idx = (db.inventory || []).findIndex(i => i.sku.toUpperCase() === sku);
  if (idx !== -1) {
    db.inventory[idx] = { ...db.inventory[idx], ...req.body };
    writeDb(db);
    res.json({ success: true, data: db.inventory[idx] });
  } else {
    res.status(404).json({ success: false, message: 'SKU not found' });
  }
});

// 6. Audit logs & reviews
app.get('/api/audit', (req, res) => {
  const db = readDb();
  res.json({ success: true, data: db.audit || [] });
});

app.get('/api/reviews', (req, res) => {
  const db = readDb();
  res.json({ success: true, data: db.reviews || [] });
});

app.post('/api/reviews', (req, res) => {
  const db = readDb();
  const review = req.body;
  review.id = 'rev-' + Date.now();
  review.date = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  db.reviews = db.reviews || [];
  db.reviews.unshift(review);
  writeDb(db);
  res.status(201).json({ success: true, data: review });
});

// 7. Reset demo data endpoint
app.post('/api/reset-demo', (req, res) => {
  writeDb(DEFAULT_STORE);
  res.json({ success: true, message: 'Data reset to South India initial seed dataset' });
});

// Fallback to index.html for SPA routing
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`Fixora Service Hub - South India Regional HQ`);
  console.log(`Live Server running at http://localhost:${PORT}`);
  console.log(`Active Hubs: Bengaluru, Chennai, Hyderabad, Kochi, Coimbatore`);
  console.log(`Database storage: ${DB_FILE}`);
  console.log(`Ready for 1-click deployment on GitHub Pages or Node.js!`);
  console.log(`=======================================================`);
});