/* ==========================================================================
   The Liquid Lounge — Main Application Script
   Phase 3 (Modularized) | Phase 8 (Business) | Phase 9 (Analytics)
   ========================================================================== */

/* ── Helper: Safe GA4 event tracker ─────────────────────────────────────── */
const track = (name, params) => {
  if (typeof gtag === 'function') gtag('event', name, params || {});
};

/* ── LOADER ──────────────────────────────────────────────────────────────── */
const hideLoader = () => {
  const loader = document.getElementById('loader');
  (()=>{const fd=document.getElementById('fd');if(fd)fd.min=new Date().toISOString().split('T')[0];})();
  if (loader) {
    loader.style.opacity = '0';
    loader.style.visibility = 'hidden';
    loader.style.pointerEvents = 'none';
    loader.style.animationName = 'none';
  }
};
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', hideLoader);
} else {
  hideLoader();
}
window.addEventListener('load', hideLoader);
setTimeout(hideLoader, 600);

/* ── PARTICLES ───────────────────────────────────────────────────────────── */
(function(){
  const c = document.getElementById('pts');
  if (!c) return;
  for (let i = 0; i < 14; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const s = Math.random() * 2 + .8;
    p.style.cssText = `width:${s}px;height:${s}px;left:${Math.random()*100}%;animation-duration:${Math.random()*10+8}s;animation-delay:${Math.random()*8}s;`;
    c.appendChild(p);
  }
})();

/* ── TYPEWRITER ──────────────────────────────────────────────────────────── */
(function(){
  const ph = ["Where Every Evening Becomes a Memory","Crafted Drinks. Incredible Food.","Area Ka Favourite Adda","Premium Bar & Dining Experience"];
  let pi = 0, ci = 0, del = false;
  const el = document.getElementById('tw');
  if (!el) return;
  function t() {
    const p = ph[pi];
    if (!del) {
      el.textContent = p.slice(0, ++ci);
      if (ci === p.length) { del = true; setTimeout(t, 2000); return; }
    } else {
      el.textContent = p.slice(0, --ci);
      if (ci === 0) { del = false; pi = (pi + 1) % ph.length; }
    }
    setTimeout(t, del ? 38 : 62);
  }
  setTimeout(t, 1400);
})();

/* ── CURSOR ──────────────────────────────────────────────────────────────── */
const cur = document.getElementById('cur');
const curR = document.getElementById('curR');
let mx = 0, my = 0, rx = 0, ry = 0;
if (cur && curR) {
  document.body.classList.add('js-cursor');
  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  });
  document.querySelectorAll('a,button,.m-card,.ev-card,.gi,.tm-card,.faq-q').forEach(el => {
    el.addEventListener('mouseenter', () => curR.classList.add('h'));
    el.addEventListener('mouseleave', () => curR.classList.remove('h'));
  });
  (function animateCursor() {
    // Offsets center the cursor dot (half of 8px) and ring (half of 34px) on the pointer
    const DOT_HALF = 4, RING_HALF = 17;
    cur.style.transform = `translate(${mx - DOT_HALF}px,${my - DOT_HALF}px)`;
    rx += (mx - RING_HALF - rx) * 0.15;
    ry += (my - RING_HALF - ry) * 0.15;
    curR.style.transform = `translate(${rx.toFixed(1)}px,${ry.toFixed(1)}px)`;
    requestAnimationFrame(animateCursor);
  })();
}

/* ── SCROLL: progress bar + nav highlight ───────────────────────────────── */
const nav = document.getElementById('nav');
document.querySelectorAll('.fg select').forEach(function(sel) {
  sel.addEventListener('change', function() {
    this.classList.toggle('has-val', this.value !== '');
  });
});

