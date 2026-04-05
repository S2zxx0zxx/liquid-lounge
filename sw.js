const CACHE_NAME = 'liquid-lounge-v1';
const STATIC_ASSETS = ['/', '/index.html', '/manifest.json', '/favicon.png', '/icons/icon-192.png', '/icons/icon-512.png'];

self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(STATIC_ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || e.request.url.startsWith('chrome-extension')) return;
  e.respondWith(fetch(e.request).then(r => { caches.open(CACHE_NAME).then(c => c.put(e.request, r.clone())); return r; }).catch(() => caches.match(e.request).then(r => r || caches.match('/index.html'))));
});
