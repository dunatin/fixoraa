// Initial Seed Data for immediate zero-config commercial demo
    const DEFAULT_REPAIRS = [
      {
        repairId: "FIX-2026-1042",
        trackingToken: "tk_9f82a17b",
        customerName: "Kavita Sharma",
        customerPhone: "+91 98450 12345",
        customerEmail: "kavita.sharma@example.com",
        deviceCategory: "Smartphone",
        deviceBrand: "Apple",
        deviceModel: "iPhone 14 Pro",
        serialOrImei: "358921094821034",
        issues: ["Broken or cracked display"],
        problemDescription: "OLED matrix cracked on lower quadrant, touch digitizer erratic. TrueTone needs migration.",
        serviceType: "WALK_IN",
        status: "REPAIR_IN_PROGRESS",
        statusIndex: 5, // 0 to 10
        appointmentDate: "2026-10-21",
        appointmentSlot: "10:00 AM - 11:30 AM",
        assignedTech: "Rajesh Kumar (Level 3)",
        partsCost: 2400,
        laborCost: 600,
        taxAmount: 540,
        totalCost: 3540,
        estimateApproved: true,
        paymentStatus: "PAID",
        paymentMethod: "UPI (Razorpay)",
        warrantyDays: 90,
        qcPassed: ["Display Calibration", "Face ID / Sensors"],
        createdAt: "2026-10-21"
      },
      {
        repairId: "FIX-2026-2089",
        trackingToken: "tk_4a11c88d",
        customerName: "Amitabh Verma",
        customerPhone: "+91 97112 34567",
        customerEmail: "amitabh.verma@example.com",
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
        assignedTech: "Sunil Shenoy (Senior Tech)",
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
        deviceCategory: "Laptop",
        deviceBrand: "Dell",
        deviceModel: "XPS 15 9520",
        serialOrImei: "DLXPS9520K812",
        issues: ["Motherboard repair"],
        problemDescription: "Short circuit on 19V rail after power surge. Power button blinking amber.",
        serviceType: "WALK_IN",
        status: "COMPLETED",
        statusIndex: 9,
        appointmentDate: "2026-10-18",
        appointmentSlot: "12:00 PM - 01:30 PM",
        assignedTech: "Rajesh Kumar (Level 3)",
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
    ];

    const DEFAULT_INVENTORY = [
      { sku: "DISP-IP14-01", name: "iPhone 14 Pro Super Retina OLED", category: "Display", brand: "Apple", cost: 1800, selling: 2400, stock: 14, minStock: 5 },
      { sku: "BATT-S23-08", name: "Samsung Galaxy S23 Ultra Battery", category: "Battery", brand: "Samsung", cost: 850, selling: 1200, stock: 9, minStock: 4 },
      { sku: "PORT-USBC-PIX", name: "Google Pixel 8 Pro USB-C Sub-board", category: "Charging Port", brand: "Google", cost: 420, selling: 750, stock: 3, minStock: 5 },
      { sku: "CAM-IP13-03", name: "iPhone 13 Dual Camera Sensor Module", category: "Camera", brand: "Apple", cost: 950, selling: 1400, stock: 6, minStock: 3 },
      { sku: "IC-PMIC-UNIV", name: "Qualcomm PM8350 Power IC", category: "Motherboard IC", brand: "Multi-Brand", cost: 350, selling: 900, stock: 18, minStock: 6 }
    ];

    const DEFAULT_AUDIT = [
      { timestamp: "2026-10-21 14:15", action: "PAYMENT_VERIFIED", entity: "Payment #RZP-90214", user: "system (Razorpay Webhook)", details: "Amount: ₹3,540 verified via HMAC signature" },
      { timestamp: "2026-10-21 12:40", action: "STATUS_UPDATE", entity: "Repair FIX-2026-1042", user: "Rajesh Kumar (Tech)", details: "Status advanced to REPAIR_IN_PROGRESS" },
      { timestamp: "2026-10-21 10:20", action: "ESTIMATE_APPROVED", entity: "Estimate #EST-1042", user: "Kavita Sharma (Customer)", details: "Customer approved quote of ₹3,540" },
      { timestamp: "2026-10-20 16:30", action: "STOCK_DEDUCTED", entity: "Inventory DISP-IP14-01", user: "Rajesh Kumar (Tech)", details: "1 Unit allocated to FIX-2026-1042" }
    ];

    const REPAIR_STATUSES = [
      { key: "BOOKING_CONFIRMED", label: "Booking Confirmed" },
      { key: "DEVICE_RECEIVED", label: "Device Received" },
      { key: "INITIAL_DIAGNOSIS", label: "Initial Diagnosis" },
      { key: "AWAITING_CUSTOMER_APPROVAL", label: "Awaiting Customer Approval" },
      { key: "WAITING_FOR_SPARE_PARTS", label: "Waiting for Parts" },
      { key: "REPAIR_IN_PROGRESS", label: "Repair in Progress" },
      { key: "QUALITY_TESTING", label: "Quality Testing" },
      { key: "READY_FOR_COLLECTION", label: "Ready for Collection" },
      { key: "OUT_FOR_DELIVERY", label: "Out for Delivery" },
      { key: "COMPLETED", label: "Completed" },
      { key: "CANCELLED", label: "Cancelled" }
    ];

    // Local Storage State Handlers
    function getStoredRepairs() {
      const data = localStorage.getItem("fixora_repairs");
      return data ? JSON.parse(data) : DEFAULT_REPAIRS;
    }
    function saveRepairs(list) {
      localStorage.setItem("fixora_repairs", JSON.stringify(list));
    }
    function getStoredInventory() {
      const data = localStorage.getItem("fixora_inventory");
      return data ? JSON.parse(data) : DEFAULT_INVENTORY;
    }
    function saveInventory(list) {
      localStorage.setItem("fixora_inventory", JSON.stringify(list));
    }
    function getStoredAudit() {
      const data = localStorage.getItem("fixora_audit");
      return data ? JSON.parse(data) : DEFAULT_AUDIT;
    }
    function addAuditLog(action, entity, user, details) {
      const logs = getStoredAudit();
      const now = new Date().toISOString().replace('T', ' ').substring(0, 16);
      logs.unshift({ timestamp: now, action, entity, user, details });
      localStorage.setItem("fixora_audit", JSON.stringify(logs));
    }

    // Portal Switching Logic
    function switchPortal(portalName) {
      document.querySelectorAll('.portal-section').forEach(el => el.classList.remove('active'));
      const pubView = document.getElementById('view-public');
      
      // Update top bar buttons
      document.querySelectorAll('.demo-role-btn').forEach(btn => btn.classList.remove('active'));
      
      if (portalName === 'public') {
        pubView.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        pubView.style.display = 'none';
        const target = document.getElementById('view-' + portalName);
        if (target) target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // Highlight button
      const buttons = document.querySelectorAll('.demo-role-btn');
      if (portalName === 'public' && buttons[0]) buttons[0].classList.add('active');
      if (portalName === 'customer' && buttons[1]) buttons[1].classList.add('active');
      if (portalName === 'technician' && buttons[2]) buttons[2].classList.add('active');
      if (portalName === 'admin' && buttons[3]) buttons[3].classList.add('active');

      renderAllTables();
    }

    // Smooth Scroll Helper
    function scrollToId(id) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    // Wizard Navigation & State
    let currentWizardStep = 1;
    let selectedCategory = "Smartphone";
    let selectedServiceType = "WALK_IN";

    function selectDeviceCategory(category, el) {
      selectedCategory = category;
      document.querySelectorAll('.category-selector-grid .selectable-card').forEach(c => c.classList.remove('selected'));
      el.classList.add('selected');
      updateModelsList();
    }

    function selectServiceType(type, el) {
      selectedServiceType = type;
      el.parentElement.querySelectorAll('.selectable-card').forEach(c => c.classList.remove('selected'));
      el.classList.add('selected');
    }

    function updateModelsList() {
      const brand = document.getElementById('bookingBrand').value;
      const datalist = document.getElementById('modelsDataList');
      datalist.innerHTML = '';

      const modelsMap = {
        "Apple": ["iPhone 15 Pro Max", "iPhone 14 Pro", "iPhone 13", "iPad Pro 11", "MacBook Pro M2"],
        "Samsung": ["Galaxy S23 Ultra", "Galaxy S22", "Galaxy Z Fold 5", "Galaxy Tab S9"],
        "Google Pixel": ["Pixel 8 Pro", "Pixel 7a", "Pixel 6"],
        "Dell": ["XPS 15", "Inspiron 16", "Latitude 5430"],
        "HP": ["Spectre x360", "Envy 14", "Pavilion 15"]
      };

      const models = modelsMap[brand] || ["Standard Model Pro", "Standard Model Ultra"];
      models.forEach(m => {
        const opt = document.createElement('option');
        opt.value = m;
        datalist.appendChild(opt);
      });
      document.getElementById('bookingModel').value = models[0] || '';
    }

    function goToWizardStep(step) {
      currentWizardStep = step;
      document.querySelectorAll('.wizard-step-content').forEach(c => c.classList.remove('active'));
      const targetStep = document.getElementById('wizard-step-1'.replace('1', step));
      if (targetStep) targetStep.classList.add('active');

      // Update stepper tabs
      for (let i = 1; i <= 5; i++) {
        const tab = document.getElementById('tab-step-' + i);
        if (tab) {
          tab.classList.remove('active');
          if (i < step) tab.classList.add('completed');
          if (i === step) tab.classList.add('active');
        }
      }
    }

    function calculateEstimate() {
      const checkedBoxes = document.querySelectorAll('input[name="bookingIssues"]:checked');
      let baseParts = 0;
      checkedBoxes.forEach(cb => {
        baseParts += parseInt(cb.dataset.price || '800');
      });
      const labor = 500;
      const minEst = baseParts + labor;
      const maxEst = Math.round(minEst * 1.25);
      document.getElementById('wizardEstimatedCost').innerText = `₹${minEst.toLocaleString()} - ₹${maxEst.toLocaleString()}`;
    }

    // Submit Booking Order
    function submitBookingOrder() {
      const brand = document.getElementById('bookingBrand').value;
      const model = document.getElementById('bookingModel').value || "Device";
      const desc = document.getElementById('bookingDescription').value;
      const custName = document.getElementById('bookingCustName').value;
      const custPhone = document.getElementById('bookingCustPhone').value;
      const custEmail = document.getElementById('bookingCustEmail').value;
      const date = document.getElementById('bookingDate').value;
      const slot = document.getElementById('bookingSlot').value;
      const serial = document.getElementById('bookingSerial').value;

      const checkedIssues = [];
      document.querySelectorAll('input[name="bookingIssues"]:checked').forEach(cb => checkedIssues.push(cb.value));

      // Generate Unique Readable ID: FIX-2026-XXXX
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const newRepairId = `FIX-2026-${randomNum}`;
      const trackingToken = "tk_" + Math.random().toString(36).substring(2, 10);

      const newOrder = {
        repairId: newRepairId,
        trackingToken: trackingToken,
        customerName: custName,
        customerPhone: custPhone,
        customerEmail: custEmail,
        deviceCategory: selectedCategory,
        deviceBrand: brand,
        deviceModel: model,
        serialOrImei: serial,
        issues: checkedIssues.length ? checkedIssues : ["General Inspection"],
        problemDescription: desc,
        serviceType: selectedServiceType,
        status: "BOOKING_CONFIRMED",
        statusIndex: 0,
        appointmentDate: date,
        appointmentSlot: slot,
        assignedTech: "Unassigned (Auto-Queue)",
        partsCost: 1800,
        laborCost: 500,
        taxAmount: 414,
        totalCost: 2714,
        estimateApproved: false,
        paymentStatus: "PENDING",
        paymentMethod: null,
        warrantyDays: 90,
        qcPassed: [],
        createdAt: new Date().toISOString().substring(0, 10)
      };

      const repairs = getStoredRepairs();
      repairs.unshift(newOrder);
      saveRepairs(repairs);

      addAuditLog("NEW_BOOKING_CREATED", `Repair ${newRepairId}`, custName, `Customer booked ${brand} ${model} for ${slot}`);

      // Set confirmation UI
      document.getElementById('confirmRepairId').innerText = newRepairId;
      document.getElementById('confirmDevice').innerText = `${brand} ${model}`;
      document.getElementById('confirmServiceType').innerText = selectedServiceType.replace('_', ' ');
      document.getElementById('confirmAppointment').innerText = `${date}, ${slot}`;

      goToWizardStep(5);
      showToast(`Success! Repair ticket ${newRepairId} registered.`);
    }

    function trackFromConfirmation() {
      const repId = document.getElementById('confirmRepairId').innerText;
      document.getElementById('trackInput').value = repId;
      switchPortal('public');
      scrollToId('tracking');
      searchRepairTracking();
    }

    // Tracking Module
    function trackSample(id) {
      document.getElementById('trackInput').value = id;
      scrollToId('tracking');
      searchRepairTracking();
    }

    let activeTrackingOrder = null;

    function searchRepairTracking() {
      const query = document.getElementById('trackInput').value.trim().toUpperCase();
      const repairs = getStoredRepairs();
      const found = repairs.find(r => r.repairId.toUpperCase() === query || (r.trackingToken && r.trackingToken.toUpperCase() === query));

      if (!found) {
        showToast("Ticket not found. Try sample ID: FIX-2026-1042", true);
        return;
      }

      activeTrackingOrder = found;

      document.getElementById('trackResId').innerText = found.repairId;
      document.getElementById('trackResDevice').innerText = `${found.deviceBrand} ${found.deviceModel} • Booked on ${found.createdAt}`;
      document.getElementById('trackResStatusBadge').innerText = found.status.replace(/_/g, ' ');
      document.getElementById('trackDiagnosisFindings').innerText = found.problemDescription;

      document.getElementById('trackPartsSubtotal').innerText = `₹${found.partsCost.toFixed(2)}`;
      document.getElementById('trackLaborFee').innerText = `₹${found.laborCost.toFixed(2)}`;
      document.getElementById('trackTaxAmount').innerText = `₹${found.taxAmount.toFixed(2)}`;
      document.getElementById('trackTotalPayable').innerText = `₹${found.totalCost.toFixed(2)}`;

      // Render 11-step timeline nodes
      const timelineContainer = document.getElementById('timelineStepNodes');
      timelineContainer.innerHTML = '';

      REPAIR_STATUSES.forEach((st, idx) => {
        const node = document.createElement('div');
        node.className = 'timeline-node';
        if (idx < found.statusIndex) node.classList.add('completed');
        if (idx === found.statusIndex) node.classList.add('active');

        node.innerHTML = `
          <div class="node-icon">${idx < found.statusIndex ? '<i class="fa-solid fa-check"></i>' : (idx + 1)}</div>
          <div class="node-label">${st.label}</div>
        `;
        timelineContainer.appendChild(node);
      });

      showToast(`Loaded live records for ${found.repairId}`);
    }

    // Modal Helpers
    function openModal(id) {
      const el = document.getElementById(id);
      if (el) el.classList.add('active');
    }
    function closeModal(id) {
      const el = document.getElementById(id);
      if (el) el.classList.remove('active');
    }

    function openApprovalModal() {
      if (!activeTrackingOrder) searchRepairTracking();
      openModal('modalApproval');
    }

    function approveEstimate() {
      if (!activeTrackingOrder) return;
      activeTrackingOrder.estimateApproved = true;
      if (activeTrackingOrder.statusIndex < 5) {
        activeTrackingOrder.statusIndex = 5;
        activeTrackingOrder.status = "REPAIR_IN_PROGRESS";
      }
      updateOrderInStorage(activeTrackingOrder);
      addAuditLog("ESTIMATE_APPROVED", `Repair ${activeTrackingOrder.repairId}`, "Customer", "Customer approved estimate through tracking portal");
      closeModal('modalApproval');
      searchRepairTracking();
      showToast("Estimate approved! Technician will commence bench work.");
    }

    function rejectEstimate() {
      if (!activeTrackingOrder) return;
      activeTrackingOrder.estimateApproved = false;
      activeTrackingOrder.status = "CANCELLED";
      activeTrackingOrder.statusIndex = 10;
      updateOrderInStorage(activeTrackingOrder);
      addAuditLog("ESTIMATE_REJECTED", `Repair ${activeTrackingOrder.repairId}`, "Customer", "Customer declined estimate");
      closeModal('modalApproval');
      searchRepairTracking();
      showToast("Estimate rejected. Ticket marked for device return.");
    }

    function openPaymentGatewayModal() {
      if (!activeTrackingOrder) searchRepairTracking();
      openModal('modalPayment');
    }

    function selectPaymentMethod(method, el) {
      document.querySelectorAll('.payment-method-item').forEach(i => i.classList.remove('selected'));
      el.classList.add('selected');
    }

    function simulatePaymentSuccess() {
      if (!activeTrackingOrder) return;
      activeTrackingOrder.paymentStatus = "PAID";
      activeTrackingOrder.paymentMethod = "Razorpay Test Verified";
      updateOrderInStorage(activeTrackingOrder);

      addAuditLog("PAYMENT_SUCCESS", `Repair ${activeTrackingOrder.repairId}`, "Razorpay Gateway", `Payment of ₹${activeTrackingOrder.totalCost} reconciled.`);
      closeModal('modalPayment');
      searchRepairTracking();
      showToast("Payment Successful! Razorpay payment ID: rzp_pay_" + Math.random().toString(36).substring(2, 9));
      openInvoiceModal();
    }

    function openInvoiceModal() {
      if (!activeTrackingOrder) searchRepairTracking();
      if (activeTrackingOrder) {
        document.getElementById('invNumber').innerText = "INV-" + activeTrackingOrder.repairId.replace("FIX-", "");
        document.getElementById('invRepairId').innerText = activeTrackingOrder.repairId;
        document.getElementById('invCustName').innerText = activeTrackingOrder.customerName;
        document.getElementById('invCustEmail').innerText = activeTrackingOrder.customerEmail;
        document.getElementById('invCustPhone').innerText = activeTrackingOrder.customerPhone;
        document.getElementById('invDeviceSpec').innerText = `${activeTrackingOrder.deviceBrand} ${activeTrackingOrder.deviceModel}`;
      }
      openModal('modalInvoice');
    }

    let activeTechEditingTicket = null;
    function openTechModal(repairId) {
      activeTechEditingTicket = repairId;
      openModal('modalTechUpdate');
    }

    function saveTechnicianUpdate() {
      if (!activeTechEditingTicket) return;
      const repairs = getStoredRepairs();
      const order = repairs.find(r => r.repairId === activeTechEditingTicket);
      if (!order) return;

      const newStatus = document.getElementById('techSelectStatus').value;
      const notes = document.getElementById('techNotes').value;
      const partDeducted = document.getElementById('techPartDeduct').value;

      order.status = newStatus;
      const statusIdx = REPAIR_STATUSES.findIndex(s => s.key === newStatus);
      if (statusIdx !== -1) order.statusIndex = statusIdx;

      // Inventory deduction if part selected
      if (partDeducted !== 'NONE') {
        const inv = getStoredInventory();
        const part = inv.find(p => p.sku === partDeducted);
        if (part && part.stock > 0) {
          part.stock -= 1;
          saveInventory(inv);
          addAuditLog("STOCK_DEDUCTED", `Part ${part.sku}`, "Rajesh Kumar (Tech)", `Deducted 1 unit for repair ${order.repairId}. New stock: ${part.stock}`);
        }
      }

      updateOrderInStorage(order);
      addAuditLog("STATUS_UPDATE", `Repair ${order.repairId}`, "Rajesh Kumar (Tech)", `Advanced status to ${newStatus}. Notes: ${notes}`);
      closeModal('modalTechUpdate');
      renderAllTables();
      showToast(`Status updated for ${order.repairId}`);
    }

    function updateOrderInStorage(order) {
      const repairs = getStoredRepairs();
      const idx = repairs.findIndex(r => r.repairId === order.repairId);
      if (idx !== -1) {
        repairs[idx] = order;
        saveRepairs(repairs);
      }
    }

    // Render Data Tables
    function renderAllTables() {
      const repairs = getStoredRepairs();
      const inventory = getStoredInventory();
      const audit = getStoredAudit();

      // Customer Table
      const custTbody = document.getElementById('customerRepairsTableBody');
      if (custTbody) {
        custTbody.innerHTML = '';
        repairs.forEach(r => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td><strong>${r.repairId}</strong></td>
            <td>${r.deviceBrand} ${r.deviceModel}</td>
            <td><small>${r.issues.join(', ')}</small></td>
            <td>${r.createdAt}</td>
            <td><span class="badge ${r.status === 'COMPLETED' ? 'badge-success' : 'badge-primary'}">${r.status.replace(/_/g, ' ')}</span></td>
            <td><strong>₹${r.totalCost}</strong></td>
            <td>
              <button class="btn btn-sm btn-outline-primary" onclick="trackSample('${r.repairId}'); switchPortal('public');">Track</button>
              <button class="btn btn-sm btn-secondary" onclick="trackSample('${r.repairId}'); openInvoiceModal();">Invoice</button>
            </td>
          `;
          custTbody.appendChild(tr);
        });
      }

      // Technician Table
      const techTbody = document.getElementById('technicianJobsTableBody');
      if (techTbody) {
        techTbody.innerHTML = '';
        repairs.forEach(r => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td><strong>${r.repairId}</strong></td>
            <td>${r.customerName} (${r.customerPhone})</td>
            <td>${r.deviceBrand} ${r.deviceModel}<br><small style="color:var(--text-muted);">${r.problemDescription}</small></td>
            <td><span class="badge badge-warning">${r.status.replace(/_/g, ' ')}</span></td>
            <td>
              <button class="btn btn-sm btn-primary" onclick="openTechModal('${r.repairId}')"><i class="fa-solid fa-wrench"></i> Update Status</button>
            </td>
          `;
          techTbody.appendChild(tr);
        });
      }

      // Admin Repairs Table
      const adminTbody = document.getElementById('adminRepairsTableBody');
      if (adminTbody) {
        adminTbody.innerHTML = '';
        repairs.forEach(r => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td><strong>${r.repairId}</strong></td>
            <td>${r.customerName}</td>
            <td>${r.deviceBrand} ${r.deviceModel}</td>
            <td>${r.assignedTech}</td>
            <td><span class="badge ${r.status === 'COMPLETED' ? 'badge-success' : 'badge-info'}">${r.status.replace(/_/g, ' ')}</span></td>
            <td><strong>₹${r.totalCost}</strong></td>
            <td><span class="badge ${r.paymentStatus === 'PAID' ? 'badge-success' : 'badge-warning'}">${r.paymentStatus}</span></td>
            <td>
              <button class="btn btn-sm btn-secondary" onclick="trackSample('${r.repairId}'); openInvoiceModal();">Receipt</button>
            </td>
          `;
          adminTbody.appendChild(tr);
        });
      }

      // Admin Inventory Table
      const invTbody = document.getElementById('adminInventoryTableBody');
      if (invTbody) {
        invTbody.innerHTML = '';
        inventory.forEach(p => {
          const tr = document.createElement('tr');
          const isLow = p.stock <= p.minStock;
          tr.innerHTML = `
            <td><code>${p.sku}</code></td>
            <td><strong>${p.name}</strong></td>
            <td>${p.category}</td>
            <td>${p.brand}</td>
            <td>₹${p.cost}</td>
            <td><strong>₹${p.selling}</strong></td>
            <td><span class="badge ${isLow ? 'badge-danger' : 'badge-success'}">${p.stock} units</span></td>
            <td>
              <button class="btn btn-sm btn-secondary" onclick="quickRestock('${p.sku}')"><i class="fa-solid fa-plus"></i> Restock +5</button>
            </td>
          `;
          invTbody.appendChild(tr);
        });
      }

      // Admin Audit Table
      const auditTbody = document.getElementById('adminAuditTableBody');
      if (auditTbody) {
        auditTbody.innerHTML = '';
        audit.slice(0, 15).forEach(a => {
          const tr = document.createElement('tr');
          tr.innerHTML = `
            <td><small>${a.timestamp}</small></td>
            <td><code>${a.action}</code></td>
            <td>${a.entity}</td>
            <td>${a.user}</td>
            <td><small>${a.details}</small></td>
          `;
          auditTbody.appendChild(tr);
        });
      }
    }

    function switchAdminTab(tab) {
      document.getElementById('adminTabContentRepairs').style.display = tab === 'repairs' ? 'block' : 'none';
      document.getElementById('adminTabContentInventory').style.display = tab === 'inventory' ? 'block' : 'none';
      document.getElementById('adminTabContentAudit').style.display = tab === 'audit' ? 'block' : 'none';

      document.getElementById('btnAdminTabRepairs').className = tab === 'repairs' ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-secondary';
      document.getElementById('btnAdminTabInventory').className = tab === 'inventory' ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-secondary';
      document.getElementById('btnAdminTabAudit').className = tab === 'audit' ? 'btn btn-sm btn-primary' : 'btn btn-sm btn-secondary';
    }

    function quickRestock(sku) {
      const inv = getStoredInventory();
      const item = inv.find(i => i.sku === sku);
      if (item) {
        item.stock += 5;
        saveInventory(inv);
        addAuditLog("RESTOCK_INVENTORY", `SKU ${sku}`, "Admin", `Added 5 units to stock. Current: ${item.stock}`);
        renderAllTables();
        showToast(`Added 5 units to ${item.name}`);
      }
    }

    function openNewStockModal() {
      openModal('modalNewStock');
    }

    function saveNewStockItem() {
      const name = document.getElementById('stockPartName').value;
      const sku = document.getElementById('stockSku').value;
      const cat = document.getElementById('stockCategory').value;
      const cost = parseFloat(document.getElementById('stockCost').value) || 0;
      const sell = parseFloat(document.getElementById('stockSelling').value) || 0;
      const qty = parseInt(document.getElementById('stockQty').value) || 0;

      if (!name || !sku) {
        showToast("Please provide part name and SKU", true);
        return;
      }

      const inv = getStoredInventory();
      inv.push({ sku, name, category: cat, brand: "Multi-Brand", cost, selling: sell, stock: qty, minStock: 5 });
      saveInventory(inv);
      addAuditLog("NEW_ITEM_CREATED", `SKU ${sku}`, "Admin", `Created catalog part ${name}`);
      closeModal('modalNewStock');
      renderAllTables();
      showToast(`Added ${name} to spare parts catalog`);
    }

    function resetDatabaseDemo() {
      localStorage.removeItem("fixora_repairs");
      localStorage.removeItem("fixora_inventory");
      localStorage.removeItem("fixora_audit");
      showToast("Demo data re-seeded to factory default!");
      renderAllTables();
    }

    // Toast helper
    function showToast(msg, isError = false) {
      const container = document.getElementById('toastContainer');
      const toast = document.createElement('div');
      toast.className = 'toast';
      if (isError) toast.style.background = '#ef4444';
      toast.innerHTML = `<i class="fa-solid ${isError ? 'fa-circle-exclamation' : 'fa-circle-info'}"></i> <span>${msg}</span>`;
      container.appendChild(toast);
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = '0.3s';
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    }

    // Initialize application on page load
    document.addEventListener('DOMContentLoaded', () => {
      searchRepairTracking();
      renderAllTables();
    });