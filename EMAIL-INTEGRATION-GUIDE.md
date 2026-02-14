# Email Lead Capture Integration Guide

**Status:** ✅ Lead capture form is LIVE on homepage
**Current Behavior:** Downloads PDF immediately (no email storage yet)
**Next Step:** Integrate with email marketing service

---

## 🎯 What's Implemented

### Lead Magnet Active:
- ✅ **Market Opportunity Report 2025** (882KB PDF)
- ✅ Professional email capture form
- ✅ Automatic PDF download after submission
- ✅ Success confirmation messaging
- ✅ Form validation

### Form Fields:
1. **Full Name** (required)
2. **Email Address** (required)
3. **Company/Fund Name** (optional)

### User Experience:
1. User enters details in form
2. Clicks "Download Report"
3. Form submits (currently client-side only)
4. PDF downloads automatically
5. Success message shows
6. User receives download

---

## 📧 Email Service Integration Options

You need to connect this form to an email marketing service to actually capture and store leads.

### **Option 1: Mailchimp (Recommended for Investors)**

**Pros:**
- Easy setup, proven platform
- Automated email sequences
- CRM features for investor tracking
- Segmentation and tagging
- Analytics and reporting

**Setup Steps:**
1. Create Mailchimp account (free up to 500 contacts)
2. Create audience list: "AngleLock Investors"
3. Get API key from Mailchimp
4. Add to Vercel environment variables:
   ```
   MAILCHIMP_API_KEY=your_api_key
   MAILCHIMP_AUDIENCE_ID=your_list_id
   ```
5. Update `LeadCapture.tsx` to call Mailchimp API

**Code Example:**
```typescript
// In LeadCapture.tsx, replace TODO section:
const response = await fetch('/api/subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, company }),
});
```

Create `/src/app/api/subscribe/route.ts`:
```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { name, email, company } = await request.json();

  const response = await fetch(
    `https://us1.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.MAILCHIMP_API_KEY}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: name.split(' ')[0],
          LNAME: name.split(' ').slice(1).join(' '),
          COMPANY: company || '',
        },
        tags: ['Market Report Download', 'Investor'],
      }),
    }
  );

  if (!response.ok) {
    return NextResponse.json({ error: 'Failed to subscribe' }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
```

---

### **Option 2: ConvertKit (Best for Creators/Email Sequences)**

**Pros:**
- Designed for email courses and sequences
- Simple automation
- Tag-based organization
- Good for drip campaigns

**Setup:**
1. Create ConvertKit account
2. Create form for "Market Report Downloads"
3. Get API key
4. Similar implementation to Mailchimp above

---

### **Option 3: Custom Webhook (Zapier/Make)**

**Pros:**
- Connect to ANY service (Airtable, Google Sheets, CRM)
- No coding required
- Flexible automation

**Setup:**
1. Create Zapier/Make account
2. Set up webhook trigger
3. Connect to Google Sheets, Airtable, or your CRM
4. Add webhook URL to form

**Code Example:**
```typescript
const response = await fetch('YOUR_ZAPIER_WEBHOOK_URL', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, company, timestamp: new Date() }),
});
```

---

### **Option 4: Vercel Postgres + Email Service**

**Pros:**
- Complete control over data
- Build custom investor CRM
- Advanced tracking

**Setup:**
1. Enable Vercel Postgres
2. Create `leads` table
3. Store submissions
4. Send emails via SendGrid/Postmark

---

## 🎯 Recommended: Mailchimp

For investor lead capture, **Mailchimp is the best choice** because:

1. ✅ **Proven platform** - VCs trust it
2. ✅ **CRM features** - Tag investors, track engagement
3. ✅ **Automation** - Set up drip campaigns
4. ✅ **Segmentation** - Group by investor type, company size, etc.
5. ✅ **Analytics** - Track open rates, click rates

---

## 📊 Suggested Email Automation Sequence

Once integrated, set up this automated sequence:

**Email 1: Immediate (Download Confirmation)**
- Subject: "Your AngleLock Market Report is Ready"
- Content: Thank you, here's the download link (backup)
- CTA: Schedule a call

**Email 2: Day 3 (Case Studies)**
- Subject: "How Disney Saves $600/year with AngleLock"
- Content: Customer success stories
- CTA: View full case studies

**Email 3: Day 7 (Technology Deep Dive)**
- Subject: "The 52-Ton Tank Test (Video)"
- Content: Link to tank test video, technical specs
- CTA: Request technical documentation

**Email 4: Day 14 (Investment Opportunity)**
- Subject: "$10M Growth Round Now Open"
- Content: Investment terms, use of funds
- CTA: Schedule investor call

**Email 5: Day 21 (Final Reminder)**
- Subject: "Last Chance: Limited $10M Round"
- Content: Urgency, scarcity
- CTA: Commit now

---

## 🔧 Implementation Steps

### Phase 1: Choose Service (15 minutes)
- [ ] Sign up for Mailchimp (or alternative)
- [ ] Create investor audience/list
- [ ] Get API credentials

### Phase 2: Add Environment Variables (5 minutes)
```bash
# In Vercel dashboard, add:
MAILCHIMP_API_KEY=your_key_here
MAILCHIMP_AUDIENCE_ID=your_list_id_here
```

### Phase 3: Update Code (30 minutes)
- [ ] Create `/src/app/api/subscribe/route.ts`
- [ ] Update `LeadCapture.tsx` to call API route
- [ ] Test locally with `npm run dev`
- [ ] Deploy to production

### Phase 4: Test End-to-End (10 minutes)
- [ ] Submit form with test email
- [ ] Verify lead appears in Mailchimp
- [ ] Confirm PDF downloads
- [ ] Check confirmation email sent

### Phase 5: Set Up Automation (1 hour)
- [ ] Create 5-email sequence
- [ ] Set up tags and segments
- [ ] Test automation flow

---

## 📈 Tracking & Analytics

### Metrics to Monitor:
1. **Download rate** - % of visitors who download
2. **Email open rate** - % who open emails
3. **Click-through rate** - % who click CTAs
4. **Conversion rate** - % who schedule calls
5. **Investment rate** - % who commit capital

### Where to Track:
- **Mailchimp Dashboard** - Email metrics
- **Vercel Analytics** - Page views, form views
- **Google Analytics** - Download events (if integrated)
- **CRM** - Investor pipeline progress

---

## 🚀 Quick Start (Mailchimp)

1. **Sign up:** https://mailchimp.com
2. **Get API key:** Account → Extras → API Keys
3. **Get Audience ID:** Audience → Settings → Audience name and defaults
4. **Add to Vercel:**
   ```
   Vercel Dashboard → anglelockllc.com → Settings → Environment Variables
   ```
5. **Update code** (see Option 1 above)
6. **Deploy:** `vercel --prod --yes`

---

## 📞 Support

**Current Status:**
- Form is LIVE at https://anglelockllc.com
- PDF download works
- Email capture ready for integration

**Need Help?**
Let me know which email service you want to use, and I'll implement it for you!

---

**Next Step:** Choose email service and get API credentials, then I'll integrate it.
