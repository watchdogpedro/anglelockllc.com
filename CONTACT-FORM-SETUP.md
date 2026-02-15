# Contact Form Integration Setup

## Google Apps Script Setup (Sheets + Email Notifications)

### Step 1: Create New Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: **"AngleLock Contact Form Submissions"**
4. In Row 1, add these column headers:
   - A1: `Timestamp`
   - B1: `Name`
   - C1: `Email`
   - D1: `Company`
   - E1: `Phone`
   - F1: `Website`
   - G1: `Notes`

### Step 2: Open Apps Script Editor

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any default code
3. Paste the script below

### Step 3: Apps Script Code

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming data
    var data = JSON.parse(e.postData.contents);

    // Append row to spreadsheet
    sheet.appendRow([
      new Date(),           // Timestamp
      data.name,            // Name
      data.email,           // Email
      data.company || '',   // Company
      data.phone || '',     // Phone
      data.website || '',   // Website
      data.notes || ''      // Notes
    ]);

    // Send email notification
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

    // Send email to yourself (change this email address!)
    MailApp.sendEmail({
      to: "info@anglelock.com",  // ← CHANGE THIS TO YOUR EMAIL
      subject: emailSubject,
      body: emailBody
    });

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Step 4: Deploy as Web App

1. Click the **Deploy** button (top right)
2. Select **New deployment**
3. Click the gear icon ⚙️ next to "Select type"
4. Choose **Web app**
5. Configure:
   - **Description:** "AngleLock Contact Form Handler"
   - **Execute as:** Me
   - **Who has access:** Anyone
6. Click **Deploy**
7. **Copy the Web app URL** (looks like: `https://script.google.com/macros/s/...`)

### Step 5: Authorize the Script

1. Click **Authorize access**
2. Choose your Google account
3. Click **Advanced** → **Go to AngleLock Contact Form (unsafe)**
4. Click **Allow**

### Step 6: Update Email Address

⚠️ **IMPORTANT:** In the script above, change this line:

```javascript
to: "info@anglelock.com",  // ← CHANGE THIS TO YOUR EMAIL
```

Replace `info@anglelock.com` with the email where you want to receive notifications.

### Step 7: Test the Form

After deployment, the Web app URL will look like:
```
https://script.google.com/macros/s/AKfycby.../exec
```

**Provide this URL to integrate with the contact form.**

---

## What Happens When Someone Submits

1. ✅ Data is saved to Google Sheets (timestamped)
2. ✅ You receive an email notification immediately
3. ✅ User sees success message on website

---

## Email Notification Format

You'll receive emails like this:

```
Subject: New Contact Form Submission - AngleLock

New contact form submission received:

Name: John Smith
Email: john@acmeventures.com
Company: Acme Ventures
Phone: (555) 123-4567
Website: https://acmeventures.com
Message:
Interested in discussing investment opportunity for
Series A. Would like to schedule a call next week.

---
Submitted: 2/14/2026, 6:30:15 PM
```

---

## Next Steps

Once you have the Web app URL, provide it and I'll update the contact form to use it!
