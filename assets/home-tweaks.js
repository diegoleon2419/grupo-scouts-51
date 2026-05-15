// ===== Home Tweaks — editable text + Field Journal variant =====
(function(){
  const TEXT_DEFAULTS = /*HOMETEXT-BEGIN*/{
    "hero-eyebrow": "Desde 1957 · Jardines del Pedregal",
    "hero-title": "Formamos<br/>líderes<br/><em>que cambian el mundo</em>",
    "hero-lead": "Somos el Grupo Scout 51. Cada sábado, niños y jóvenes de 7 a 18 años viven la aventura del escultismo — al aire libre, en comunidad, con propósito.",
    "hero-cta": "Escríbenos por WhatsApp",
    "hero-handnote": "\"No dejes el campamento peor de como lo encontraste.\" — B.P.",
    "stat1-n": "1957", "stat1-l": "Fundación", "stat1-s": "13 de noviembre · Misioneros del Espíritu Santo",
    "stat2-n": "4", "stat2-l": "Secciones", "stat2-s": "Manada · Tropa · Comunidad · Clan",
    "stat3-n": "68", "stat3-l": "Años", "stat3-h": "y los que siguen",
    "stat4-n": "7—18", "stat4-l": "Edades", "stat4-s": "Sábados 16:00 — 19:45 hrs",
    "mis-eyebrow": "Nuestra misión",
    "mis-title": "Construir un mundo mejor",
    "mis-title-hand": "un sábado a la vez",
    "mis-body": "Contribuir a la educación de los jóvenes a través de un sistema de valores basado en la <strong>Promesa y la Ley Scout</strong> — para que cada niña y cada niño que pasa por el grupo deje el mundo en mejores condiciones de como lo encontró.",
    "sec-eyebrow": "Las cuatro secciones",
    "sec-title": "Encuentra<br/>la tuya",
    "sec-title-hand": "según tu edad",
    "sec-lede": "El grupo se divide en secciones por edad, cada una con su propia mística. Todas se reúnen los sábados en el Parque Luis Barragán.",
    "story-tag": "68 años en foto",
    "story-eyebrow": "Nuestra historia",
    "story-title": "Una tradición que no se apaga",
    "story-body": "El 13 de noviembre de 1957, los Misioneros del Espíritu Santo formaron el Grupo 51 con tres ramas: Lobatos, Tropa y Clan. Hoy, décadas después, seguimos reuniéndonos cada sábado en el Parque Luis Barragán con el mismo propósito.",
    "story-stamp": "Desde 1957 · Jardines del Pedregal",
    "val-eyebrow": "· Nuestros valores ·",
    "val-title": "Tres pilares",
    "val1-t": "Servicio", "val1-p": "Aprender a servir a la comunidad y a los demás, dejando el mundo un poco mejor de como lo encontramos.", "val1-n": "\"Una buena acción al día\"",
    "val2-t": "Compromiso", "val2-p": "Formar jóvenes comprometidos con su comunidad, su país y el mundo a través de la educación no formal.", "val2-n": "\"Siempre listo\"",
    "val3-t": "Aventura", "val3-p": "Vivir experiencias al aire libre que retan el cuerpo y el espíritu, forjando el carácter y la resiliencia.", "val3-n": "\"El monte es la escuela\"",
    "hor-eyebrow": "Cuándo nos vemos",
    "hor-title": "Todos los sábados",
    "hor-sub": "Parque Luis Barragán · Jardines del Pedregal. Llega con ropa cómoda, tenis y una botella de agua.",
    "h1-w":"Lahinis / Lobatos","h1-t":"16:00 — 19:45 hrs","h1-a":"7—11",
    "h2-w":"Sikas / Centinelas","h2-t":"16:00 — 19:45 hrs","h2-a":"11—15",
    "h3-w":"Pioneros / Pioneras","h3-t":"16:00 — 19:45 hrs","h3-a":"15—18",
    "h4-w":"Clan Rover","h4-t":"Según convocatoria","h4-a":"18+",
    "cta-hand": "ven cualquier sábado",
    "cta-title": "La aventura<br/>empieza aquí",
    "cta-body": "No necesitas experiencia ni uniforme la primera vez. Solo ropa cómoda y ganas. Te esperamos.",
    "cta-meta": "· Parque Luis Barragán · Sábados 16:00 · Desde 1957 ·",
    "__variant": "nature"
  }/*HOMETEXT-END*/;

  // Photos that can be swapped via uploads (localStorage persists across reloads)
  const PHOTO_SLOTS = [
    { key: 'hero-bg',      label: 'Hero — fondo',                default: 'assets/sikas-3.jpg' },
    { key: 'sec-lahinis',  label: 'Sección — Lahinis / Lobatos', default: 'assets/manadas-1.jpeg' },
    { key: 'sec-sikas',    label: 'Sección — Sikas / Centinelas',default: 'assets/sikas-1.jpg' },
    { key: 'sec-pioneros', label: 'Sección — Pioneros',          default: 'assets/pioneros-7.jpg' },
    { key: 'sec-clan',     label: 'Sección — Clan',              default: 'assets/clan-2.jpg' },
    { key: 'story-1',      label: 'Historia — foto grande',      default: 'assets/manadas-1.jpeg' },
    { key: 'story-2',      label: 'Historia — foto pequeña',     default: 'assets/clan-1.jpeg' },
  ];
  const PHOTO_STORAGE_KEY = 'g51-home-photos-v1';
  const photoOverrides = (() => {
    try { return JSON.parse(localStorage.getItem(PHOTO_STORAGE_KEY) || '{}'); }
    catch(_) { return {}; }
  })();
  function applyPhotos() {
    PHOTO_SLOTS.forEach(s => {
      const url = photoOverrides[s.key];
      document.querySelectorAll(`[data-photo="${s.key}"]`).forEach(el => {
        if (url) el.style.backgroundImage = `url("${url}")`;
      });
    });
  }
  function setPhoto(key, dataUrl) {
    if (dataUrl) photoOverrides[key] = dataUrl;
    else delete photoOverrides[key];
    try { localStorage.setItem(PHOTO_STORAGE_KEY, JSON.stringify(photoOverrides)); } catch(_){}
    applyPhotos();
  }
  applyPhotos();

  const text = { ...TEXT_DEFAULTS };
  function applyText() {
    Object.keys(text).forEach(k => {
      if (k.startsWith('__')) return;
      document.querySelectorAll(`[data-tw="${k}"]`).forEach(el => {
        el.innerHTML = text[k];
      });
    });
    if (text.__variant === 'journal') document.body.classList.add('variant-journal');
    else document.body.classList.remove('variant-journal');
  }
  applyText();

  function persist() {
    try { window.parent.postMessage({type:'__edit_mode_set_keys', edits: text}, '*'); } catch(_){}
  }

  // Build a separate text-edit panel that coexists with the shared Tweaks panel
  function buildEditor() {
    const p = document.createElement('div');
    p.className = 'text-editor';
    p.dataset.open = 'false';
    p.innerHTML = `
      <div class="te-head">
        <h3>Editar texto</h3>
        <button data-te-close>×</button>
      </div>
      <div class="te-body">
        <div class="te-group">
          <label class="te-label">Variante</label>
          <div class="te-variants">
            <button data-var="nature" class="te-var">A · Nature</button>
            <button data-var="journal" class="te-var">B · Field Journal</button>
          </div>
        </div>
        <div class="te-fields"></div>
      </div>`;
    document.body.appendChild(p);

    // Group fields by section
    const groups = {
      'Hero': ['hero-eyebrow','hero-title','hero-lead','hero-cta','hero-handnote'],
      'Datos (4 stats)': ['stat1-n','stat1-l','stat1-s','stat2-n','stat2-l','stat2-s','stat3-n','stat3-l','stat3-h','stat4-n','stat4-l','stat4-s'],
      'Misión': ['mis-eyebrow','mis-title','mis-title-hand','mis-body'],
      'Secciones': ['sec-eyebrow','sec-title','sec-title-hand','sec-lede'],
      'Historia': ['story-tag','story-eyebrow','story-title','story-body','story-stamp'],
      'Valores': ['val-eyebrow','val-title','val1-t','val1-p','val1-n','val2-t','val2-p','val2-n','val3-t','val3-p','val3-n'],
      'Horarios': ['hor-eyebrow','hor-title','hor-sub','h1-w','h1-t','h1-a','h2-w','h2-t','h2-a','h3-w','h3-t','h3-a','h4-w','h4-t','h4-a'],
      'CTA': ['cta-hand','cta-title','cta-body','cta-meta']
    };

    const fieldsEl = p.querySelector('.te-fields');

    // Photos section (render before text groups)
    const photosWrap = document.createElement('details');
    photosWrap.className = 'te-section';
    photosWrap.open = true;
    photosWrap.innerHTML = '<summary>Fotos</summary>';
    PHOTO_SLOTS.forEach(slot => {
      const row = document.createElement('div');
      row.className = 'te-photo-row';
      const preview = document.createElement('div');
      preview.className = 'te-photo-thumb';
      const url = photoOverrides[slot.key] || slot.default;
      preview.style.backgroundImage = `url("${url}")`;
      const meta = document.createElement('div');
      meta.className = 'te-photo-meta';
      meta.innerHTML = `<span class="te-photo-label">${slot.label}</span>`;
      const controls = document.createElement('div');
      controls.className = 'te-photo-controls';
      const upBtn = document.createElement('label');
      upBtn.className = 'te-photo-btn';
      upBtn.textContent = 'Cambiar';
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.style.display = 'none';
      input.addEventListener('change', (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          setPhoto(slot.key, reader.result);
          preview.style.backgroundImage = `url("${reader.result}")`;
        };
        reader.readAsDataURL(file);
      });
      upBtn.appendChild(input);
      const resetBtn = document.createElement('button');
      resetBtn.type = 'button';
      resetBtn.className = 'te-photo-btn te-photo-btn-ghost';
      resetBtn.textContent = 'Original';
      resetBtn.addEventListener('click', () => {
        setPhoto(slot.key, null);
        preview.style.backgroundImage = `url("${slot.default}")`;
      });
      controls.appendChild(upBtn);
      controls.appendChild(resetBtn);
      meta.appendChild(controls);
      row.appendChild(preview);
      row.appendChild(meta);
      photosWrap.appendChild(row);
    });
    fieldsEl.appendChild(photosWrap);
    Object.entries(groups).forEach(([label, keys]) => {
      const sec = document.createElement('details');
      sec.className = 'te-section';
      sec.innerHTML = `<summary>${label}</summary>`;
      keys.forEach(k => {
        const v = text[k] || '';
        const row = document.createElement('label');
        row.className = 'te-row';
        const multi = v.length > 50 || v.includes('<br');
        row.innerHTML = `<span class="te-k">${k}</span>`;
        const input = document.createElement(multi ? 'textarea' : 'input');
        if (!multi) input.type = 'text';
        input.value = v;
        input.dataset.key = k;
        input.addEventListener('input', (e) => {
          text[k] = e.target.value;
          applyText();
          persist();
        });
        row.appendChild(input);
        sec.appendChild(row);
      });
      fieldsEl.appendChild(sec);
    });

    p.querySelectorAll('[data-var]').forEach(btn => {
      btn.addEventListener('click', () => {
        text.__variant = btn.dataset.var;
        applyText();
        reflectVar();
        persist();
      });
    });
    function reflectVar(){
      p.querySelectorAll('[data-var]').forEach(b => b.classList.toggle('active', b.dataset.var === text.__variant));
    }
    reflectVar();

    p.querySelector('[data-te-close]').addEventListener('click', () => {
      p.dataset.open = 'false';
      try { window.parent.postMessage({type:'__edit_mode_deactivated_by_user'}, '*'); } catch(_){}
    });

    return p;
  }

  const editor = buildEditor();

  // Hook into edit mode — show both panels
  window.addEventListener('message', (e) => {
    const d = e.data || {};
    if (d.type === '__activate_edit_mode') editor.dataset.open = 'true';
    if (d.type === '__deactivate_edit_mode') editor.dataset.open = 'false';
  });
})();
