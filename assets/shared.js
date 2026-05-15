// ===== Grupo Scout 51 — shared nav + footer + reveal =====
(function(){
  const currentPage = (document.body.dataset.page || '').toLowerCase();

  const NAV = [
    { href: 'nosotros.html',  key: 'nosotros',  label: 'Nosotros' },
    { href: 'lahinis.html',   key: 'lahinis',   label: 'Lahinis' },
    { href: 'sikas.html',     key: 'sikas',     label: 'Sikas y Centinelas' },
    { href: 'pioneros.html',  key: 'pioneros',  label: 'Pioneros y Pioneras' },
    { href: 'clan.html',      key: 'clan',      label: 'Clan' },
    { href: 'contacto.html',  key: 'contacto',  label: 'Contacto' },
  ];

  const navRoot = document.querySelector('[data-nav]');
  if (navRoot) {
    navRoot.className = 'nav';
    navRoot.innerHTML = `
      <div class="nav-inner">
        <a href="index.html" class="brand" aria-label="Grupo Scout 51 — Inicio">
          <div class="brand-mark" style="background-image:url('assets/logo-group.jpeg')"></div>
          <div class="brand-text">
            <span class="brand-name">Grupo Scout 51</span>
            <span class="brand-sub">Est. 1957 · CDMX</span>
          </div>
        </a>
        <div class="nav-links">
          ${NAV.map(n => `<a href="${n.href}"${n.key===currentPage?' aria-current="page"':''}>${n.label}</a>`).join('')}
        </div>
        <a href="contacto.html" class="nav-cta">Únete
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </a>
        <button class="nav-toggle" aria-label="Menú" data-nav-toggle>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
        </button>
      </div>`;
    const toggle = navRoot.querySelector('[data-nav-toggle]');
    toggle?.addEventListener('click', () => {
      navRoot.dataset.open = navRoot.dataset.open === 'true' ? 'false' : 'true';
    });
  }

  const footRoot = document.querySelector('[data-footer]');
  if (footRoot) {
    footRoot.className = 'footer';
    footRoot.innerHTML = `
      <div class="footer-grid">
        <div class="footer-brand">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
            <div class="brand-mark" style="width:40px;height:40px;background-image:url('assets/logo-group.jpeg')"></div>
            <div style="font-family:var(--display);font-weight:700;font-size:14px;letter-spacing:2.5px;color:var(--white);text-transform:uppercase">Grupo Scout 51</div>
          </div>
          <p>Asociación de Scouts de México, A.C. · Parque Luis Barragán · CDMX. Formando líderes desde 1957.</p>
        </div>
        <div>
          <h4>El Grupo</h4>
          <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="nosotros.html">Nosotros</a></li>
            <li><a href="contacto.html">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4>Secciones</h4>
          <ul>
            <li><a href="lahinis.html">Lahinis y Lobatos</a></li>
            <li><a href="sikas.html">Sikas y Centinelas</a></li>
            <li><a href="pioneros.html">Pioneros</a></li>
            <li><a href="clan.html">Clan</a></li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul>
            <li><a href="https://wa.me/525530310438">WhatsApp · 55 3031 0438</a></li>
            <li><a href="tel:+525548761332">Tel · 55 4876 1332</a></li>
            <li><a href="mailto:jefaturadegrupo51@gmail.com">jefaturadegrupo51@gmail.com</a></li>
            <li><a href="https://instagram.com/gruposcout51">@gruposcout51</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-divider"></div>
      <div class="footer-bottom">
        <span>© 2026 · Grupo Scout 51</span>
        <span>Parque Luis Barragán · Jardines del Pedregal · CDMX</span>
        <span>Semper Parati</span>
      </div>`;
  }

  // WhatsApp floating button (mobile)
  if (!document.querySelector('.wa-float')) {
    const wa = document.createElement('a');
    wa.className = 'wa-float';
    wa.href = 'https://wa.me/525530310438';
    wa.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1.1 2.8 1.2 3c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.7.4 3.4 1.3 4.8L2 22l5.3-1.4c1.4.8 3 1.2 4.7 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg> WhatsApp · 55 3031 0438`;
    document.body.appendChild(wa);
  }

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();
