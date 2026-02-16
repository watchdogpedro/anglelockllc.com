# Investor Data Room - Setup Guide 🔐

**Created:** February 15, 2026
**Status:** Ready for Testing & Document Upload

---

## 🎯 What Was Built

A **professional, gated investor data room** with NDA wall - the exact feature sophisticated investors expect from serious companies.

### Key Features:
- ✅ **NDA gate page** (`/investors`) - Professional legal agreement
- ✅ **Protected data room** (`/investors/data-room`) - Only accessible after NDA
- ✅ **Cookie-based access control** - 30-day NDA acceptance memory
- ✅ **Google Sheets integration** - Track all NDA submissions
- ✅ **Email notifications** - Instant alerts when investors access
- ✅ **Download tracking** - See which documents investors view
- ✅ **Document categorization** - 6 categories, 25+ documents
- ✅ **Status indicators** - Ready / Coming Soon / Available on Request
- ✅ **Professional design** - Aerospace aesthetic, trust signals

---

## 📋 How It Works

### User Flow:
1. **Investor clicks "Investors" in navigation** → Goes to `/investors`
2. **Fills out NDA form** → Name, email, company, investor type, investment range
3. **Accepts NDA terms** → Checkbox confirmation
4. **Submits form** → Data saved to Google Sheets + Email sent to you
5. **Cookie set** → 30-day access granted
6. **Redirected to data room** → `/investors/data-room`
7. **Downloads documents** → Each download tracked in Google Sheets

### Access Control:
- NDA acceptance stored in browser cookie (30 days)
- No login/password needed - friction-free for investors
- Cookie checked on data room page - redirects to NDA if missing
- Email tracking for follow-up

---

## 📂 Document Structure

The data room has **6 categories** with **25+ documents**:

### 1. Executive Materials (3 docs)
- Investor Deck (30 slides)
- Executive Summary (1-pager)
- Investment Memo (detailed thesis)

### 2. Financial Data (4 docs)
- Financial Model (3-5 year projections)
- Historical Financials (2020-2025 actuals)
- Unit Economics (CAC, LTV, margins)
- Use of Funds ($10M deployment plan)

### 3. Market Analysis (3 docs)
- Market Size Analysis (TAM/SAM/SOM)
- Competitive Landscape (vs 8020, Bosch, Vention)
- Industry Trends Report (CHIPS Act, reshoring)

### 4. Customers & Traction (4 docs)
- Customer List (Top 20 with revenue)
- Case Studies (Disney, TSMC, Boston Dynamics)
- Customer Contracts (Redacted samples)
- Sales Pipeline (Current opportunities)

### 5. Intellectual Property (3 docs)
- Patent Portfolio (Full 150+ patents)
- Core Patents Summary (Lock mechanism)
- Freedom to Operate (IP clearance)

### 6. Company & Governance (4 docs)
- Capitalization Table (Ownership structure)
- Team Bios (Leadership team)
- Board Materials (Recent deck)
- Legal Documents (Incorporation, bylaws)

---

## ⚙️ Setup Steps

### Step 1: Google Sheets Setup

**Create a new Google Sheet** for tracking NDA submissions and downloads.

**Sheet 1: "NDA-Submissions"**

Columns:
```
A: Timestamp
B: Full Name
C: Email
D: Company
E: Title
F: Phone
G: Investor Type
H: Investment Range
I: IP Address (optional)
```

**Sheet 2: "Document-Downloads"**

Columns:
```
A: Timestamp
B: Email
C: Document Name
D: IP Address (optional)
```

**Google Apps Script:**

1. Open Google Sheets → Extensions → Apps Script
2. Paste this code:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    // Handle NDA submission
    if (data.sheet === "NDA-Submissions") {
      const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("NDA-Submissions");
      sheet.appendRow([
        data.timestamp,
        data.fullName,
        data.email,
        data.company,
        data.title,
        data.phone,
        data.investorType,
        data.investmentRange
      ]);

      // Send email notification
      MailApp.sendEmail({
        to: "info@anglelock.com",
        subject: `🔒 NDA Accepted - ${data.fullName} (${data.company})`,
        body: `
New investor has accepted the NDA and accessed the data room:

INVESTOR DETAILS:
• Name: ${data.fullName}
• Email: ${data.email}
• Company: ${data.company}
• Title: ${data.title}
• Phone: ${data.phone}
• Investor Type: ${data.investorType}
• Investment Range: ${data.investmentRange}

TIMESTAMP: ${data.timestamp}

ACTION: Follow up within 24 hours

View full details:
${SpreadsheetApp.getActiveSpreadsheet().getUrl()}
        `
      });
    }

    // Handle download tracking
    if (data.sheet === "Document-Downloads") {
      const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Document-Downloads");
      sheet.appendRow([
        data.timestamp,
        data.email,
        data.document
      ]);
    }

    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. **Deploy:**
   - Click Deploy → New Deployment
   - Type: Web App
   - Execute as: Me
   - Who has access: Anyone
   - Copy the Web App URL

