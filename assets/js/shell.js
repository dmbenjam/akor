function renderSiteShell(basePath) {
  const headerTarget = document.querySelector('[data-site-header]');
  const footerTarget = document.querySelector('[data-site-footer]');
  const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`;

  if (headerTarget) {
    headerTarget.innerHTML = `
      <header class="nav is-scrolled" id="nav" aria-label="Primary">
        <div class="nav__inner">
          <a href="${normalizedBase}index.html" class="nav__logo" aria-label="AKOR Parenting home">
            <span class="accent-p">A</span>K<span class="accent-c">O</span>R
          </a>
          <nav aria-label="Main navigation">
            <ul class="nav__links">
              <li class="nav__item nav__item--has-dropdown">
                <a href="${normalizedBase}pages/what-we-do/index.html" class="nav__link">What We Do</a>
                <ul class="nav__dropdown">
                  <li><a class="nav__sublink" href="${normalizedBase}pages/what-we-do/methodology.html">Methodology</a></li>
                  <li><a class="nav__sublink" href="${normalizedBase}pages/what-we-do/resources.html">Resources</a></li>
                  <li><a class="nav__sublink" href="${normalizedBase}pages/what-we-do/effectiveness.html">Effectiveness</a></li>
                </ul>
              </li>
              <li class="nav__item nav__item--has-dropdown">
                <a href="${normalizedBase}pages/who-we-are/index.html" class="nav__link">Who We Are</a>
                <ul class="nav__dropdown">
                  <li><a class="nav__sublink" href="${normalizedBase}pages/who-we-are/our-team.html">Our Team</a></li>
                  <li><a class="nav__sublink" href="${normalizedBase}pages/who-we-are/our-history.html">Our History</a></li>
                </ul>
              </li>
              <li class="nav__item nav__item--has-dropdown">
                <a href="${normalizedBase}pages/how-you-can-help/index.html" class="nav__link">How You Can Help</a>
                <ul class="nav__dropdown">
                  <li><a class="nav__sublink" href="${normalizedBase}pages/how-you-can-help/donate.html">Donate</a></li>
                  <li><a class="nav__sublink" href="${normalizedBase}pages/how-you-can-help/purchase-materials.html">Purchase Materials</a></li>
                  <li><a class="nav__sublink" href="${normalizedBase}pages/how-you-can-help/partner.html">Partner</a></li>
                </ul>
              </li>
              <li class="nav__item"><a href="${normalizedBase}pages/contact/index.html" class="nav__link">Contact</a></li>
            </ul>
          </nav>
          <button class="nav__hamburger" id="hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <div class="mobile-menu-backdrop" id="mobile-menu-backdrop" aria-hidden="true"></div>
      <aside class="mobile-menu" id="mobile-menu" aria-label="Mobile navigation" aria-hidden="true">
        <button class="mobile-menu__close" id="mobile-menu-close" aria-label="Close menu">
          <i data-lucide="x"></i>
        </button>
        <ul class="mobile-menu__list">
          <li>
            <a href="${normalizedBase}pages/what-we-do/index.html">What We Do</a>
            <ul class="mobile-submenu">
              <li><a href="${normalizedBase}pages/what-we-do/methodology.html">Methodology</a></li>
              <li><a href="${normalizedBase}pages/what-we-do/resources.html">Resources</a></li>
              <li><a href="${normalizedBase}pages/what-we-do/effectiveness.html">Effectiveness</a></li>
            </ul>
          </li>
          <li>
            <a href="${normalizedBase}pages/who-we-are/index.html">Who We Are</a>
            <ul class="mobile-submenu">
              <li><a href="${normalizedBase}pages/who-we-are/our-team.html">Our Team</a></li>
              <li><a href="${normalizedBase}pages/who-we-are/our-history.html">Our History</a></li>
            </ul>
          </li>
          <li>
            <a href="${normalizedBase}pages/how-you-can-help/index.html">How You Can Help</a>
            <ul class="mobile-submenu">
              <li><a href="${normalizedBase}pages/how-you-can-help/donate.html">Donate</a></li>
              <li><a href="${normalizedBase}pages/how-you-can-help/purchase-materials.html">Purchase Materials</a></li>
              <li><a href="${normalizedBase}pages/how-you-can-help/partner.html">Partner</a></li>
            </ul>
          </li>
          <li><a href="${normalizedBase}pages/contact/index.html">Contact</a></li>
        </ul>
      </aside>
    `;
  }

  if (footerTarget) {
    footerTarget.innerHTML = `
      <footer class="footer" id="contact" aria-label="Footer">
        <div class="container">
          <div class="footer__grid">
            <div class="footer__brand">
              <div class="footer__logo">
                <span class="accent-p">A</span>K<span class="accent-c">O</span>R
              </div>
              <p class="footer__tagline">Empowering families, uplifting communities.</p>
              <div class="footer__social">
                <a href="#" aria-label="YouTube"><i data-lucide="youtube"></i></a>
              </div>
            </div>

            <div>
              <h4>Contact Us</h4>
              <form class="footer__form" id="contact-form" novalidate>
                <div>
                  <label for="cf-name">Name</label>
                  <input id="cf-name" name="name" type="text" autocomplete="name" required />
                </div>
                <div>
                  <label for="cf-email">Email</label>
                  <input id="cf-email" name="email" type="email" autocomplete="email" required />
                </div>
                <div>
                  <label for="cf-message">Message</label>
                  <textarea id="cf-message" name="message" required></textarea>
                </div>
                <button type="submit" class="btn btn-pink">Submit</button>
                <div class="footer__form-success" id="contact-success" role="status" aria-live="polite">
                  Thanks for reaching out — we'll get back to you soon.
                </div>
              </form>
            </div>

            <div>
              <h4>Visit Us</h4>
              <address class="footer__address">
                AKOR Parenting, Corp<br />
                12345 NE 2nd Avenue<br />
                Miami, FL 33161<br /><br />
                <a href="mailto:akorparenting@gmail.com">akorparenting@gmail.com</a>
              </address>
            </div>
          </div>

          <hr class="footer__divider" />
          <p class="footer__copy">&copy; 2026 AKOR Parenting, Corp. All rights reserved.</p>
        </div>
      </footer>
    `;
  }

  setActiveNavLink();

  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

function normalizePath(path) {
  if (!path) return '/';
  let normalized = path.replace(/\\/g, '/');
  normalized = normalized.replace(/\/+/g, '/');
  if (normalized.length > 1 && normalized.endsWith('/')) normalized = normalized.slice(0, -1);
  return normalized.toLowerCase();
}

function getSectionSlug(pathname) {
  const parts = normalizePath(pathname).split('/').filter(Boolean);
  const pagesIdx = parts.indexOf('pages');
  if (pagesIdx === -1 || !parts[pagesIdx + 1]) return null;
  return parts[pagesIdx + 1];
}

function setActiveNavLink() {
  const currentSection = getSectionSlug(window.location.pathname);
  if (!currentSection) return;

  const sectionByHref = {
    'what-we-do': '/pages/what-we-do/',
    'who-we-are': '/pages/who-we-are/',
    'how-you-can-help': '/pages/how-you-can-help/',
    'contact': '/pages/contact/'
  };

  const allLinks = document.querySelectorAll('.nav__link, .nav__sublink, .mobile-menu__list a, .mobile-submenu a');
  allLinks.forEach((link) => {
    const href = link.getAttribute('href') || '';
    const normalizedHref = normalizePath(href);
    const matchedSection = Object.keys(sectionByHref).find(
      (key) => normalizedHref.includes(sectionByHref[key])
    );

    if (matchedSection === currentSection) {
      link.classList.add('is-active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('is-active');
      link.removeAttribute('aria-current');
    }
  });
}
