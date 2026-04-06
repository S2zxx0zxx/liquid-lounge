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

> ### \ud83e\udd43 A production-grade, zero-dependency restaurant web app \u2014 hand-crafted with pure HTML, CSS & Vanilla JS.
> No React. No Node. No build tools. Just exceptional engineering.

<br/>

[\ud83c\udf10 Live Site](https://theliquidlounge.in) &nbsp;\u00b7&nbsp; [\ud83d\udcac WhatsApp](https://wa.me/917439133880) &nbsp;\u00b7&nbsp; [\ud83d\udcf8 Instagram](https://instagram.com/liquidlounge.vibes) &nbsp;\u00b7&nbsp; [\u25b6\ufe0f YouTube](https://youtube.com/@liquidlounge-vibes) &nbsp;\u00b7&nbsp; [\ud83d\udc1b Report Bug](https://github.com/S2zxx0zxx/liquid-lounge/issues)

</div>

---

<br/>

## \ud83d\uddfa\ufe0f Table of Contents

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

## \ud83c\udfdb\ufe0f What Is This

**The Liquid Lounge** is a premium bar & restaurant located on Khalpar Road, Tegachhi Mamudpur, West Bengal \u2014 a standalone destination on a highway-connecting road with zero food/beverage competition within 5km.

This repository is the **complete production website** for the business. It is not a template. It is not a boilerplate. It is a hand-engineered, conversion-optimized, analytics-wired, PWA-enabled digital product built entirely without frameworks \u2014 because sometimes the right tool is understanding the web platform itself.

```
Everything lives in one repo.
One HTML file. One CSS file. One JS file.
Zero npm install. Zero webpack. Zero React.
Just the browser doing what browsers were built to do.
```

<br/>

---

## \u26a1 Live Architecture

```
\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510
\u2502                    THE LIQUID LOUNGE \u2014 v9.0                          \u2502
\u2502                   Production Architecture                            \u2502
\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Frontend            \u2502  Pure HTML5 + CSS3 + Vanilla ES6+            \u2502
\u2502  Entry Point         \u2502  index.html  (70KB \u00b7 5,258 lines)            \u2502
\u2502  Styles              \u2502  assets/css/main.css  (37KB)                 \u2502
\u2502  Scripts             \u2502  assets/js/main.js  (19KB)                   \u2502
\u2502  Config              \u2502  config/app.js  (2.6KB \u00b7 business constants) \u2502
\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Hosting             \u2502  GitHub Pages (Static)                       \u2502
\u2502  CDN                 \u2502  Cloudflare (Cache \u00b7 HTTPS \u00b7 DDoS)           \u2502
\u2502  Domain              \u2502  theliquidlounge.in                          \u2502
\u2502  DNS Provider        \u2502  Hostinger                                   \u2502
\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Images              \u2502  7\u00d7 WebP compressed (8\u201322KB each)            \u2502
\u2502  Total Asset Size    \u2502  ~115KB images + ~130KB code = ~250KB total  \u2502
\u2502  Industry Average    \u2502  ~2.5MB  (10\u00d7 heavier than this)             \u2502
\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  Analytics           \u2502  GA4 \u00b7 G-N7C8LZ5KX8                         \u2502
\u2502  Paid Ads            \u2502  Meta Pixel \u00b7 ID 1303788181629813            \u2502
\u2502  PWA Cache           \u2502  Service Worker v4 \u00b7 3-strategy caching      \u2502
\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524
\u2502  CI/CD               \u2502  GitHub Actions (auto-deploy on push)        \u2502
\u2502  SEO                 \u2502  Schema.org JSON-LD \u00b7 Open Graph \u00b7 Sitemap   \u2502
\u2502  Security            \u2502  CSP Headers \u00b7 Input Sanitization \u00b7 HTTPS    \u2502
\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518
```

<br/>

---

## \ud83d\uddc2\ufe0f Project Structure

```
liquid-lounge/
\u2502
\u251c\u2500\u2500 \ud83d\udcc4 index.html                    # Main website (Single-file PWA \u00b7 70KB)
\u2502
\u251c\u2500\u2500 \ud83d\udcc1 assets/
\u2502   \u251c\u2500\u2500 \ud83d\udcc1 css/
\u2502   \u2502   \u2514\u2500\u2500 \ud83c\udfa8 main.css             # Complete design system (37KB)
\u2502   \u251c\u2500\u2500 \ud83d\udcc1 js/
\u2502   \u2502   \u2514\u2500\u2500 \u2699\ufe0f  main.js             # All application logic (19KB)
\u2502   \u2514\u2500\u2500 \ud83d\udcc1 images/
\u2502       \u251c\u2500\u2500 \ud83d\uddbc\ufe0f  hero-bg.webp        # Hero background (22KB \u00b7 WebP)
\u2502       \u251c\u2500\u2500 \ud83d\uddbc\ufe0f  gallery-1.webp      # Bar Area (20KB)
\u2502       \u251c\u2500\u2500 \ud83d\uddbc\ufe0f  gallery-2.webp      # Dining Hall (12KB)
\u2502       \u251c\u2500\u2500 \ud83d\uddbc\ufe0f  gallery-3.webp      # Event Space (13KB)
\u2502       \u251c\u2500\u2500 \ud83d\uddbc\ufe0f  gallery-4.webp      # Night Vibes (11KB)
\u2502       \u251c\u2500\u2500 \ud83d\uddbc\ufe0f  gallery-5.
