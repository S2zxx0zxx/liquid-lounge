/* ==========================================================================
   The Liquid Lounge — Service Worker  (Phase 5: Advanced PWA)
   Cache version: bump CACHE_VERSION on every deploy to bust stale assets.
   Strategy:
     • Static shell  → Cache-first (instant loads)
     • Pages/HTML    → Network-first with cache fallback (fresh content)
     • 3rd-party     → Stale-while-revalidate (fonts, analytics CDNs)
   ========================================================================== */

const CACHE_VERSION = 'v4';
const CACHE_STATIC  = `ll-static-${CACHE_VERSION}`;
const CACHE_PAGES   = `ll-pages-${CACHE_VERSION}`;
const CACHE_FONTS   = `ll-fonts-${CACHE_VERSION}`;

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.png',
  '/assets/css/main.css',
  '/assets/js/main.js',
  '/config/app.js',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  '/assets/images/logo.svg',
  '/assets/images/hero-bg.webp',
  '/assets/images/gallery-1.webp',
  '/assets/images/gallery-2.webp',
  '/assets/images/gallery-3.webp',
  '/assets/images/gallery-4.webp',
  '/assets/images/gallery-5.webp',
  '/assets/images/gallery-6.webp',
  '/assets/images/gallery-7.webp',
];

/* ── Install: pre-cache static shell ────────────────────────────────────── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_STATIC)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

/* ── Activate: purge outdated caches ────────────────────────────────────── */
self.addEventListener('activate', event => {
  const VALID_CACHES = [CACHE_STATIC, CACHE_PAGES, CACHE_FONTS];
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(k => !VALID_CACHES.includes(k))
          .map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

/* ── Fetch: routing strategy ────────────────────────────────────────────── */
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignore non-GET and browser-extension requests
  if (request.method !== 'GET' || url.protocol === 'chrome-extension:') return;

  // Google Fonts → cache-first (long-lived)
  if (url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com') {
    event.respondWith(cacheFirst(request, CACHE_FONTS));
    return;
  }

  // Static assets (CSS, JS, images, icons) → cache-first
  if (
    url.pathname.startsWith('/assets/') ||
    url.pathname.startsWith('/icons/') ||
    url.pathname.startsWith('/config/') ||
    url.pathname === '/favicon.png' ||
    url.pathname === '/manifest.json'
  ) {
    event.respondWith(cacheFirst(request, CACHE_STATIC));
    return;
  }

  // HTML pages → network-first (always try fresh, fall back to cache)
  if (request.headers.get('accept')?.includes('text/html') || url.pathname === '/') {
    event.respondWith(networkFirst(request, CACHE_PAGES));
    return;
  }

  // Everything else → stale-while-revalidate
  event.respondWith(staleWhileRevalidate(request, CACHE_STATIC));
});

/* ── Caching strategies ─────────────────────────────────────────────────── */

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
  }
}

async function networkFirst(request, cacheName) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request) || await caches.match('/index.html');
    return cached || new Response('Offline', { status: 503 });
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const networkFetch = fetch(request).then(response => {
    if (response.ok) cache.put(request, response.clone());
    return response;
  }).catch(() => null);
  return cached || await networkFetch || new Response('Offline', { status: 503 });
}
