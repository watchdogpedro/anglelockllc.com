# Update Existing Google Sheet for Contact Form

## Step 1: Add New Columns to Your Existing Sheet

Open your existing Google Sheet (the one for lead downloads) and add these columns:

**Current columns:**
- A: `Timestamp`
- B: `Name`
- C: `Email`
- D: `Company`

**Add these new columns:**
- E: `Phone`
- F: `Website`
- G: `Notes`
- H: `Form Type`

The last column "Form Type" will help you distinguish between:
- "Lead Download" (from the PDF download form)
- "Contact Form" (from the /contact page)

---

## Step 2: Update the Apps Script

1. Open your Google Sheet
2. Click **Extensions** → **Apps Script**
3. **Replace** the entire script with this updated version:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    // Determine form type
    var formType = data.formType || 'Lead Download';

    // Append row to spreadsheet
    sheet.appendRow([
      new Date(),           // Timestamp
      data.name,            // Name
      data.email,           // Email
      data.company || '',   // Company
      data.phone || '',     // Phone
      data.website || '',   // Website
      data.notes || '',     // Notes
      formType              // Form Type
    ]);

    // Send email notification ONLY for contact form submissions
    if (formType === 'Contact Form') {
      var emailSubject = "New Contact Form Submission - AngleLock";
      var emailBody = "New contact form submission received:\n\n" +
                      "Name: " + data.name + "\n" +
                      "Email: " + data.email + "\n" +
                      "Company: " + (data.company || 'N/A') + "\n" +
                      "Phone: " + (data.phone || 'N/A') + "\n" +
                      "Website: " + (data.website || 'N/A') + "\n" +
                      "Message:\n" + (data.notes || 'N/A') + "\n\n" +
                      "---\n" +
                      "Submitted: " + new Date().toLocaleString();

      // Send email to yourself
      MailApp.sendEmail({
        to: "info@anglelock.com",  // ← CHANGE THIS TO YOUR EMAIL
        subject: emailSubject,
        body: emailBody
      });
    }

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

## Step 3: Update Email Address

⚠️ **IMPORTANT:** Change this line in the script:

```javascript
to: "info@anglelock.com",  // ← CHANGE THIS TO YOUR EMAIL
```

Replace with the email where you want contact form notifications.

---

## Step 4: Save and Deploy

1. Click **Save** (disk icon)
2. Click **Deploy** → **Manage deployments**
3. Click the **Edit** icon (pencil) next to your existing deployment
4. Under "Version", select **New version**
5. Click **Deploy**

**The Web app URL stays the same!** No need to update anything else.

---

## What Changed

### Lead Download Form (existing)
- Still works exactly the same
- Saves: Timestamp, Name, Email, Company
- **No email notification** (silent capture)
- Form Type: "Lead Download"

### Contact Form (new)
- Saves: Timestamp, Name, Email, Company, Phone, Website, Notes
- **Sends email notification** to you
- Form Type: "Contact Form"

---

## Ready to Update?

1. Add the new columns (E, F, G, H)
2. Update the Apps Script
3. Change the email address
4. Save and redeploy

Let me know when you're done and I'll update the contact form to use it!