/* Cache section offsets to avoid forced reflow on every scroll event */
const sectionIds = ['menu','gallery','events','reservation','contact'];
const sectionOffsets = {};
function cacheOffsets() {
  sectionIds.forEach(id => {
    const s = document.getElementById(id);
    if (s) sectionOffsets[id] = s.offsetTop;
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', cacheOffsets);
} else {
  cacheOffsets();
}
window.addEventListener('resize', cacheOffsets);

window.addEventListener('scroll', () => {
  requestAnimationFrame(() => {
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const pb = document.getElementById('pb');
    if (pb) pb.style.width = pct + '%';
    if (nav) nav.classList.toggle('sc', window.scrollY > 60);
    let cu = '';
    ['menu','gallery','events','testimonials','faq','reservation','contact'].forEach(id => {
      const s = document.getElementById(id);
      if (s && window.scrollY >= s.offsetTop - 130) cu = id;
    });
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.toggle('active', a.dataset.s === cu));
  });
}, { passive: true });

/* ── MOBILE MENU ─────────────────────────────────────────────────────────── */
function tm() {
  const hbg = document.getElementById('hbg'), mm = document.getElementById('mm');
  hbg.classList.toggle('o'); mm.classList.toggle('o');
  const open = hbg.classList.contains('o');
  hbg.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  hbg.setAttribute('aria-expanded', open ? 'true' : 'false');
  mm.setAttribute('aria-hidden', open ? 'false' : 'true');
}
function cm() {
  const hbg = document.getElementById('hbg'), mm = document.getElementById('mm');
  hbg.classList.remove('o'); mm.classList.remove('o');
  hbg.setAttribute('aria-label', 'Open menu');
  hbg.setAttribute('aria-expanded', 'false');
  mm.setAttribute('aria-hidden', 'true');
}

/* ── SCROLL REVEAL ───────────────────────────────────────────────────────── */
const ro = new IntersectionObserver(e => {
  e.forEach(x => { if (x.isIntersecting) x.target.classList.add('vis'); });
}, { threshold: 0, rootMargin: '0px 0px -20px 0px' });
document.querySelectorAll('.rv,.rl,.rr').forEach(el => ro.observe(el));
setTimeout(() => { document.querySelectorAll('.rv,.rl,.rr').forEach(el => el.classList.add('vis')); }, 2000);

/* ── MENU SWITCH (syncs desktop + mobile tabs) ──────────────────────────── */
function sw(panel, btn, tid) {
  document.querySelectorAll('.m-panel').forEach(p => p.classList.remove('act'));
  document.querySelectorAll('#dT button, #mT button').forEach(b => b.classList.remove('act'));
  document.getElementById('panel-' + panel).classList.add('act');
  btn.classList.add('act');
  const idx = Array.from(btn.parentElement.children).indexOf(btn);
  const otherGroup = tid === 'dT' ? document.getElementById('mT') : document.getElementById('dT');
  if (otherGroup) { const ob = otherGroup.querySelectorAll('button')[idx]; if (ob) ob.classList.add('act'); }
  track('menu_tab_switch', { event_category: 'menu', event_label: panel });
}

/* ── FORM (multi-step reservation) ──────────────────────────────────────── */
function ns(f) {
  if (f === 1) {
    if (!document.getElementById('fn').value.trim() || !document.getElementById('fp').value.trim() || !document.getElementById('fd').value || !document.getElementById('ft').value) {
      alert('Please fill in all fields.');
      return;
    }
    track('reservation_step2', { event_category: 'reservation', event_label: 'step_1_complete' });
  }
  if (f === 2) { bc(); track('reservation_step3', { event_category: 'reservation', event_label: 'step_2_complete' }); }
  gs(f + 1);
}
function ps(f) { gs(f - 1); }
function gs(n) {
  document.querySelectorAll('.fs').forEach(s => s.classList.remove('act'));
  document.getElementById('fs' + n).classList.add('act');
  [1,2,3].forEach(i => {
    const el = document.getElementById('si' + i);
    el.classList.remove('a','d');
    if (i < n) el.classList.add('d');
    if (i === n) el.classList.add('a');
  });
}
function bc() {
  const n = document.getElementById('fn').value,
        p = document.getElementById('fp').value,
        d = document.getElementById('fd').value,
        t = document.getElementById('ft').value,
        g = document.getElementById('gg').value || 'Not specified',
        o = document.getElementById('go').value || 'Regular Dining',
        nt = document.getElementById('gn').value || 'None';
  const esc = (s) => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  document.getElementById('conf').innerHTML = `<h4 style="margin-bottom:14px;font-family:'Cormorant Garamond',serif;font-size:20px;color:var(--dark)">Booking Summary</h4><div class="ir"><div class="ii">👤</div><div class="it"><strong>Name</strong>${esc(n)}</div></div><div class="ir"><div class="ii">📞</div><div class="it"><strong>Phone</strong>${esc(p)}</div></div><div class="ir"><div class="ii">📅</div><div class="it"><strong>Date & Time</strong>${esc(d)} at ${esc(t)}</div></div><div class="ir"><div class="ii">👥</div><div class="it"><strong>Guests</strong>${esc(g)}</div></div><div class="ir"><div class="ii">🎉</div><div class="it"><strong>Occasion</strong>${esc(o)}</div></div><div class="ir"><div class="ii">📝</div><div class="it"><strong>Notes</strong>${esc(nt)}</div></div>`;
}
function sub() {
  const n = document.getElementById('fn').value,
        p = document.getElementById('fp').value,
        d = document.getElementById('fd').value,
        t = document.getElementById('ft').value,
        g = document.getElementById('gg').value || 'Not specified',
        o = document.getElementById('go').value || 'Regular Dining',
        nt = document.getElementById('gn').value || 'None';
  const msg = `Hello! I'd like to reserve a table at The Liquid Lounge.%0A%0A👤 *Name:* ${n}%0A📞 *Phone:* ${p}%0A📅 *Date:* ${d} at ${t}%0A👥 *Guests:* ${g}%0A🎉 *Occasion:* ${o}%0A📝 *Notes:* ${nt}`;
  track('reservation_submitted', { event_category: 'reservation', event_label: 'whatsapp_booking', value: 1 });
  window.open(`https://wa.me/917439133880?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  document.querySelectorAll('.fs').forEach(s => s.classList.remove('act'));
  document.getElementById('sok').classList.add('show');
  [1,2,3].forEach(i => document.getElementById('si' + i).classList.add('d'));
}
function vf(el, type) {
  if (type === 'n') { el.value.trim().length > 1 ? el.classList.add('v') : el.classList.remove('v'); }
  if (type === 'p') { /^[0-9+\s\-]{7,15}$/.test(el.value.trim()) ? el.classList.add('v') : el.classList.remove('v'); }
}

/* ── ANNOUNCEMENT BAR ────────────────────────────────────────────────────── */
(function() {
  const bar = document.getElementById('ann-bar');
  const cls = document.getElementById('ann-cls');
  if (!bar || !cls) return;
  try { if (sessionStorage.getItem('ann-dismissed')) { bar.style.display = 'none'; return; } } catch(e) {}
  cls.addEventListener('click', () => {
    bar.style.maxHeight = '0';
    bar.style.padding = '0';
    bar.style.borderBottomWidth = '0';
    setTimeout(() => { bar.style.display = 'none'; }, 400);
    try { sessionStorage.setItem('ann-dismissed', '1'); } catch(e) {}
    track('announcement_dismissed', { event_category: 'engagement' });
  });
})();

/* ── DYNAMIC OPEN / CLOSED STATUS ────────────────────────────────────────── */
(function() {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 6=Sat
  const isWeekend = (day === 0 || day === 6);
  const total = now.getHours() * 60 + now.getMinutes();
  const openTime  = isWeekend ? 10 * 60 : 11 * 60;
  const closeTime = isWeekend ? 24 * 60 : 23 * 60;
  const isOpen = total >= openTime && total < closeTime;

  // Append open/closed badge next to hours
  const htd = document.getElementById('htd');
  if (htd) {
    const badge = document.createElement('span');
    badge.className = 'status-badge ' + (isOpen ? 'status-open' : 'status-closed');
    badge.textContent = isOpen ? 'Open Now' : 'Closed';
    htd.parentNode.appendChild(badge);
  }
})();

/* ── FAQ ACCORDION ───────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', function() {
      const ans = this.nextElementSibling;
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      document.querySelectorAll('.faq-q').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        if (b.nextElementSibling) b.nextElementSibling.classList.remove('open');
      });
      if (!isExpanded) {
        this.setAttribute('aria-expanded', 'true');
        ans.classList.add('open');
        track('faq_opened', { event_category: 'engagement', event_label: this.textContent.trim().slice(0, 50) });
      }
    });
  });

  /* ── EVENT TRACKING: CTA & Navigation clicks ─────────────────────────── */
  document.querySelectorAll('.bp, .bs').forEach(btn => {
    btn.addEventListener('click', () => {
      track('cta_click', { event_category: 'engagement', event_label: btn.textContent.trim() });
    });
  });
  const navCta = document.querySelector('.nav-cta');
  if (navCta) navCta.addEventListener('click', () => track('nav_reserve_click', { event_category: 'engagement' }));
  const cardObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { track('menu_item_view', { event_category: 'menu', event_label: e.target.querySelector('.cn')?.textContent || 'card' }); cardObs.unobserve(e.target); } });
  }, { threshold: 0.5 });
  document.querySelectorAll('.m-card').forEach(c => cardObs.observe(c));
  const fabCall = document.getElementById('fab-call');
  const fabWa = document.getElementById('fab-wa');
  if (fabCall) fabCall.addEventListener('click', () => track('call_click', { event_category: 'engagement', event_label: 'fab' }));
  if (fabWa) fabWa.addEventListener('click', () => track('whatsapp_click', { event_category: 'engagement', event_label: 'fab' }));

  /* ── NEWSLETTER LEAD CAPTURE ──────────────────────────────────────────── */
  const nlBtn = document.getElementById('nl-btn');
  const nlInp = document.getElementById('nl-inp');
  if (nlBtn && nlInp) {
    nlBtn.addEventListener('click', () => {
      const val = nlInp.value.trim();
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      const isPhone = /^[+]?[0-9\s\-]{7,15}$/.test(val);
      if (!val || (!isEmail && !isPhone)) {
        nlInp.style.borderColor = '#c85032';
        setTimeout(() => { nlInp.style.borderColor = ''; }, 2000);
        return;
      }
      const msg = `Hi! I\u2019d like to stay updated on offers and events at The Liquid Lounge.%0AContact: ${encodeURIComponent(val)}`;
      track('newsletter_subscribe', { event_category: 'lead', event_label: isEmail ? 'email' : 'phone' });
      window.open(`https://wa.me/917439133880?text=${msg}`, '_blank', 'noopener,noreferrer');
      nlBtn.textContent = 'Thanks! \u2713';
      nlBtn.style.background = 'var(--gold)';
      setTimeout(() => { nlBtn.textContent = 'Subscribe \u2192'; nlBtn.style.background = ''; nlInp.value = ''; }, 3000);
    });
  }
});

