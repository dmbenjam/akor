/* =========================================================
   === INIT LUCIDE ICONS ===================================
   ========================================================= */
if (window.lucide && typeof window.lucide.createIcons === 'function') {
  window.lucide.createIcons();
}

/* =========================================================
   === NAV: scroll state (transparent -> white+shadow) =====
   ========================================================= */
const nav = document.getElementById('nav');
const hero = document.querySelector('.hero');
function handleNavScroll() {
  if (!nav) return;
  // Subpages do not have a hero section, so keep nav in solid sticky mode.
  if (!hero) {
    nav.classList.add('is-scrolled');
    nav.classList.remove('is-at-top');
    return;
  }
  const threshold = hero ? hero.offsetHeight - 80 : 400;
  if (window.scrollY > threshold) {
    nav.classList.add('is-scrolled');
    nav.classList.remove('is-at-top');
  } else {
    nav.classList.remove('is-scrolled');
    nav.classList.add('is-at-top');
  }
}
window.addEventListener('scroll', handleNavScroll, { passive: true });
handleNavScroll();

/* =========================================================
   === MOBILE MENU =========================================
   ========================================================= */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
const mobileMenuClose = document.getElementById('mobile-menu-close');

function openMobileMenu() {
  if (!mobileMenu || !mobileMenuBackdrop || !hamburger) return;
  mobileMenu.classList.add('is-open');
  mobileMenuBackdrop.classList.add('is-open');
  mobileMenu.setAttribute('aria-hidden', 'false');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  if (!mobileMenu || !mobileMenuBackdrop || !hamburger) return;
  mobileMenu.classList.remove('is-open');
  mobileMenuBackdrop.classList.remove('is-open');
  mobileMenu.setAttribute('aria-hidden', 'true');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

if (hamburger) {
  hamburger.addEventListener('click', openMobileMenu);
}
if (mobileMenuClose) {
  mobileMenuClose.addEventListener('click', closeMobileMenu);
}
if (mobileMenuBackdrop) {
  mobileMenuBackdrop.addEventListener('click', closeMobileMenu);
}
if (mobileMenu) {
  mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMobileMenu));
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('is-open')) closeMobileMenu();
});

/* =========================================================
   === LANGUAGE TOGGLE (visual only for now) ==============
   ========================================================= */
function toggleLanguage(toggleEl) {
  const active = toggleEl.querySelector('.lang-active');
  const inactive = toggleEl.querySelector('.lang-inactive');
  if (!active || !inactive) return;
  active.classList.remove('lang-active');
  active.classList.add('lang-inactive');
  inactive.classList.remove('lang-inactive');
  inactive.classList.add('lang-active');
}

document.querySelectorAll('.lang-toggle').forEach((btn) => {
  btn.addEventListener('click', () => toggleLanguage(btn));
});

/* =========================================================
   === SMOOTH SCROLL (explicit for data-scroll-to) =========
   ========================================================= */
document.querySelectorAll('[data-scroll-to]').forEach((el) => {
  el.addEventListener('click', (e) => {
    const targetSelector = el.getAttribute('data-scroll-to');
    const target = targetSelector ? document.querySelector(targetSelector) : null;
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* =========================================================
   === ACCORDIONS (one open at a time) =====================
   ========================================================= */
function toggleAccordion(accordion) {
  const isOpen = accordion.classList.contains('is-open');
  const trigger = accordion.querySelector('.accordion__trigger');
  document.querySelectorAll('.accordion').forEach((a) => {
    a.classList.remove('is-open');
    const accordionTrigger = a.querySelector('.accordion__trigger');
    if (accordionTrigger) accordionTrigger.setAttribute('aria-expanded', 'false');
  });
  if (!isOpen && trigger) {
    accordion.classList.add('is-open');
    trigger.setAttribute('aria-expanded', 'true');
  }
}

document.querySelectorAll('.accordion').forEach((accordion) => {
  const trigger = accordion.querySelector('.accordion__trigger');
  if (trigger) trigger.addEventListener('click', () => toggleAccordion(accordion));
});

/* =========================================================
   === PARTNER MARQUEE (duplicate logos for seamless loop)
   ========================================================= */
function buildMarquee() {
  const track = document.getElementById('marquee-track');
  if (!track) return;
  const partners = [
    { short: 'AHED', full: 'Association of Haitian Educators of Dade' },
    { short: 'BPX TV Reseau', full: 'BPX TV Reseau' },
    { short: 'Miami Dade College', full: 'Miami Dade College' },
    { short: 'Nautilus CME', full: 'Nautilus CME' },
    { short: 'OFASOL', full: 'Women Sunshine of Hope Organization' },
    { short: 'Three Little Flowers', full: 'Three Little Flowers Center, Inc.' },
    { short: 'BCHM', full: 'Bureau de la Communauté Haïtienne de Montréal' },
    { short: 'APH', full: 'Association des Psychologues en Haïti' },
  ];
  const makeLogo = ({ short, full }) => {
    const div = document.createElement('div');
    div.className = 'partner-logo';
    div.textContent = short;
    div.title = full;
    div.setAttribute('role', 'img');
    div.setAttribute('aria-label', `${full} logo`);
    return div;
  };
  // Render twice for seamless -50% translate loop
  [...partners, ...partners].forEach((partner) => track.appendChild(makeLogo(partner)));
}
buildMarquee();

/* =========================================================
   === REVEAL ON SCROLL (Intersection Observer) ============
   ========================================================= */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
} else if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
} else {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
}

/* =========================================================
   === CONTACT FORM (no backend, client-side only) =========
   ========================================================= */
function showFormFeedback(feedback, message, variant) {
  if (!feedback) return;
  feedback.textContent = message;
  feedback.hidden = false;
  feedback.classList.remove('is-success', 'is-error', 'is-visible');
  if (feedback.classList.contains('contact-form__feedback')) {
    feedback.classList.add(variant === 'success' ? 'is-success' : 'is-error');
  }
  feedback.classList.add('is-visible');
}

async function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const feedback = form.querySelector('[role="status"]');
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!feedback) return;

  try {
    if (!name || !email || !message) {
      showFormFeedback(feedback, 'Please fill out all fields before submitting.', 'error');
      const firstEmpty = !name ? form.name : !email ? form.email : form.message;
      firstEmpty?.focus();
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      showFormFeedback(feedback, 'Please enter a valid email address.', 'error');
      form.email.focus();
      return;
    }
    // Placeholder until backend integration.
    console.log('Contact form submission:', { name, email, message });
    form.reset();
    showFormFeedback(
      feedback,
      "Thanks for reaching out — we'll get back to you soon.",
      'success'
    );
  } catch (err) {
    showFormFeedback(feedback, 'Something went wrong while submitting. Please try again.', 'error');
  }
}

document.querySelectorAll('#contact-form, #page-contact-form').forEach((form) => {
  form.addEventListener('submit', handleFormSubmit);
});