4. **Update API Routes:**
   - Replace the Google Apps Script URL in:
     - `/src/app/api/nda-submit/route.ts`
     - `/src/app/api/track-download/route.ts`

---

### Step 2: Upload Documents

**Create your investor documents** and upload them to:

```
/public/documents/investors/
```

**Document Naming Convention:**

Must match exactly as listed in code:

```
AngleLock_Investor_Deck_2026.pdf
AngleLock_Executive_Summary_2026.pdf
AngleLock_Investment_Memo_2026.pdf
AngleLock_Financial_Model_2026.xlsx
AngleLock_Historicals_2020-2025.xlsx
AngleLock_Unit_Economics_2026.xlsx
AngleLock_Use_of_Funds_2026.pdf
AngleLock_Market_Analysis_2026.pdf
AngleLock_Competitive_Analysis_2026.pdf
AngleLock_Industry_Trends_2026.pdf
AngleLock_Customer_List_2026.pdf
AngleLock_Case_Studies_2026.pdf
AngleLock_Sample_Contracts_Redacted.pdf
AngleLock_Sales_Pipeline_2026.xlsx
AngleLock_Patent_Portfolio_2026.pdf
AngleLock_Core_Patents_2026.pdf
AngleLock_FTO_Analysis_2026.pdf
AngleLock_Cap_Table_2026.xlsx
AngleLock_Team_Bios_2026.pdf
AngleLock_Board_Deck_Q4_2025.pdf
AngleLock_Legal_Documents.pdf
```

**Document Status:**

In `/src/app/investors/data-room/page.tsx`, each document has a status:
- `"Ready"` - Document exists, can download
- `"Coming Soon"` - Shows grayed out, blocks download
- `"Available on Request"` - Shows alert, prompts to email

Edit the status field to control which documents are downloadable.

---

### Step 3: Create Placeholder Documents

**If you don't have documents ready yet:**

Create placeholder PDFs:

```bash
cd /Users/pauldenman/anglelockllc.com/public/documents/investors

# Create placeholder PDFs (macOS)
for file in \
  "AngleLock_Investor_Deck_2026.pdf" \
  "AngleLock_Executive_Summary_2026.pdf" \
  "AngleLock_Financial_Model_2026.xlsx" \
  "AngleLock_Historicals_2020-2025.xlsx" \
  "AngleLock_Unit_Economics_2026.xlsx" \
  "AngleLock_Use_of_Funds_2026.pdf" \
  "AngleLock_Market_Analysis_2026.pdf" \
  "AngleLock_Competitive_Analysis_2026.pdf" \
  "AngleLock_Customer_List_2026.pdf" \
  "AngleLock_Case_Studies_2026.pdf" \
  "AngleLock_Sales_Pipeline_2026.xlsx" \
  "AngleLock_Patent_Portfolio_2026.pdf" \
  "AngleLock_Core_Patents_2026.pdf" \
  "AngleLock_Team_Bios_2026.pdf"
do
  echo "AngleLock LLC - Confidential Investor Materials" > "$file"
done
```

Or set their status to `"Coming Soon"` in the code.

---

### Step 4: Update Document Metadata

**Edit file sizes** in `/src/app/investors/data-room/page.tsx`:

Find the `documents` array and update the `size` field for each item to match your actual file sizes.

---

### Step 5: Test the Flow

**Local Testing:**

```bash
cd /Users/pauldenman/anglelockllc.com
npm run dev
# Open http://localhost:3000
```

**Test Steps:**
1. Click "Investors" in navigation
2. Fill out NDA form with test data
3. Accept NDA checkbox
4. Submit form
5. Verify redirect to data room
6. Check Google Sheets for NDA submission
7. Check email for notification
8. Try downloading a document
9. Check Google Sheets for download tracking
10. Close browser
11. Reopen and go to `/investors/data-room` - should still have access (cookie)
12. Clear cookies and try accessing data room - should redirect to NDA page

---

### Step 6: Customize NDA Text

**Edit NDA terms** in `/src/app/investors/page.tsx`:

Find the section with `"Non-Disclosure Agreement Terms"` and customize:
- Duration (currently 3 years)
- Governing law
- Your company details
- Legal disclaimers

**Consult your lawyer** before using in production.

---

## 🎨 Design & Branding

**Color Scheme:**
- Accent color: `#3b82f6` (aerospace blue)
- Matches your existing brand
- Professional, trust-building aesthetic

**Icons:**
- Lock (security)
- Shield (protection)
- CheckCircle (verification)
- Download (document access)

**Status Colors:**
- Ready: Green (`text-green-400`)
- Coming Soon: Yellow (`text-yellow-400`)
- Available on Request: Orange (`text-orange-400`)

---

## 📧 Email Notifications

**You'll receive emails when:**
1. Investor accepts NDA (instant)
2. Each document download (tracked, no email by default)

**Email includes:**
- Investor name, company, title
- Contact details (email, phone)
- Investor type and investment range
- Timestamp
- Link to Google Sheets

**Set up email filtering** in Gmail:
- Label: "Investors - Data Room"
- Star important investor emails
- Set up auto-response template