/* ── SCROLL DEPTH TRACKING ───────────────────────────────────────────────── */
(function() {
  const marks = [25, 50, 75, 100];
  const tracked = new Set();
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      const pct = Math.round((scrolled / total) * 100);
      marks.forEach(m => {
        if (!tracked.has(m) && pct >= m) {
          tracked.add(m);
          track('scroll_depth', { event_category: 'engagement', event_label: m + '%', value: m });
        }
      });
      ticking = false;
    });
  }, { passive: true });
})();

/* ── MAP CLICK-TO-LOAD ───────────────────────────────────────────────────── */
function loadMap(btn) {
  var box = btn.closest('.map-box');
  if (!box) return;
  var iframe = document.createElement('iframe');
  iframe.src = 'https://maps.google.com/maps?q=9FW7%2BJCM+Khalpar+Road+Tegachhi+Mamudpur+West+Bengal&z=15&output=embed';
  iframe.width = '100%';
  iframe.height = '100%';
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allowfullscreen', '');
  iframe.title = 'The Liquid Lounge Location \u2014 Khalpar Road, Tegachhi Mamudpur, West Bengal';
  iframe.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
  box.replaceChildren(iframe);
}

/* ── GALLERY BACKGROUND LAZY LOAD ────────────────────────────────────────── */
(function() {
  const bgObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting && e.target.dataset.bg) {
        e.target.style.background = e.target.dataset.bg;
        bgObs.unobserve(e.target);
      }
    });
  }, { rootMargin: '100px' });
  document.querySelectorAll('.g-in[data-bg]').forEach(el => bgObs.observe(el));
})();

