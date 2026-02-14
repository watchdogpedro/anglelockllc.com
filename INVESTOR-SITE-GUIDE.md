# AngleLock LLC - Investor Website Build Complete ✅

**Created:** February 14, 2026
**Dev Server:** http://localhost:3000

---

## 🎯 What Was Built

A **professional, investor-grade homepage** designed for private equity, family offices, and international investors.

### Key Features:
- ✅ **Clean, data-driven hero** (no flashy graphics)
- ✅ **Tank test prominently featured** (52-ton proof point)
- ✅ **Industry carousel** with fade transitions (ready for your photos)
- ✅ **All investor content**: traction, moat, use of funds, exit path
- ✅ **Aerospace/defense aesthetic** (professional, technical, precise)
- ✅ **$10M raise clearly positioned** as growth capital (not startup)

---

## 📋 Content Structure

### 1. **Hero Section**
- Headline: "THE FIRST MECHANICAL-LOCK ALUMINUM FRAMING SYSTEM"
- Key metrics: 150+ patents, 7x stronger, $3M revenue, 50% growth
- Customer validation: Disney, TSMC, Lam Research, Boston Dynamics
- CTAs: "Investment Materials" and "View Proof"

### 2. **The Opportunity**
- $47B market stuck in 1976
- Problem/Solution/Result comparison
- Clear value proposition

### 3. **Extreme Testing** ⭐ (Tank Section)
- **Featured:** 52-ton tank load test (large, dramatic image)
- **Dynamic carousel:** Industry applications with fade transitions
- **Additional testing:** Torsion, vibration, load, fatigue data

### 4. **Customer Validation**
- Major customer logos (Disney, TSMC, Lam, Boston Dynamics, Milwaukee, Snap-On)
- "$2M annual revenue from Disney Studios alone"
- Rockwell Automation testimonial

### 5. **Competitive Moat**
- 150+ global patents
- 10 years proven operations ($10M debt-free equipment)
- Strategic acquisition interest (8020 attempted buy)

### 6. **Market Timing**
- $52.7B CHIPS Act
- 10.5% robotics CAGR
- Reshoring manufacturing
- 12 target industries listed

### 7. **The Investment**
- **Raising:** $10 Million (growth capital)
- **Traction:** $3M revenue, 50% growth, major customers
- **Use of Funds:** Facility, equipment, marketing, headcount
- **CTAs:** "Request Investor Deck" and "Schedule Call"

### 8. **Team**
- Frank Oetlinger story
- Timeline: 1995 → 2024

### 9. **Contact**
- Investment inquiry CTAs
- Contact information

---

## 🖼️ Images: What You Need to Add

### ✅ Already Included:
- **Tank image:** `/public/images/tank-test.png` (from your Desktop)

### 📸 Need to Add:

**Industry Application Photos** (for the carousel):

1. **Aerospace/Defense**
   → Save as: `/public/images/industries/aerospace.jpg`
   - Boeing installation photos
   - Satellite assembly fixture
   - Jet engine test stand
   - Defense contractor applications

2. **Semiconductor**
   → Save as: `/public/images/industries/semiconductor.jpg`
   - TSMC or Lam Research equipment
   - Wafer inspection systems
   - Cleanroom fab equipment

3. **Medical/Life Sciences**
   → Save as: `/public/images/industries/medical.jpg`
   - Bioprocessing equipment
   - Medical device manufacturing
   - Lab automation systems

4. **Industrial Automation**
   → Save as: `/public/images/industries/automation.jpg`
   - Disney Studios installation (you have $2M customer proof!)
   - Robot cells
   - Assembly line equipment

**Image Requirements:**
- Format: JPG or PNG
- Resolution: Minimum 1920x1080px
- Aspect Ratio: 16:9 landscape
- Quality: Professional, well-lit, clean facilities

**Current placeholders:** Empty .jpg files exist - carousel will show gradient backgrounds until you replace them.

---

## 🎬 How the Industry Carousel Works

Location in code: `src/components/IndustryCarousel.tsx`

**Features:**
- Automatic rotation every 4 seconds
- Smooth crossfade transitions (1 second)
- Tank always in foreground (separate section)
- Industry images fade in background
- Text overlays sync with images
- Manual navigation buttons on right side

**When you add real photos:**
1. Copy images to `/public/images/industries/`
2. Name exactly: `aerospace.jpg`, `semiconductor.jpg`, `medical.jpg`, `automation.jpg`
3. Refresh browser - carousel automatically uses them
4. Remove instruction banner at bottom (edit IndustryCarousel.tsx, delete lines 94-103)

---

## 🚀 Deployment

