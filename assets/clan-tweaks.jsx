// Clan Rover — Tweaks
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroEyebrow": "Comunidad Rover · 18+ años",
  "heroTitle1": "El",
  "heroTitleFire": "Clan",
  "heroTitle2": "Rover",
  "heroLead": "La última etapa del camino scout. La que se hace en torno al fuego, entre iguales que ya saben para qué están aquí. Mixto, autónomo, y al servicio de las demás secciones.",
  "heroSaying": "El Clan es del Clan\ny para el Clan.",
  "queTitle": "La última",
  "queTitleAccent": "etapa",
  "queTitleSub": "— Y la primera de jefe —",
  "queP1": "El Clan es la rama mixta del grupo. Reúne a quienes han recorrido todo el sendero scout y siguen aquí porque encontraron algo que vale la pena: una comunidad de iguales que decide su propio rumbo.",
  "queP2": "Es también la antesala de la jefatura. Muchos de los jefes del grupo hicieron Clan antes de tomar una sección — no porque fuera obligatorio, sino porque el Clan forma justo a quien va a guiar a otros.",
  "queQuote": "El Clan es del Clan y para el Clan.",
  "misticaTitle": "El Clan del",
  "misticaTitleAccent": "Oso Cavernario",
  "misticaP": "El oso cavernario es el animal totémico del Clan: solitario cuando hace falta, pero poderoso cuando se reúne con los suyos en torno al fuego. La cueva es su territorio común — un lugar de refugio, de transmisión, de decisiones tomadas entre iguales.",
  "actsTitle": "Tres frentes",
  "actsTitleAccent": "a la vez",
  "act1H": "Juntas entre semana",
  "act1P": "El Clan se reúne entre semana para sus propios proyectos. Ahí planea, conversa, decide y formula. El sábado es de las secciones; entre semana, del Clan.",
  "act2H": "Campamentos exclusivos",
  "act2P": "Salidas propias, distintas a las del resto del grupo. Trekking largo, montañismo, exploraciones, retiros. El Clan camina más lejos y carga su propia mochila.",
  "act3H": "Apoyo a secciones",
  "act3P": "Los sábados, los Rovers acompañan a Manada, Tropa y Comunidad — apoyando a los jefes, ayudando con actividades, sirviendo donde haga falta.",
  "granTitle": "El Gran",
  "granTitleAccent": "Servicio",
  "granP1": "Una vez cada tres años, el Clan organiza un proyecto de servicio de gran escala — concebido, planeado, financiado y ejecutado enteramente por sus integrantes. No hay supervisión externa: es el examen final de lo aprendido en quince años de escultismo.",
  "granP2": "Comunidades rurales, intervenciones ecológicas, infraestructura social. El Gran Servicio es la marca que cada generación de Clan deja antes de cerrar la rama.",
  "ctaTitle": "¿Tienes 18 años o más?",
  "ctaTitleAccent": "Escríbenos",
  "ctaP": "Si llegas con o sin experiencia scout, hay lugar en torno al fuego. Te esperamos cualquier sábado.",
  "actsLayout": "grid",
  "galleryLayout": "mosaic",
  "showHandprints": true,
  "showEmbers": true,
  "showQue": true,
  "showMistica": true,
  "showActs": true,
  "showGran": true,
  "showGallery": true,
  "showCta": true,
  "accent": "#E66B1F"
}/*EDITMODE-END*/;

function applyText(t) {
  Object.keys(t).forEach(k => {
    document.querySelectorAll(`[data-tw="${k}"]`).forEach(el => {
      el.innerHTML = String(t[k]).replace(/\n/g, '<br/>');
    });
  });
}

function applySectionVisibility(t) {
  const map = {
    showQue: '.cl-que',
    showMistica: '.cl-mistica',
    showActs: '.cl-acts',
    showGran: '.cl-gran',
    showGallery: '.cl-gallery',
    showCta: '.cl-cta',
  };
  Object.entries(map).forEach(([k, sel]) => {
    document.querySelectorAll(sel).forEach(el => {
      el.style.display = t[k] === false ? 'none' : '';
    });
  });
  document.querySelectorAll('.handprint').forEach(el => el.style.display = t.showHandprints ? '' : 'none');
  document.querySelectorAll('.cl-hero .ember').forEach(el => el.style.display = t.showEmbers ? '' : 'none');
}

function applyLayouts(t) {
  const acts = document.querySelector('.cl-acts');
  if (acts) acts.dataset.layout = t.actsLayout;
  const gal = document.querySelector('.cl-gallery');
  if (gal) gal.dataset.layout = t.galleryLayout;
}

function applyAccent(t) {
  document.documentElement.style.setProperty('--cl-fire', t.accent);
}

function ClanTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => { applyText(t); }, [t]);
  React.useEffect(() => { applySectionVisibility(t); }, [t.showQue, t.showMistica, t.showActs, t.showGran, t.showGallery, t.showCta, t.showHandprints, t.showEmbers]);
  React.useEffect(() => { applyLayouts(t); }, [t.actsLayout, t.galleryLayout]);
  React.useEffect(() => { applyAccent(t); }, [t.accent]);

  return (
    <TweaksPanel title="Tweaks · Clan Rover">
      <TweakSection label="Hero" />
      <TweakText label="Eyebrow" value={t.heroEyebrow} onChange={(v) => setTweak('heroEyebrow', v)} />
      <TweakText label="Título 1" value={t.heroTitle1} onChange={(v) => setTweak('heroTitle1', v)} />
      <TweakText label="Título acento" value={t.heroTitleFire} onChange={(v) => setTweak('heroTitleFire', v)} />
      <TweakText label="Título 2" value={t.heroTitle2} onChange={(v) => setTweak('heroTitle2', v)} />
      <TweakText label="Lead" value={t.heroLead} onChange={(v) => setTweak('heroLead', v)} />
      <TweakText label="Lema" value={t.heroSaying} onChange={(v) => setTweak('heroSaying', v)} />

      <TweakSection label="Qué es" />
      <TweakText label="Título" value={t.queTitle} onChange={(v) => setTweak('queTitle', v)} />
      <TweakText label="Acento" value={t.queTitleAccent} onChange={(v) => setTweak('queTitleAccent', v)} />
      <TweakText label="Subtítulo" value={t.queTitleSub} onChange={(v) => setTweak('queTitleSub', v)} />
      <TweakText label="Párrafo 1" value={t.queP1} onChange={(v) => setTweak('queP1', v)} />
      <TweakText label="Párrafo 2" value={t.queP2} onChange={(v) => setTweak('queP2', v)} />
      <TweakText label="Cita" value={t.queQuote} onChange={(v) => setTweak('queQuote', v)} />

      <TweakSection label="Mística" />
      <TweakText label="Título" value={t.misticaTitle} onChange={(v) => setTweak('misticaTitle', v)} />
      <TweakText label="Acento" value={t.misticaTitleAccent} onChange={(v) => setTweak('misticaTitleAccent', v)} />
      <TweakText label="Texto" value={t.misticaP} onChange={(v) => setTweak('misticaP', v)} />

      <TweakSection label="Actividades" />
      <TweakText label="Título" value={t.actsTitle} onChange={(v) => setTweak('actsTitle', v)} />
      <TweakText label="Acento" value={t.actsTitleAccent} onChange={(v) => setTweak('actsTitleAccent', v)} />
      <TweakText label="Act 1 · Título" value={t.act1H} onChange={(v) => setTweak('act1H', v)} />
      <TweakText label="Act 1 · Texto" value={t.act1P} onChange={(v) => setTweak('act1P', v)} />
      <TweakText label="Act 2 · Título" value={t.act2H} onChange={(v) => setTweak('act2H', v)} />
      <TweakText label="Act 2 · Texto" value={t.act2P} onChange={(v) => setTweak('act2P', v)} />
      <TweakText label="Act 3 · Título" value={t.act3H} onChange={(v) => setTweak('act3H', v)} />
      <TweakText label="Act 3 · Texto" value={t.act3P} onChange={(v) => setTweak('act3P', v)} />

      <TweakSection label="Gran Servicio" />
      <TweakText label="Título" value={t.granTitle} onChange={(v) => setTweak('granTitle', v)} />
      <TweakText label="Acento" value={t.granTitleAccent} onChange={(v) => setTweak('granTitleAccent', v)} />
      <TweakText label="Párrafo 1" value={t.granP1} onChange={(v) => setTweak('granP1', v)} />
      <TweakText label="Párrafo 2" value={t.granP2} onChange={(v) => setTweak('granP2', v)} />

      <TweakSection label="CTA" />
      <TweakText label="Título" value={t.ctaTitle} onChange={(v) => setTweak('ctaTitle', v)} />
      <TweakText label="Acento" value={t.ctaTitleAccent} onChange={(v) => setTweak('ctaTitleAccent', v)} />
      <TweakText label="Texto" value={t.ctaP} onChange={(v) => setTweak('ctaP', v)} />

      <TweakSection label="Layout" />
      <TweakRadio label="Galería" value={t.galleryLayout}
        options={[{value:'mosaic', label:'Mosaico'}, {value:'ribbon', label:'Ribbon'}]}
        onChange={(v) => setTweak('galleryLayout', v)} />

      <TweakSection label="Visibilidad de secciones" />
      <TweakToggle label="Qué es" value={t.showQue} onChange={(v) => setTweak('showQue', v)} />
      <TweakToggle label="Mística" value={t.showMistica} onChange={(v) => setTweak('showMistica', v)} />
      <TweakToggle label="Actividades" value={t.showActs} onChange={(v) => setTweak('showActs', v)} />
      <TweakToggle label="Gran Servicio" value={t.showGran} onChange={(v) => setTweak('showGran', v)} />
      <TweakToggle label="Galería" value={t.showGallery} onChange={(v) => setTweak('showGallery', v)} />
      <TweakToggle label="CTA" value={t.showCta} onChange={(v) => setTweak('showCta', v)} />

      <TweakSection label="Atmósfera" />
      <TweakToggle label="Manos cavernarias" value={t.showHandprints} onChange={(v) => setTweak('showHandprints', v)} />
      <TweakToggle label="Brasas" value={t.showEmbers} onChange={(v) => setTweak('showEmbers', v)} />
      <TweakColor label="Acento"
        value={t.accent}
        options={['#E66B1F', '#C8923C', '#8C2A12', '#D4A968']}
        onChange={(v) => setTweak('accent', v)} />
    </TweaksPanel>
  );
}

const __clanRoot = document.createElement('div');
document.body.appendChild(__clanRoot);
ReactDOM.createRoot(__clanRoot).render(<ClanTweaks />);