---

## 🔒 Security Considerations

**What's Protected:**
- Data room requires NDA acceptance
- Cookie-based access (30 days)
- All submissions logged
- Downloads tracked

**What's NOT Protected:**
- No password authentication
- Cookie can be cleared (but they'd need to re-submit NDA)
- No IP restriction
- No rate limiting

**For Higher Security:**
- Add password protection
- Add two-factor authentication
- Implement session tokens instead of cookies
- Add IP whitelisting
- Add download limits
- Add watermarks to PDFs

**Current approach is standard** for investor data rooms - balances security with investor convenience.

---

## 📊 Analytics & Tracking

**What You Can Track:**

**Google Sheets "NDA-Submissions":**
- Who accessed the data room
- When they accessed
- Company and investment size
- Contact information

**Google Sheets "Document-Downloads":**
- Which documents investors download
- Who downloaded what
- Download timestamps
- Engagement patterns

**Insights:**
- If investor downloads financial model → serious interest
- If they download cap table → ready to negotiate
- If they download use of funds → evaluating deployment
- Multiple downloads → high engagement

---

## 🚀 Deployment

**Test locally first:**
```bash
npm run build
npm run dev
```

**Then deploy:**
```bash
git add -A
git commit -m "Add gated investor data room with NDA wall"
git push origin main
```

Vercel auto-deploys from GitHub.

**Live URLs:**
- NDA Gate: `https://anglelockllc.com/investors`
- Data Room: `https://anglelockllc.com/investors/data-room`

---

## 🎯 Next Steps

### Before Going Live:

1. ✅ **Create investor documents** (or set status to "Coming Soon")
2. ✅ **Set up Google Sheets** with Apps Script
3. ✅ **Update API URLs** in code
4. ✅ **Test NDA submission** end-to-end
5. ✅ **Test document downloads**
6. ✅ **Review NDA legal text** with lawyer
7. ✅ **Test mobile responsiveness**
8. ✅ **Add to navigation** (already done)

### Optional Enhancements:

- Add IP geolocation tracking
- Add user analytics (time on page, scroll depth)
- Add document view tracking (not just downloads)
- Add automatic follow-up emails (3 days after NDA)
- Add investor portal with custom login
- Add expiring download links
- Add document watermarks with investor email

---

## 📝 Document Creation Tips

**Investor Deck (30 slides):**
1. Cover
2. The Problem (5 slides)
3. The Solution (5 slides)
4. Market Opportunity (5 slides)
5. Traction & Customers (5 slides)
6. Competitive Advantage (3 slides)
7. Financials (3 slides)
8. Team (2 slides)
9. The Ask (1 slide)

**Financial Model (Excel):**
- Revenue projections (3-5 years)
- Expense breakdown
- Headcount plan
- Cash flow forecast
- Key assumptions
- Sensitivity analysis

**Use of Funds (PDF):**
- Exact dollar breakdown of $10M
- Timeline (Year 1 vs Year 2)
- Milestones at each funding level
- Expected outcomes
- Risk mitigation

**Executive Summary (1-page):**
- Company overview
- The opportunity
- Traction
- The ask
- Contact information

---

## 🔧 Customization

**To add a new document:**

1. Add file to `/public/documents/investors/`
2. Edit `/src/app/investors/data-room/page.tsx`
3. Find the `documents` array
4. Add new item to appropriate category:

```typescript
{
  name: "Your Document Name",
  description: "Brief description of what's inside",
  filename: "YourFile_2026.pdf",
  size: "2.5 MB",
  status: "Ready", // or "Coming Soon" or "Available on Request"
}
```

**To add a new category:**

1. Add new object to `documents` array:

```typescript
{
  category: "New Category",
  icon: YourIcon, // Import from lucide-react
  color: "text-your-color",
  bgColor: "bg-your-color/10",
  items: [
    // Your documents here
  ],
}
```

---

## 💡 Pro Tips

**For Investor Follow-Up:**
1. Check Google Sheets daily
2. Respond within 24 hours
3. Track which documents they download
4. Customize follow-up based on engagement
5. High engagement = schedule call ASAP

**Document Strategy:**
- Start with fewer docs (10-15)
- Add more as investors request
- Use "Available on Request" to qualify serious investors
- High-value docs (cap table, contracts) should be gated

**Common Investor Questions:**
- Why did 8020 deal fall through? (Be prepared)
- What's the exact equity % for $10M? (Have answer ready)
- Who else is in the round? (Be transparent)
- What's the timeline to close? (Set expectations)

---

## 📞 Support

**Questions about:**
- Google Sheets setup → Check Apps Script documentation
- Document formatting → Use PDF, Excel, PowerPoint
- Legal NDA text → Consult your lawyer
- Investor communications → Standard VC/PE best practices

**Need changes?**
Let me know and I can modify:
- NDA form fields
- Document categories
- Email notifications
- Access control logic

---

**Status:** ✅ Ready to test and deploy
**Created:** February 15, 2026
**Last Updated:** February 15, 2026