/* ── SERVICE WORKER REGISTRATION ─────────────────────────────────────────── */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}

/* ── PWA INSTALL PROMPT ──────────────────────────────────────────────────── */
(function() {
  let deferredPrompt;
  const popup = document.getElementById('pwa-install-popup');
  const installBtn = document.getElementById('pwa-install-btn');
  const dismissBtn = document.getElementById('pwa-dismiss-btn');
  if (!popup || !installBtn || !dismissBtn) return;
  window.addEventListener('beforeinstallprompt', function(e) {
    e.preventDefault();
    deferredPrompt = e;
    popup.style.display = 'block';
  });
  installBtn.addEventListener('click', function() {
    popup.style.display = 'none';
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(function(result) {
        track('pwa_install', { event_category: 'pwa', event_label: result.outcome });
        deferredPrompt = null;
      });
    }
  });
  dismissBtn.addEventListener('click', function() {
    popup.style.display = 'none';
    track('pwa_dismissed', { event_category: 'pwa' });
  });
  window.addEventListener('appinstalled', function() {
    popup.style.display = 'none';
    deferredPrompt = null;
    track('pwa_installed', { event_category: 'pwa' });
  });
})();

/* ── EXIT INTENT POPUP ───────────────────────────────────────────────────── */
(function() {
  var popup = document.getElementById('exit-popup');
  var closeBtn = document.getElementById('exit-close');
  var laterBtn = document.getElementById('exit-later');
  var ctaBtn = document.getElementById('exit-cta');
  if (!popup) return;

  var shown = false;
  var pageLoadTime = Date.now();

  function showPopup() {
    if (shown || sessionStorage.getItem('exit-shown')) return;
    shown = true;
    popup.classList.add('show');
    track('exit_popup_shown', { event_category: 'engagement' });
  }

  function closePopup() {
    popup.classList.remove('show');
    sessionStorage.setItem('exit-shown', '1');
  }

  closeBtn.addEventListener('click', closePopup);
  laterBtn.addEventListener('click', closePopup);
  popup.addEventListener('click', function(e) { if (e.target === popup) closePopup(); });
  if (ctaBtn) ctaBtn.addEventListener('click', function() {
    track('exit_popup_cta_click', { event_category: 'conversion' });
  });

  // Desktop: mouse leaving top of page after 15s
  var isMobile = /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth <= 960;
  if (!isMobile) {
    document.addEventListener('mouseleave', function(e) {
      if (e.clientY < 10 && (Date.now() - pageLoadTime) >= 15000) showPopup();
    });
  } else {
    // Mobile: scrolled 80% then scrolled back up 200px from maximum
    var maxScroll = 0;
    var triggered80 = false;
    window.addEventListener('scroll', function() {
      var scrolled = window.scrollY + window.innerHeight;
      var total = document.documentElement.scrollHeight;
      var pct = scrolled / total * 100;
      if (pct >= 80) {
        triggered80 = true;
        if (window.scrollY > maxScroll) maxScroll = window.scrollY;
      }
      if (triggered80 && maxScroll > 0 && (maxScroll - window.scrollY) >= 200) showPopup();
    }, { passive: true });
  }
})();

/* ── SCARCITY BAR ────────────────────────────────────────────────────────── */
(function() {
  var numEl = document.getElementById('scar-num');
  if (!numEl) return;
  var count = Math.floor(Math.random() * 5) + 2; // 2-6
  numEl.textContent = count;
  setInterval(function() {
    if (count > 1) { count--; numEl.textContent = count; }
  }, 45000);
})();
