// Lahinis y Lobatos — Tweaks (text + secciones + layout)
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroEyebrow": "Sección Scout · 7 — 11 años",
  "heroTitle1": "Lahinis",
  "heroAmp": "y",
  "heroTitle2": "Lobatos",
  "metaEdadV": "7 — 11",
  "metaEdadL": "Edad",
  "metaDiaV": "Sábado",
  "metaDiaL": "16:00 — 19:45 hrs",
  "metaSisV": "Manada",
  "metaSisL": "Sistema scout",

  "queEy": "La sección",
  "queTitle": "Juego,\nnaturaleza\ny ",
  "queTitleAccent": "amistad",
  "queTag1": "La Manada",
  "queTag2": "Sábado 16:00",

  "misticaEy": "La mística compartida",
  "misticaTitle": "Una manada,\n",
  "misticaTitleAccent": "dos relatos",
  "circleLahH": "Lahinis",
  "circleLahL": "— Las Gacelas —",
  "circleLobH": "Lobatos",
  "circleLobL": "— La Manada —",
  "circleCenter": "Una sección",
  "sideLahH": "Lahinis — las gacelas",
  "sideLobH": "Lobatos — la manada",

  "pillarsEy": "Lo que hacemos",
  "pillarsTitle": "Cuatro pilares,\n",
  "pillarsTitleAccent": "un solo juego",
  "p1H": "Juego con propósito",
  "p2H": "Naturaleza",
  "p3H": "Primer campamento",
  "p4H": "Hacer por uno mismo",

  "galleryEy": "La manada en imágenes",
  "galleryTitle": "Sábados\n",
  "galleryTitleAccent": "en la selva",

  "horarioEy": "Cuándo nos vemos",
  "horarioH": "Sábados\n16:00 — 19:45 hrs",
  "horarioP": "Parque Luis Barragán · Jardines del Pedregal · CDMX",

  "ctaEy": "Únete a la manada",
  "ctaTitle": "¿Tu hijo o hija\ntiene 7—11 años?\n",
  "ctaTitleAccent": "Escríbenos",
  "ctaP": "Te esperamos cualquier sábado. No necesitan experiencia ni uniforme la primera vez.",

  "tone": "epic",
  "pillarsLayout": "grid",
  "galleryLayout": "mosaic",
  "density": 1,
  "motion": true,

  "showQue": true,
  "showMistica": true,
  "showPillars": true,
  "showGallery": true,
  "showHorario": true,
  "showCta": true,
  "showFireflies": true,
  "showTracks": true
}/*EDITMODE-END*/;

function applyLahinisText(t) {
  Object.keys(t).forEach(k => {
    document.querySelectorAll(`[data-tw="${k}"]`).forEach(el => {
      el.innerHTML = String(t[k]).replace(/\n/g, '<br/>');
    });
  });
}

function applyLahinisVisibility(t) {
  const map = {
    showQue: '.lh-que',
    showMistica: '.lh-mistica',
    showPillars: '.lh-pillars',
    showGallery: '.lh-gallery',
    showHorario: '.lh-horario',
    showCta: '.lh-cta'
  };
  Object.entries(map).forEach(([k, sel]) => {
    document.querySelectorAll(sel).forEach(el => {
      el.style.display = t[k] === false ? 'none' : '';
    });
  });
  document.querySelectorAll('.l-fireflies').forEach(el => el.style.display = t.showFireflies ? '' : 'none');
  document.querySelectorAll('.lh-side-tracks').forEach(el => el.style.display = t.showTracks ? '' : 'none');
}

function LahinisTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => { applyLahinisText(t); });
  React.useEffect(() => { applyLahinisVisibility(t); }, [t.showQue, t.showMistica, t.showPillars, t.showGallery, t.showHorario, t.showCta, t.showFireflies, t.showTracks]);
  React.useEffect(() => { window.__lahinisApplyTone?.(t.tone); }, [t.tone]);
  React.useEffect(() => { window.__lahinisApplyPillars?.(t.pillarsLayout); }, [t.pillarsLayout]);
  React.useEffect(() => { window.__lahinisApplyGallery?.(t.galleryLayout); }, [t.galleryLayout]);
  React.useEffect(() => { window.__lahinisApplyDensity?.(t.density); }, [t.density]);
  React.useEffect(() => { window.__lahinisApplyMotion?.(t.motion); }, [t.motion]);

  return (
    <TweaksPanel title="Tweaks · Lahinis y Lobatos">
      <TweakSection label="Hero" />
      <TweakText label="Eyebrow" value={t.heroEyebrow} onChange={(v) => setTweak('heroEyebrow', v)} />
      <TweakText label="Título 1" value={t.heroTitle1} onChange={(v) => setTweak('heroTitle1', v)} />
      <TweakText label="Conector" value={t.heroAmp} onChange={(v) => setTweak('heroAmp', v)} />
      <TweakText label="Título 2" value={t.heroTitle2} onChange={(v) => setTweak('heroTitle2', v)} />
      <TweakText label="Meta · Edad valor" value={t.metaEdadV} onChange={(v) => setTweak('metaEdadV', v)} />
      <TweakText label="Meta · Edad label" value={t.metaEdadL} onChange={(v) => setTweak('metaEdadL', v)} />
      <TweakText label="Meta · Día valor" value={t.metaDiaV} onChange={(v) => setTweak('metaDiaV', v)} />
      <TweakText label="Meta · Día label" value={t.metaDiaL} onChange={(v) => setTweak('metaDiaL', v)} />
      <TweakText label="Meta · Sistema valor" value={t.metaSisV} onChange={(v) => setTweak('metaSisV', v)} />
      <TweakText label="Meta · Sistema label" value={t.metaSisL} onChange={(v) => setTweak('metaSisL', v)} />

      <TweakSection label="Qué es" />
      <TweakText label="Eyebrow" value={t.queEy} onChange={(v) => setTweak('queEy', v)} />
      <TweakText label="Título" value={t.queTitle} onChange={(v) => setTweak('queTitle', v)} />
      <TweakText label="Acento" value={t.queTitleAccent} onChange={(v) => setTweak('queTitleAccent', v)} />
      <TweakText label="Foto · Tag 1" value={t.queTag1} onChange={(v) => setTweak('queTag1', v)} />
      <TweakText label="Foto · Tag 2" value={t.queTag2} onChange={(v) => setTweak('queTag2', v)} />

      <TweakSection label="Mística" />
      <TweakText label="Eyebrow" value={t.misticaEy} onChange={(v) => setTweak('misticaEy', v)} />
      <TweakText label="Título" value={t.misticaTitle} onChange={(v) => setTweak('misticaTitle', v)} />
      <TweakText label="Acento" value={t.misticaTitleAccent} onChange={(v) => setTweak('misticaTitleAccent', v)} />
      <TweakText label="Círculo Lahinis · Título" value={t.circleLahH} onChange={(v) => setTweak('circleLahH', v)} />
      <TweakText label="Círculo Lahinis · Label" value={t.circleLahL} onChange={(v) => setTweak('circleLahL', v)} />
      <TweakText label="Círculo Lobatos · Título" value={t.circleLobH} onChange={(v) => setTweak('circleLobH', v)} />
      <TweakText label="Círculo Lobatos · Label" value={t.circleLobL} onChange={(v) => setTweak('circleLobL', v)} />
      <TweakText label="Centro" value={t.circleCenter} onChange={(v) => setTweak('circleCenter', v)} />
      <TweakText label="Lado Lahinis · H" value={t.sideLahH} onChange={(v) => setTweak('sideLahH', v)} />
      <TweakText label="Lado Lobatos · H" value={t.sideLobH} onChange={(v) => setTweak('sideLobH', v)} />

      <TweakSection label="Pilares" />
      <TweakText label="Eyebrow" value={t.pillarsEy} onChange={(v) => setTweak('pillarsEy', v)} />
      <TweakText label="Título" value={t.pillarsTitle} onChange={(v) => setTweak('pillarsTitle', v)} />
      <TweakText label="Acento" value={t.pillarsTitleAccent} onChange={(v) => setTweak('pillarsTitleAccent', v)} />
      <TweakText label="Pilar 1" value={t.p1H} onChange={(v) => setTweak('p1H', v)} />
      <TweakText label="Pilar 2" value={t.p2H} onChange={(v) => setTweak('p2H', v)} />
      <TweakText label="Pilar 3" value={t.p3H} onChange={(v) => setTweak('p3H', v)} />
      <TweakText label="Pilar 4" value={t.p4H} onChange={(v) => setTweak('p4H', v)} />

      <TweakSection label="Galería" />
      <TweakText label="Eyebrow" value={t.galleryEy} onChange={(v) => setTweak('galleryEy', v)} />
      <TweakText label="Título" value={t.galleryTitle} onChange={(v) => setTweak('galleryTitle', v)} />
      <TweakText label="Acento" value={t.galleryTitleAccent} onChange={(v) => setTweak('galleryTitleAccent', v)} />

      <TweakSection label="Horario" />
      <TweakText label="Eyebrow" value={t.horarioEy} onChange={(v) => setTweak('horarioEy', v)} />
      <TweakText label="Título" value={t.horarioH} onChange={(v) => setTweak('horarioH', v)} />
      <TweakText label="Texto" value={t.horarioP} onChange={(v) => setTweak('horarioP', v)} />

      <TweakSection label="CTA" />
      <TweakText label="Eyebrow" value={t.ctaEy} onChange={(v) => setTweak('ctaEy', v)} />
      <TweakText label="Título" value={t.ctaTitle} onChange={(v) => setTweak('ctaTitle', v)} />
      <TweakText label="Acento" value={t.ctaTitleAccent} onChange={(v) => setTweak('ctaTitleAccent', v)} />
      <TweakText label="Texto" value={t.ctaP} onChange={(v) => setTweak('ctaP', v)} />

      <TweakSection label="Layout" />
      <TweakRadio
        label="Pilares"
        value={t.pillarsLayout}
        options={[
          { value: 'grid',   label: 'Grid' },
          { value: 'list',   label: 'Lista' },
          { value: 'zigzag', label: 'Zigzag' },
        ]}
        onChange={(v) => setTweak('pillarsLayout', v)}
      />
      <TweakRadio
        label="Galería"
        value={t.galleryLayout}
        options={[
          { value: 'mosaic', label: 'Mosaico' },
          { value: 'ribbon', label: 'Ribbon' },
        ]}
        onChange={(v) => setTweak('galleryLayout', v)}
      />

      <TweakSection label="Tono de copy" />
      <TweakRadio
        label="Voz"
        value={t.tone}
        options={[
          { value: 'epic',   label: 'Épico' },
          { value: 'direct', label: 'Directo' },
        ]}
        onChange={(v) => setTweak('tone', v)}
      />

      <TweakSection label="Visibilidad de secciones" />
      <TweakToggle label="Qué es" value={t.showQue} onChange={(v) => setTweak('showQue', v)} />
      <TweakToggle label="Mística" value={t.showMistica} onChange={(v) => setTweak('showMistica', v)} />
      <TweakToggle label="Pilares" value={t.showPillars} onChange={(v) => setTweak('showPillars', v)} />
      <TweakToggle label="Galería" value={t.showGallery} onChange={(v) => setTweak('showGallery', v)} />
      <TweakToggle label="Horario" value={t.showHorario} onChange={(v) => setTweak('showHorario', v)} />
      <TweakToggle label="CTA" value={t.showCta} onChange={(v) => setTweak('showCta', v)} />

      <TweakSection label="Atmósfera" />
      <TweakToggle label="Luciérnagas" value={t.showFireflies} onChange={(v) => setTweak('showFireflies', v)} />
      <TweakToggle label="Huellas laterales" value={t.showTracks} onChange={(v) => setTweak('showTracks', v)} />
      <TweakSlider label="Densidad de gráficos" value={t.density} min={0.4} max={1.6} step={0.2} onChange={(v) => setTweak('density', v)} />
      <TweakToggle label="Animaciones" value={t.motion} onChange={(v) => setTweak('motion', v)} />
    </TweaksPanel>
  );
}

const __lahinisRoot = document.createElement('div');
document.body.appendChild(__lahinisRoot);
ReactDOM.createRoot(__lahinisRoot).render(<LahinisTweaks />);
