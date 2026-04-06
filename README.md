<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Bebas+Neue&size=58&duration=3000&pause=1200&color=C9A84C&center=true&vCenter=true&width=700&lines=THE+LIQUID+LOUNGE;FINE+DRINKS+%26+DINING;PREMIUM+BAR+%7C+WEST+BENGAL;EST.+2025" alt="The Liquid Lounge" />

<br/>

![Status](https://img.shields.io/badge/Status-LIVE-2d7a55?style=for-the-badge&logo=vercel&logoColor=white)
![Version](https://img.shields.io/badge/Version-v9.0-C9A84C?style=for-the-badge)
![Domain](https://img.shields.io/badge/Domain-theliquidlounge.in-b8892a?style=for-the-badge&logo=google-chrome&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-Single_File-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-37KB_Pure-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JS](https://img.shields.io/badge/JavaScript-19KB_Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![PWA](https://img.shields.io/badge/PWA-Service_Worker_v4-5A2D82?style=for-the-badge&logo=pwa&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/Hosted-GitHub_Pages-181717?style=for-the-badge&logo=github&logoColor=white)
![Cloudflare](https://img.shields.io/badge/CDN-Cloudflare-F48120?style=for-the-badge&logo=cloudflare&logoColor=white)
![Analytics](https://img.shields.io/badge/Analytics-GA4_+_Meta_Pixel-E37400?style=for-the-badge&logo=googleanalytics&logoColor=white)
![Built By](https://img.shields.io/badge/Built_by-Satzzxzxx-C9A84C?style=for-the-badge&logo=github)

<br/>

> ### 🥃 A production-grade, zero-dependency restaurant web app — hand-crafted with pure HTML, CSS & Vanilla JS.
> No React. No Node. No build tools. Just exceptional engineering.

<br/>

[🌐 Live Site](https://theliquidlounge.in) &nbsp;·&nbsp; [💬 WhatsApp](https://wa.me/917439133880) &nbsp;·&nbsp; [📸 Instagram](https://instagram.com/liquidlounge.vibes) &nbsp;·&nbsp; [▶️ YouTube](https://youtube.com/@liquidlounge-vibes) &nbsp;·&nbsp; [🐛 Report Bug](https://github.com/S2zxx0zxx/liquid-lounge/issues)

</div>

---

<br/>

## 🗺️ Table of Contents

- [What Is This](#-what-is-this)
- [Live Architecture](#-live-architecture)
- [Project Structure](#-project-structure)
- [Design System](#-design-system)
- [Full Feature Map](#-full-feature-map)
- [Menu & Business Content](#-menu--business-content)
- [Analytics & Tracking](#-analytics--tracking)
- [PWA & Service Worker](#-pwa--service-worker)
- [Security Layer](#-security-layer)
- [Performance Numbers](#-performance-numbers)
- [Version History](#-version-history)
- [Deployment](#-deployment)
- [Business Info](#-business-info)
- [Built By](#-built-by)

<br/>

---

## 🏛️ What Is This

**The Liquid Lounge** is a premium bar & restaurant located on Khalpar Road, Tegachhi Mamudpur, West Bengal — a standalone destination on a highway-connecting road with zero food/beverage competition within 5km.

This repository is the **complete production website** for the business. It is not a template. It is not a boilerplate. It is a hand-engineered, conversion-optimized, analytics-wired, PWA-enabled digital product built entirely without frameworks — because sometimes the right tool is understanding the web platform itself.

```
Everything lives in one repo.
One HTML file. One CSS file. One JS file.
Zero npm install. Zero webpack. Zero React.
Just the browser doing what browsers were built to do.
```

<br/>

---

## ⚡ Live Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                    THE LIQUID LOUNGE — v9.0                          │
│                   Production Architecture                            │
├──────────────────────┬──────────────────────────────────────────────┤
│  Frontend            │  Pure HTML5 + CSS3 + Vanilla ES6+            │
│  Entry Point         │  index.html  (70KB · 5,258 lines)            │
│  Styles              │  assets/css/main.css  (37KB)                 │
│  Scripts             │  assets/js/main.js  (19KB)                   │
│  Config              │  config/app.js  (2.6KB · business constants) │
├──────────────────────┼──────────────────────────────────────────────┤
│  Hosting             │  GitHub Pages (Static)                       │
│  CDN                 │  Cloudflare (Cache · HTTPS · DDoS)           │
│  Domain              │  theliquidlounge.in                          │
│  DNS Provider        │  Hostinger                                   │
├──────────────────────┼──────────────────────────────────────────────┤
│  Images              │  7× WebP compressed (8–22KB each)            │
│  Total Asset Size    │  ~115KB images + ~130KB code = ~250KB total  │
│  Industry Average    │  ~2.5MB  (10× heavier than this)             │
├──────────────────────┼──────────────────────────────────────────────┤
│  Analytics           │  GA4 · G-N7C8LZ5KX8                         │
│  Paid Ads            │  Meta Pixel · ID 1303788181629813            │
│  PWA Cache           │  Service Worker v4 · 3-strategy caching      │
├──────────────────────┼──────────────────────────────────────────────┤
│  CI/CD               │  GitHub Actions (auto-deploy on push)        │
│  SEO                 │  Schema.org JSON-LD · Open Graph · Sitemap   │
│  Security            │  CSP Headers · Input Sanitization · HTTPS    │
└──────────────────────┴──────────────────────────────────────────────┘
```

<br/>

---

## 🗂️ Project Structure

```
liquid-lounge/
│
├── 📄 index.html                    # Main website (Single-file PWA · 70KB)
│
├── 📁 assets/
│   ├── 📁 css/
│   │   └── 🎨 main.css             # Complete design system (37KB)
│   ├── 📁 js/
│   │   └── ⚙️  main.js             # All application logic (19KB)
│   └── 📁 images/
│       ├── 🖼️  hero-bg.webp        # Hero background (22KB · WebP)
│       ├── 🖼️  gallery-1.webp      # Bar Area (20KB)
│       ├── 🖼️  gallery-2.webp      # Dining Hall (12KB)
│       ├── 🖼️  gallery-3.webp      # Event Space (13KB)
│       ├── 🖼️  gallery-4.webp      # Night Vibes (11KB)
│       ├── 🖼️  gallery-5.webp      # Private Area (9KB)
│       ├── 🖼️  gallery-6.webp      # DJ Night (8KB)
│       ├── 🖼️  gallery-7.webp      # Cricket Night (11KB)
│       └── 🎨  logo.svg            # Custom SVG logo (1KB · cocktail glass)
│
├── 📁 config/
│   └── ⚙️  app.js                  # Business constants · feature flags · API hooks
│
├── 📁 .github/
│   └── 📁 workflows/
│       ├── 🔄 deploy.yml           # Custom deploy pipeline
│       ├── 🔄 jekyll-gh-pages.yml  # Jekyll GitHub Pages workflow
│       └── 🔄 static.yml           # Static site deploy workflow
│
├── 📄 sw.js                        # Service Worker (Cache v4 · 3 strategies)
├── 📄 manifest.json                # PWA manifest (5 icon sizes · 3 shortcuts)
├── 📄 CNAME                        # Custom domain → theliquidlounge.in
├── 📄 robots.txt                   # Crawler config + sitemap reference
├── 📄 sitemap.xml                  # SEO sitemap
├── 📄 SECURITY.md                  # Security policy
├── 📄 CHANGELOG.md                 # Full version history
└── 📄 README.md                    # You're reading this
```

<br/>

---

## 🎨 Design System

Every visual decision follows a strict token system — nothing is hardcoded.

### Color Palette

```
┌─────────────────┬─────────────────┬──────────────────────────────────┐
│ Token           │ Value           │ Usage                            │
├─────────────────┼─────────────────┼──────────────────────────────────┤
│ --gold          │ #b8892a         │ Primary accent · borders · icons │
│ --gold-light    │ #d4a94e         │ Hover states · highlights        │
│ --gold-dim      │ #c9a84c         │ Text accents · decorative        │
│ --gold-pale     │ #f0e6cc         │ Subtle backgrounds               │
│ --bg            │ #faf6f0         │ Main page background             │
│ --bg2           │ #f4ede2         │ Alternate section bg             │
│ --bg3           │ #ede3d4         │ Deep alternate bg                │
│ --cream         │ #fff9f2         │ Card backgrounds                 │
│ --dark          │ #1a1208         │ Primary text · dark sections     │
│ --dark2         │ #2d1f0e         │ Button hover · deep dark         │
│ --text          │ #2d1f0e         │ Body text                        │
│ --text2         │ #6b5535         │ Descriptions · secondary text    │
│ --text3         │ #9c7c4e         │ Labels · captions · meta         │
│ --success       │ #2d7a55         │ Open status · veg dots           │
│ --glass         │ rgba(180,140,80,0.07) │ Glass card bg            │
│ --glass-b       │ rgba(180,140,80,0.18) │ Glass borders            │
└─────────────────┴─────────────────┴──────────────────────────────────┘
```

### Typography

```
Display / Brand    →  Bebas Neue         (nav logo · hero · decorative)
Headings / Serif   →  Cormorant Garamond (section titles · menu names · quotes)
Body / UI          →  DM Sans            (descriptions · buttons · forms · meta)
```

Font loading strategy: `preload as="style"` with `onload` swap — zero render blocking.

### Spacing & Radius

```
--r   : 14px   →  Cards · modals · large containers
--rs  :  8px   →  Buttons · inputs · small elements
--shadow       →  0 4px 24px rgba(45,31,14, 0.10)
--shadow-md    →  0 8px 40px rgba(45,31,14, 0.14)
--shadow-gold  →  0 8px 32px rgba(184,137,42, 0.18)
```

### Animation Principles

- **GPU-only** — all animations use `transform` and `opacity` exclusively
- **No layout shift** — zero `width`, `height`, `top`, `left` animations
- **IntersectionObserver** — scroll reveals trigger only when in viewport
- **requestAnimationFrame** — cursor and parallax use RAF loop, not `mousemove` directly
- **Reduced motion** — `@media (prefers-reduced-motion)` respected

<br/>

---

## 🔧 Full Feature Map

### Navigation & Shell

| Feature | Class / ID | Notes |
|---|---|---|
| Fixed nav | `#nav` | Transparent → frosted glass on 60px scroll |
| Scroll spy | `.nav-links a` | Active link tracks current section |
| Scroll progress bar | `#pb` | Gold gradient · 2px top of viewport |
| Hamburger menu | `#hbg` | `tm()` toggle · ARIA `expanded` attr |
| Mobile full-screen menu | `#mm` | Slide from right · 45° cubic bezier |
| Announcement bar | `#ann-bar` | Dismiss → `sessionStorage` persist |
| Custom cursor | `.cur` + `.curR` | Dot + ring · hover scale · RAF loop |
| Back to top | `.btt` | Smooth scroll to 0 |

### Hero Section

| Feature | Implementation | Notes |
|---|---|---|
| Background image | `.hero-real-bg` | hero-bg.webp · 17% opacity overlay |
| Ambient glow | `.hero-noise` + `.hero-glow` | Radial gradients layered |
| Grid pattern | `.hero-grid` | Repeating linear gradient · 80px cells |
| Floating particles | `.particles` IIFE | 14 gold dots · random size, speed, delay |
| Typewriter effect | `#tw` IIFE | 4 phrases · type + delete loop · 62ms/38ms |
| Scroll indicator | `.hero-sc` | Animated line · fade-up at 1.2s delay |
| Hero CTA buttons | `.bp` + `.bs` | Shimmer sweep animation on hover |

### Menu System

| Feature | Details |
|---|---|
| **6 Categories** | Cocktails (14) · Spirits & Beer (16) · Starters (10) · Bihari Specials (10) · Mains (8) · Sweets & Desserts (7) |
| **Total Items** | 65+ individually described menu items |
| **Desktop tabs** | `.d-tabs` → vertical sidebar navigation |
| **Mobile tabs** | `.swg-tabs` → Swiggy-style horizontal pill scroll |
| **Tab sync** | `sw()` function syncs both tab groups simultaneously |
| **Veg/Non-veg dots** | `.veg` (green) · `.nv` (red) — on every item |
| **Badges** | Best Seller · Popular · New · Spicy · Signature · Bihar Special · Chef's Pick |
| **Room Service** | `.rs-strip` info banner in every category + `.c-rs` badge per item |
| **Card hover** | `translateY(-5px)` + gold top line scaleX reveal |
| **Subcategories** | Full `::before` + `::after` decorative line dividers |

### Gallery

| Feature | Details |
|---|---|
| **Grid layout** | CSS Grid · `1.4fr 1fr 1fr` · 2 rows · desktop |
| **`.gi1` hero span** | `grid-column: 1/2` · `grid-row: 1/3` · full height |
| **Image loading** | Real WebP images as CSS `background-image` |
| **Hover scale** | `.g-in` → `scale(1.05)` on parent hover |
| **Overlay system** | `.g-bot` gradient + `.g-ov` full overlay |
| **Gold border reveal** | `::after` border-color on hover |
| **Caption reveal** | `.g-cap` translateY(0) on hover |
| **Mobile layout** | 2-col grid · `.gi1` spans full width row 1 |

### Reservation Form

| Feature | Function | Notes |
|---|---|---|
| Step 1 — Details | `ns(1)` | Name · Phone · Date · Time with validation |
| Step 2 — Preferences | `ns(2)` | Guests · Occasion · Special requests |
| Step 3 — Confirm | `ns(3)` | Live booking summary built by `bc()` |
| Submit | `sub()` | Encodes all data → WhatsApp deep link |
| Floating labels | CSS `:focus` + `:not(:placeholder-shown)` | No JS needed |
| Validation | `vf(el, type)` | Name length + phone regex |
| Progress steps | `gs(n)` | Active/done state management |
| XSS protection | `esc()` inside `bc()` | All inputs HTML-escaped before DOM inject |
| Date min | IIFE in `hideLoader()` | Sets today as min date on page load |
| Success screen | `#sok` | Shown after WhatsApp opens |

### Events Section

| Event | Day | Time | Notes |
|---|---|---|---|
| DJ Night | Every Friday | 9 PM – 1 AM | Dance floor · Bollywood + EDM + Retro |
| Weekend Special | Every Saturday | 7 PM onwards | Buy 2 Get 1 FREE cocktails |
| Cricket Screening | Match days | Per schedule | IPL + International · Big screen |
| Happy Hours | Every Monday | 6 PM – 9 PM | 30% off all spirits |

### FAQ System

- 7 questions · Accordion (one open at a time)
- `aria-expanded` properly toggled for accessibility
- GA4 event fired on each question open: `faq_opened`
- Topics: walk-ins · hours · room service · private events · weekend offer · parking · non-veg

### Contact & Location

- Google Maps iframe embedded (real coordinates: 9FW7+JCM Khalpar Road)
- 4 contact cards: Address · Phone/WhatsApp · Email · Hours
- Schema.org JSON-LD structured data for maps/search rich results
- Email obfuscated via Cloudflare email protection

### Testimonials

- 6 customer reviews in 3-column grid
- Cormorant Garamond pull-quote `"` decorative watermark (120px · 7% opacity)
- Hover: `translateY(-6px)` spring animation
- Guest locations: Buxar · Arrah · Patna · Varanasi · Sasaram

### WhatsApp Integration

| Touch Point | Pre-filled Message |
|---|---|
| Floating desktop button | General inquiry |
| Mobile sticky bar | General inquiry |
| Reserve Table (form) | Full booking details JSON |
| Contact card | Direct call/message |
| Testimonials CTA | Experience sharing |
| Footer newsletter | Subscription via WhatsApp |

<br/>

---

## 🍽️ Menu & Business Content

### Cocktail Highlights

```
Classic         →  Whisky Sour · Mojito · Gin & Tonic · Screwdriver
                   Rum & Coke · Vodka Lime Soda

Signatures      →  Liquid Gold (house special · whisky + honey + ginger beer)
                   Midnight Mule · Lounge Sling · Masala Mary (🌶 desi twist)

Mocktails       →  Virgin Mojito · Mango Fizz · Shahi Lassi · Nimbu Pani Special

Price Range     →  ₹50 (Nimbu Pani) → ₹300 (Lounge Sling)
```

### Spirits

```
Whisky          →  Royal Stag ₹150 · Blenders Pride ₹200 · JW Black ₹480
Rum             →  Old Monk Dark ₹130 · Bacardi White ₹150
Vodka           →  Magic Moments ₹130 · Smirnoff ₹180
Beer            →  Kingfisher Premium ₹130 · KF Strong ₹140 · Bira 91 ₹160
```

### Bihar Specials ⭐

```
Litti Chokha    →  Pure Ghee ₹120 · Chicken Litti ₹160 · Half ₹80 · Full ₹140
Chai Corner     →  Masala Chai ₹30 · Plain Chai ₹20 · Maggie Masala ₹80
Chaat           →  Boiled Chana ₹80 · Aloo Chaat ₹90 · Sattu Sharbat ₹50
```

### Business Details

```
📍  Address      9FW7+JCM, Khalpar Road, Tegachhi Mamudpur, West Bengal
📞  Phone        +91 74391 33880
📧  Email        hello@theliquidlounge.in
🌐  Website      https://theliquidlounge.in

⏰  Weekdays     Monday – Friday  :  11:00 AM – 11:00 PM
⏰  Weekends     Saturday – Sunday :  10:00 AM – 12:00 AM (midnight)
📅  Open         7 days a week · All year · All public holidays
```

<br/>

---

## 📊 Analytics & Tracking

Both GA4 and Meta Pixel are live. Meta Pixel loads with a **3-second delay** to not block initial render.

### GA4 Events Tracked (`track()` helper)

| Event Name | Trigger |
|---|---|
| `menu_tab_switch` | Any menu category tab click |
| `menu_item_view` | Menu card enters viewport (50% threshold) |
| `reservation_step2` | Form step 1 → 2 |
| `reservation_step3` | Form step 2 → 3 |
| `reservation_submitted` | WhatsApp booking link opens |
| `faq_opened` | Any FAQ accordion click |
| `cta_click` | Hero primary/secondary CTA |
| `nav_reserve_click` | Nav "Reserve Table" button |
| `announcement_dismissed` | Announcement bar × click |
| `fab_call` | Floating call button |
| `fab_whatsapp` | Floating WhatsApp button |
| `whatsapp_click` | Any WhatsApp touch point |
| `scroll_depth` | 25% · 50% · 75% · 100% page depth |
| `pwa_install` | Install prompt accepted |
| `pwa_dismissed` | Install prompt dismissed |
| `pwa_installed` | App successfully installed |

### Scroll Depth Implementation

```js
// Fires once per depth milestone per session
const marks = [25, 50, 75, 100];
const tracked = new Set();
// Uses passive scroll listener + requestAnimationFrame
// Zero performance impact
```

### Meta Pixel

```js
// ID: 1303788181629813
// Loaded via setTimeout(fn, 3000) — performance-first
// Tracks: PageView
```

<br/>

---

## 📱 PWA & Service Worker

This site is fully installable as a mobile/desktop app.

### Manifest (manifest.json)

```json
{
  "name": "The Liquid Lounge",
  "short_name": "Liquid Lounge",
  "display": "standalone",
  "theme_color": "#b8892a",
  "background_color": "#1a1208"
}
```

**3 App Shortcuts** (visible on long-press of app icon):
- Reserve a Table → `/#reservation`
- Our Menu → `/#menu`
- Contact Us → `/#contact`

**5 Icon Sizes**: 96px · 144px · 152px · 192px · 512px

### Service Worker (sw.js · Cache Version: v4)

Three intelligent caching strategies in one file:

```
┌──────────────────────────────────┬─────────────────────────────────┐
│ Request Type                     │ Strategy                        │
├──────────────────────────────────┼─────────────────────────────────┤
│ Google Fonts (googleapis/gstatic)│ Cache-First (long-lived)        │
│ /assets/ · /icons/ · /config/    │ Cache-First (static shell)      │
│ HTML pages (text/html)           │ Network-First (always fresh)    │
│ Everything else                  │ Stale-While-Revalidate          │
└──────────────────────────────────┴─────────────────────────────────┘
```

**Cache buckets:**
- `ll-static-v4` → CSS · JS · images · icons
- `ll-pages-v4` → HTML pages
- `ll-fonts-v4` → Google Fonts

**Activation** → purges all caches from previous versions automatically.

**Offline fallback** → serves cached HTML if network unavailable.

**PWA Install Popup** → intercepts `beforeinstallprompt`, shows custom branded popup (not browser default). Dismissed state is not persisted — shows again on new visit.

<br/>

---

## 🔐 Security Layer

```
┌────────────────────────────────────────────────────────────────────┐
│                        SECURITY POSTURE                            │
├────────────────────────────────────────────────────────────────────┤
│  HTTPS           Enforced by GitHub Pages + Cloudflare             │
│  CSP Header      Strict Content-Security-Policy in <meta>          │
│                  Allowlist: self · GTM · Facebook · Cloudflare     │
│  XSS Protection  X-XSS-Protection: 1; mode=block                  │
│  MIME Sniffing   X-Content-Type-Options: nosniff                   │
│  Referrer        strict-origin-when-cross-origin                   │
│  Permissions     camera=() microphone=() geolocation=(self)        │
│  Form Safety     esc() sanitizes all DOM injections (bc() fn)      │
│    Email           Cloudflare __cf_email__ obfuscation               │
│  Dependencies    ZERO — no npm, no CDN scripts, no supply chain    │
│  User Data       Nothing stored server-side — WhatsApp redirect    │
│  form-action     CSP restricts to self + wa.me only               │
└────────────────────────────────────────────────────────────────────┘
```

### Content Security Policy (Condensed)

```
default-src 'self'
script-src  'self' 'unsafe-inline' googletagmanager.com connect.facebook.net cdn-cgi.cloudflare.com
style-src   'self' 'unsafe-inline' fonts.googleapis.com
font-src    'self' fonts.gstatic.com
img-src     'self' data: https: blob:
connect-src 'self' google-analytics.com analytics.google.com doubleclick.net facebook.net
frame-src   google.com maps.google.com
form-action 'self' wa.me
object-src  'none'
base-uri    'self'
```

<br/>

---

## ⚡ Performance Numbers

### Lighthouse Scores

```
                    Mobile          Desktop
                 ┌──────────┐    ┌──────────┐
  Performance    │   98 ██▓ │    │  100 ███ │
  Accessibility  │   96 ██▓ │    │   98 ██▓ │
  Best Practices │  100 ███ │    │  100 ███ │
  SEO            │  100 ███ │    │  100 ███ │
                 └──────────┘    └──────────┘
```

### Asset Budget

```
┌──────────────────────────┬──────────────┬─────────────────────────┐
│ File                     │ Size         │ Notes                   │
├──────────────────────────┼──────────────┼─────────────────────────┤
│ index.html               │ ~70KB        │ All markup + inline SVG │
│ assets/css/main.css      │ ~37KB        │ Complete design system  │
│ assets/js/main.js        │ ~19KB        │ All app logic           │
│ config/app.js            │ ~2.6KB       │ Business config         │
│ sw.js                    │ ~4.8KB       │ Service worker          │
│ manifest.json            │ ~1.9KB       │ PWA manifest            │
│ 7× WebP Images           │ ~115KB total │ 8–22KB each             │
│ logo.svg                 │ ~1KB         │ Custom cocktail glass   │
├──────────────────────────┼──────────────┼─────────────────────────┤
│ TOTAL                    │ ~251KB       │ vs avg 2.5MB websites   │
│ Savings vs average       │ ~2.25MB      │ 10× lighter             │
└──────────────────────────┴──────────────┴─────────────────────────┘
```

### Performance Techniques Used

- **`preload as="style"`** → fonts load async, never block render
- **`fetchpriority="high"`** → hero image gets priority fetch
- **`decoding="async"`** → non-critical images decoded off main thread
- **`loading="lazy"`** → below-fold images defer loading
- **`defer`** on all non-critical scripts
- **`passive: true`** on all scroll event listeners
- **`requestAnimationFrame`** for cursor animation and card tilt
- **`will-change: transform`** on animated elements for GPU layer promotion
- **Zero render-blocking JS** — no script in `<head>` without `defer`
- **Cloudflare CDN** caches all static assets at edge globally

<br/>

---

## 🔄 Version History

```
v9.0  |  Apr 2025  |  Analytics Phase
      |            |  → Full GA4 event system (16 tracked events)
      |            |  → Meta Pixel with 3s delay load strategy
      |            |  → Scroll depth tracking (25/50/75/100%)
      |            |  → Menu item view tracking (IntersectionObserver)
      |            |  → FAQ, CTA, nav, FAB all tracked
      |            |  → PWA install/dismiss/installed events

v8.0  |  Apr 2025  |  Business Phase
      |            |  → Announcement bar (sessionStorage dismiss)
      |            |  → Live Open/Closed status badge (real-time clock check)
      |            |  → WhatsApp floating CTA (desktop) + sticky bar (mobile)
      |            |  → Footer newsletter → WhatsApp subscription
      |            |  → Testimonials section (6 reviews · 3-col grid)
      |            |  → FAQ section (7 questions · accordion)
      |            |  → Scroll depth milestone tracker

v7.0  |  Apr 2025  |  Self-Contained Phase
      |            |  → Real WebP images (7 files · 115KB total)
      |            |  → Custom SVG cocktail glass logo
      |            |  → Single HTML file (all assets embedded or linked)
      |            |  → File size optimized: 3MB → 200KB

v6.0  |  Apr 2025  |  Compression Phase
      |            |  → All images converted to WebP (80% size reduction)
      |            |  → Base64 image embedding removed (switched to file refs)
      |            |  → Mobile hang bug fixed (was caused by 3MB base64 blob)

v5.0  |  Apr 2025  |  Visual Phase
      |            |  → AI-generated 3D photorealistic restaurant images
      |            |  → Hero background image overlay (17% opacity)
      |            |  → Event card background images
      |            |  → Gallery rebuilt with real WebP renders

v4.0  |  Apr 2025  |  Theme Overhaul
      |            |  → Full theme flip: Dark → Warm Cream (#faf6f0)
      |            |  → All text: White → Dark charcoal (#2d1f0e)
      |            |  → Consistent cream hero background
      |            |  → Mobile half-width hero bug fixed
      |            |  → Stats strip overflow fixed

v3.0  |  Apr 2025  |  Menu Upgrade
      |            |  → Swiggy-style animated pill tabs (horizontal scroll)
      |            |  → Veg / Non-veg indicator dots on all 65+ items
      |            |  → Count badges on tabs (14, 16, 10...)
      |            |  → Rich atmospheric gradient gallery cards
      |            |  → Menu grid: 2-col → 1-col on mobile

v2.0  |  Apr 2025  |  Interaction Phase
      |            |  → Glassmorphism cards with backdrop-filter
      |            |  → 3-step reservation form → WhatsApp deep link
      |            |  → Floating label inputs with real-time validation
      |            |  → Hamburger mobile menu with slide animation
      |            |  → Page loader (TLL monogram animation)
      |            |  → Gold scroll progress bar
      |            |  → Hero typewriter effect (4 taglines)
      |            |  → Scroll spy navigation

v1.0  |  Apr 2025  |  Launch
      |            |  → Initial website
      |            |  → Dark premium theme
      |            |  → Menu · Gallery · Events · Reservation · Contact
      |            |  → WhatsApp booking integration
```

<br/>

---

## 🚀 Deployment

### How Auto-Deploy Works

```
Push to main branch
       ↓
GitHub Actions triggers (.github/workflows/deploy.yml)
       ↓
GitHub Pages builds static site
       ↓
Cloudflare CDN picks up new version
       ↓
Live at theliquidlounge.in
```

### Manual Local Preview

No build step. Just open the file:

```bash
# Option 1 — Direct open
open index.html

# Option 2 — Local server (recommended for SW testing)
npx serve .
# or
python3 -m http.server 8000
```

### DNS Configuration (Hostinger)

```
Type   |  Name   |  Value
───────┼─────────┼──────────────────────────────────
A      |  @      |  185.199.108.153
A      |  @      |  185.199.109.153
A      |  @      |  185.199.110.153
A      |  @      |  185.199.111.153
CNAME  |  www    |  s2zxx0zxx.github.io
```

### CNAME File

```
theliquidlounge.in
```

### robots.txt

```
User-agent: *
Allow: /
Sitemap: https://theliquidlounge.in/sitemap.xml
```

<br/>

---

## 🛡️ Security Policy

Found a vulnerability? Please do not open a public issue.

See [`SECURITY.md`](./SECURITY.md) for the responsible disclosure process, or reach out directly via WhatsApp: [+91 74391 33880](https://wa.me/917439133880).

<br/>

---

## 🌐 SEO & Structured Data

### Schema.org JSON-LD

Full `Restaurant` + `BarOrPub` schema with:
- `name` · `alternateName` · `description` · `url`
- `telephone` · `email` · `image` · `logo`
- `priceRange` (₹₹) · `servesCuisine` (5 types)
- `hasMenu` · `acceptsReservations`
- `address` → `PostalAddress` (street · locality · region · country)
- `openingHoursSpecification` (weekday + weekend separately)
- `sameAs` (Instagram · Facebook)
- `potentialAction` → `ReserveAction` → deep link to `#reservation`

### Open Graph (Social Sharing)

```html
og:type     → restaurant
og:locale   → en_IN
og:image    → 1200×630 preview.jpg
twitter:card → summary_large_image
```

### Meta Tags

- `robots: index, follow`
- `author: The Liquid Lounge`
- `canonical: https://theliquidlounge.in`
- `theme-color: #b8892a`
- `apple-mobile-web-app-capable: yes`
- `mobile-web-app-capable: yes`

<br/>

---

## 👨‍💻 Built By

<div align="center">

<br/>

**Satzzxzxx** — Solo Developer & Entrepreneur

*Building real digital businesses from scratch — one project at a time.*

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-S2zxx0zxx-181717?style=for-the-badge&logo=github)](https://github.com/S2zxx0zxx)
[![Website](https://img.shields.io/badge/Portfolio-satzzxzxx.me-C9A84C?style=for-the-badge&logo=safari&logoColor=white)](https://satzzxzxx.me)
[![Instagram](https://img.shields.io/badge/Instagram-__.satzzxzxx-E4405F?style=for-the-badge&logo=instagram)](https://instagram.com/__.satzzxzxx)
[![Twitter](https://img.shields.io/badge/Twitter-satzzxzxx-1DA1F2?style=for-the-badge&logo=twitter)](https://twitter.com/satzzxzxx)
[![Telegram](https://img.shields.io/badge/Telegram-InvestGrow__IN-2CA5E0?style=for-the-badge&logo=telegram)](https://t.me/InvestGrow_IN)

<br/>

> *"Zero frameworks. Zero dependencies. Just a deep understanding of the web platform and the patience to engineer every pixel by hand."*

<br/>

**Other Projects**

| Project | Description | Stack |
|---|---|---|
| [FinCalc India](https://satzzxzxx.me) | Personal finance calculator suite · 11 tools | HTML · CSS · JS · PWA |
| [GameMart](https://github.com/S2zxx0zxx) | Digital accounts storefront | Single-file HTML |
| FanGate | Sports ticket marketplace | GitHub Pages |
| Nexus AI | AI SaaS Operating System | React · Node · Firebase |

</div>

<br/>

---

<div align="center">

**⭐ Star this repo if the engineering impressed you.**

*Every line of this codebase was written intentionally. Nothing is here by accident.*

<br/>

![Footer](https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=20&height=100&section=footer&animation=twinkling)

</div>
