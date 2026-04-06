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
if (cur && curR) {
  document.body.classList.add('js-cursor');
  document.addEventListener('mousemove', e => {
    cur.style.left = e.clientX + 'px';
    cur.style.top = e.clientY + 'px';
    setTimeout(() => { curR.style.left = e.clientX + 'px'; curR.style.top = e.clientY + 'px'; }, 90);
  });
  document.querySelectorAll('a,button,.m-card,.ev-card,.gi').forEach(el => {
    el.addEventListener('mouseenter', () => curR.classList.add('h'));
    el.addEventListener('mouseleave', () => curR.classList.remove('h'));
  });
}

/* ── SCROLL: progress bar + nav highlight ───────────────────────────────── */
const nav = document.getElementById('nav');
document.querySelectorAll('.fg select').forEach(function(sel) {
  sel.addEventListener('change', function() {
    this.classList.toggle('has-val', this.value !== '');
  });
});
window.addEventListener('scroll', () => {
  requestAnimationFrame(() => {
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    const pb = document.getElementById('pb');
    if (pb) pb.style.width = pct + '%';
    if (nav) nav.classList.toggle('sc', window.scrollY > 60);
    let cu = '';
    ['menu','gallery','events','reservation','contact'].forEach(id => {
      const s = document.getElementById(id);
      if (s && window.scrollY >= s.offsetTop - 130) cu = id;
    });
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.toggle('active', a.dataset.s === cu));
  });
});

/* ── MOBILE MENU ─────────────────────────────────────────────────────────── */
const tm = () => {
  const hbg = document.getElementById('hbg'), mm = document.getElementById('mm');
  hbg.classList.toggle('o'); mm.classList.toggle('o');
  const open = hbg.classList.contains('o');
  hbg.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  hbg.setAttribute('aria-expanded', open ? 'true' : 'false');
  mm.setAttribute('aria-hidden', open ? 'false' : 'true');
};
const cm = () => {
  const hbg = document.getElementById('hbg'), mm = document.getElementById('mm');
  hbg.classList.remove('o'); mm.classList.remove('o');
  hbg.setAttribute('aria-label', 'Open menu');
  hbg.setAttribute('aria-expanded', 'false');
  mm.setAttribute('aria-hidden', 'true');
};

/* ── SCROLL REVEAL ───────────────────────────────────────────────────────── */
const ro = new IntersectionObserver(e => {
  e.forEach(x => { if (x.isIntersecting) x.target.classList.add('vis'); });
}, { threshold: 0, rootMargin: '0px 0px -20px 0px' });
document.querySelectorAll('.rv,.rl,.rr').forEach(el => ro.observe(el));
setTimeout(() => { document.querySelectorAll('.rv,.rl,.rr').forEach(el => el.classList.add('vis')); }, 2000);

/* ── MENU SWITCH (syncs desktop + mobile tabs) ──────────────────────────── */
const sw = (panel, btn, tid) => {
  document.querySelectorAll('.m-panel').forEach(p => p.classList.remove('act'));
  document.querySelectorAll('#dT button, #mT button').forEach(b => b.classList.remove('act'));
  document.getElementById('panel-' + panel).classList.add('act');
  btn.classList.add('act');
  const idx = Array.from(btn.parentElement.children).indexOf(btn);
  const otherGroup = tid === 'dT' ? document.getElementById('mT') : document.getElementById('dT');
  if (otherGroup) { const ob = otherGroup.querySelectorAll('button')[idx]; if (ob) ob.classList.add('act'); }
  track('menu_tab_switch', { event_category: 'menu', event_label: panel });
};

/* ── FORM (multi-step reservation) ──────────────────────────────────────── */
const ns = (f) => {
  if (f === 1) {
    if (!document.getElementById('fn').value.trim() || !document.getElementById('fp').value.trim() || !document.getElementById('fd').value || !document.getElementById('ft').value) {
      alert('Please fill in all fields.');
      return;
    }
    track('reservation_step2', { event_category: 'reservation', event_label: 'step_1_complete' });
  }
  if (f === 2) { bc(); track('reservation_step3', { event_category: 'reservation', event_label: 'step_2_complete' }); }
  gs(f + 1);
};
const ps = (f) => { gs(f - 1); };
const gs = (n) => {
  document.querySelectorAll('.fs').forEach(s => s.classList.remove('act'));
  document.getElementById('fs' + n).classList.add('act');
  [1,2,3].forEach(i => {
    const el = document.getElementById('si' + i);
    el.classList.remove('a','d');
    if (i < n) el.classList.add('d');
    if (i === n) el.classList.add('a');
  });
};
const bc = () => {
  const n = document.getElementById('fn').value,
        p = document.getElementById('fp').value,
        d = document.getElementById('fd').value,
        t = document.getElementById('ft').value,
        g = document.getElementById('gg').value || 'Not specified',
        o = document.getElementById('go').value || 'Regular Dining',
        nt = document.getElementById('gn').value || 'None';
  const esc = (s) => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
  document.getElementById('conf').innerHTML = `<h4 style="margin-bottom:14px;font-family:'Cormorant Garamond',serif;font-size:20px;color:var(--dark)">Booking Summary</h4><div class="ir"><div class="ii">👤</div><div class="it"><strong>Name</strong>${esc(n)}</div></div><div class="ir"><div class="ii">📞</div><div class="it"><strong>Phone</strong>${esc(p)}</div></div><div class="ir"><div class="ii">📅</div><div class="it"><strong>Date & Time</strong>${esc(d)} at ${esc(t)}</div></div><div class="ir"><div class="ii">👥</div><div class="it"><strong>Guests</strong>${esc(g)}</div></div><div class="ir"><div class="ii">🎉</div><div class="it"><strong>Occasion</strong>${esc(o)}</div></div><div class="ir"><div class="ii">📝</div><div class="it"><strong>Notes</strong>${esc(nt)}</div></div>`;
};
const sub = () => {
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
};
const vf = (el, type) => {
  if (type === 'n') { el.value.trim().length > 1 ? el.classList.add('v') : el.classList.remove('v'); }
  if (type === 'p') { /^[0-9+\s\-]{7,15}$/.test(el.value.trim()) ? el.classList.add('v') : el.classList.remove('v'); }
};

/* ── EVENT TRACKING: CTA & Navigation clicks ─────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  // Hero CTAs
  document.querySelectorAll('.bp, .bs').forEach(btn => {
    btn.addEventListener('click', () => {
      track('cta_click', { event_category: 'engagement', event_label: btn.textContent.trim() });
    });
  });
  // Nav Reserve button
  const navCta = document.querySelector('.nav-cta');
  if (navCta) navCta.addEventListener('click', () => track('nav_reserve_click', { event_category: 'engagement' }));
  // Menu card views via IntersectionObserver
  const cardObs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { track('menu_item_view', { event_category: 'menu', event_label: e.target.querySelector('.cn')?.textContent || 'card' }); cardObs.unobserve(e.target); } });
  }, { threshold: 0.5 });
  document.querySelectorAll('.m-card').forEach(c => cardObs.observe(c));
  // Floating buttons (event tracking inline in HTML, add tooltips here)
  const fabCall = document.getElementById('fab-call');
  const fabWa = document.getElementById('fab-wa');
  if (fabCall) fabCall.addEventListener('click', () => track('call_click', { event_category: 'engagement', event_label: 'fab' }));
  if (fabWa) fabWa.addEventListener('click', () => track('whatsapp_click', { event_category: 'engagement', event_label: 'fab' }));
});

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