### Test Locally:
```bash
cd /Users/pauldenman/anglelockllc.com
npm run dev
# Open http://localhost:3000
```

### Deploy to Production:
```bash
# 1. Test build
npm run build

# 2. Commit changes
git add -A
git commit -m "Launch investor-grade homepage with tank test and industry carousel"

# 3. Push to GitHub (triggers Vercel deploy)
git push origin main

# 4. Force Vercel production deployment
vercel --prod --yes
```

**Live URL:** https://anglelockllc.com (once DNS configured)

---

## 🎨 Design Notes

### Color Palette (Aerospace Grade):
- Background: `#0a0a0a` (deep black)
- Surface: `#141414` (charcoal)
- Border: `#2a2a2a` (dark gray)
- Accent: `#3b82f6` (aerospace blue)
- Text: `#e8e8e8` (off-white)

### Typography:
- Headlines: Bold, clean, technical
- Body: Professional, readable
- Monospace for data (precision feel)

### Visual Style:
- ✅ Clean, technical, precise
- ✅ Data-driven (metrics front and center)
- ✅ Professional photography (real equipment)
- ✅ Subtle animations (scroll reveals, fades)
- ❌ NO purple gradients
- ❌ NO generic AI graphics
- ❌ NO stock photos of people

---

## 📝 Next Steps

### Immediate (Before Investor Meetings):
1. **Add industry photos** to `/public/images/industries/`
2. **Review all content** for accuracy
3. **Test on mobile** (responsive design included)
4. **Get investor deck PDF** ready for download
5. **Deploy to production**

### Optional Enhancements:
- Add more customer case studies
- Include financial charts/graphs
- Add video modal for tank test (full video playback)
- Create downloadable one-pager (PDF)
- Add investor FAQ section

### Where to Find Images:
- **Check:** `/Users/pauldenman/Desktop/ANGLELOCK/Angle Photos/`
- **Check:** Controlled Dynamics website case studies
- **Check:** AngleLock.com product pages
- **Check:** Investor deck PowerPoints (extract images)
- **Ask:** Frank for customer site visit photos

---

## 🔧 Technical Details

**Files Modified:**
- `src/app/page.tsx` - Main homepage (investor content)
- `src/components/IndustryCarousel.tsx` - NEW (animated carousel)
- `public/images/tank-test.png` - Tank image
- `public/images/industries/*.jpg` - Placeholder industry images

**Components Used:**
- `SectionReveal` - Scroll-triggered fade-in animations
- `AnimatedCounter` - Number animations (metrics)
- `IndustryCarousel` - NEW (fade transition carousel)
- `Navigation` - Header (existing)
- `Footer` - Footer (existing)

**Stack:**
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Deployment: Vercel

---

## 💡 Key Messaging for Investors

**The Pitch (30 seconds):**
"We invented the first mechanical-lock aluminum framing system since 1976. It's 7x stronger than T-slot, requires zero maintenance, and we're replacing a $47B market. Disney pays us $2M/year. TSMC and Lam Research use our equipment. 8020, the $800M market leader, already tried to acquire us. We're raising $10M in growth capital to scale production and marketing."

**Proof Points:**
- ✅ 52-ton tank test (undeniable)
- ✅ 150+ global patents (moat)
- ✅ $3M revenue, 50% YoY growth (traction)
- ✅ Major customers (Disney, TSMC, Boston Dynamics)
- ✅ 10 years operational (not a startup)
- ✅ Strategic acquirer interest (8020 attempted buy)

**Competitive Advantage:**
- First innovation since 1976
- Mechanical lock (not friction)
- Self-tightens under vibration
- Protected by 150+ patents
- Vertically integrated manufacturing

**Market Timing:**
- $52.7B CHIPS Act → semiconductor fabs
- Reshoring → new US/Europe manufacturing
- Industry 4.0 automation → robot cells
- 12 target industries

**Use of $10M:**
1. Facility expansion (production capacity)
2. Equipment (3 CNC machines)
3. Marketing (replicate Vention's $125M playbook)
4. Headcount (sales, engineering)

**Exit Path:**
- 8020 ($800M) already attempted acquisition
- Target: $50M valuation
- Potential acquirers: Bosch, Parker, THK, ABB
- Vention (inferior product) raised $153M

---

## 📞 Support

**Questions?**
- Technical: Review this guide
- Content edits: Edit `src/app/page.tsx`
- Design changes: Tailwind classes in components
- Images: Drop in `/public/images/industries/`

**Need Help?**
Let me know what you'd like to adjust!

---

**Status:** ✅ Ready for investor preview
**Next:** Add industry photos and deploy to production
