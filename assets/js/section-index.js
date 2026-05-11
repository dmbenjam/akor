const SECTION_INDEX_CONFIG = {
  'what-we-do': {
    title: 'What We Do',
    description: "Overview page for AKOR Parenting's methodology, resources, and effectiveness.",
    items: [
      {
        title: 'Methodology',
        description: 'How the AKOR model is delivered.',
        href: 'methodology.html',
        cta: 'View Methodology',
        buttonClass: 'btn-pink'
      },
      {
        title: 'Resources',
        description: 'Materials and tools for families.',
        href: 'resources.html',
        cta: 'View Resources',
        buttonClass: 'btn-cyan'
      },
      {
        title: 'Effectiveness',
        description: 'Program outcomes and evaluation.',
        href: 'effectiveness.html',
        cta: 'View Effectiveness',
        buttonClass: 'btn-outline-cyan'
      }
    ]
  },
  'how-you-can-help': {
    title: 'How You Can Help',
    description: 'Overview page for donation, materials purchase, and partnership.',
    items: [
      {
        title: 'Donate',
        description: 'Support families through direct financial contribution.',
        href: 'donate.html',
        cta: 'Donate',
        buttonClass: 'btn-cyan'
      },
      {
        title: 'Purchase Materials',
        description: 'Access curriculum kits, guides, and family resources.',
        href: 'purchase-materials.html',
        cta: 'Purchase Materials',
        buttonClass: 'btn-pink'
      },
      {
        title: 'Partner',
        description: 'Bring AKOR programs to your school, church, or organization.',
        href: 'partner.html',
        cta: 'Partner',
        buttonClass: 'btn-outline-cyan'
      }
    ]
  }
};

function renderSectionIndex() {
  const mount = document.querySelector('[data-section-index]');
  if (!mount) return;

  const sectionKey = mount.getAttribute('data-section-key');
  const config = SECTION_INDEX_CONFIG[sectionKey];
  if (!config) return;

  const cards = config.items.map((item) => `
    <article class="card">
      <div class="card__body">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <a class="btn ${item.buttonClass}" href="${item.href}">${item.cta}</a>
      </div>
    </article>
  `).join('');

  mount.innerHTML = `
    <section>
      <div class="container">
        <div class="section-header">
          <h1>${config.title}</h1>
          <p>${config.description}</p>
        </div>
        <div class="cards">${cards}</div>
        <p style="margin-top:24px;">
          <a href="../../index.html" class="btn btn-outline-cyan">Back Home</a>
        </p>
      </div>
    </section>
  `;
}

renderSectionIndex();
