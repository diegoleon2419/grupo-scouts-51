// Nosotros — Tweaks
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroEyebrow": "Desde 1957 · 68 años",
  "heroTitle": "Un grupo de jóvenes, para jóvenes",
  "histEyebrow": "La fundación",
  "histTitle": "Una tradición que empezó en el Pedregal",
  "histP1": "El 13 de noviembre de 1957, los <strong>Misioneros del Espíritu Santo</strong>, encabezados por el <strong>Padre Luis Cervantes</strong>, formaron el Grupo 51 con tres ramas: Lobatos, Tropa y Clan.",
  "histP2": "Desde entonces, cada sábado, niños y jóvenes de 7 a 18 años se reúnen en el Parque Luis Barragán para vivir la aventura del escultismo — al aire libre, en comunidad, con propósito.",
  "histP3": "Somos una asociación civil sin fines de lucro. El grupo se sostiene con el esfuerzo de jefes voluntarios y el compromiso de las familias.",
  "histPill": "\"De jóvenes, para jóvenes\"",
  "mvoEyebrow": "Qué nos mueve",
  "mvoTitle": "Misión, visión y objetivo",
  "mis1Num": "01 · Misión", "mis1H": "Qué hacemos",
  "mis1P": "Contribuir a la educación de los jóvenes a través de un sistema de valores basado en la Promesa y la Ley Scout, ayudando a construir un mundo mejor donde cada persona se realice como individuo y juegue un papel constructivo en la sociedad.",
  "mis2Num": "02 · Visión", "mis2H": "A dónde vamos",
  "mis2P": "Ser un grupo scout referente en México: un espacio donde familias, jóvenes y niños encuentren comunidad, aventura y formación para la vida, sábado tras sábado.",
  "mis3Num": "03 · Objetivo", "mis3H": "Cómo lo logramos",
  "mis3P": "Formar líderes íntegros y comprometidos a través de la educación no formal, el trabajo en equipo, el aprender haciendo y el contacto directo con la naturaleza.",
  "workEyebrow": "Cómo nos organizamos",
  "workTitle": "Un grupo dirigido por personas que viven el escultismo",
  "w1H": "Consejo, Comité y Vocales",
  "w1P1": "El grupo se rige por un Consejo de Grupo conformado por la Jefatura y los jefes de cada sección. Un Comité de Padres apoya en temas administrativos y de logística.",
  "w1P2": "Los Vocales son papás que colaboran puntualmente con campamentos, transporte, material y eventos. Ningún puesto es remunerado.",
  "w2H": "Cómo formamos a los jefes",
  "w2P1": "Nuestros jefes son jóvenes de <strong>19 a 24 años</strong> que ya pasaron por todas las secciones. Antes de tomar una rama, cursan el ciclo de formación de la Asociación de Scouts de México.",
  "w2P2": "Cada jefe es evaluado por el Consejo y recibe seguimiento continuo. Detrás de cada sección hay, en promedio, 3 jefes formados — nunca se queda un niño sin acompañamiento.",
  "localEyebrow": "Nuestro local",
  "localTitle": "Parque Luis Barragán",
  "localP": "Nos reunimos en el Parque Luis Barragán, en Jardines del Pedregal, cada sábado de 16:00 a 19:45 hrs. Es un espacio amplio, seguro y con áreas verdes perfectas para vivir el escultismo.",
  "ctaTitle": "Ven a conocernos",
  "ctaP": "No necesitas experiencia ni uniforme la primera vez. Llega con ropa cómoda, tenis y ganas. Te esperamos un sábado cualquiera.",
  "mvoLayout": "grid",
  "showHistory": true,
  "showMvo": true,
  "showWork": true,
  "showLocal": true,
  "showCta": true
}/*EDITMODE-END*/;

function applyAll(t) {
  Object.keys(t).forEach(k => {
    document.querySelectorAll(`[data-tw="${k}"]`).forEach(el => {
      el.innerHTML = String(t[k]);
    });
  });
  const visMap = { showHistory:'.ns-history', showMvo:'.ns-mvo', showWork:'.ns-work', showLocal:'.ns-local', showCta:'.ns-cta' };
  Object.entries(visMap).forEach(([k, sel]) => {
    document.querySelectorAll(sel).forEach(el => { el.style.display = t[k] === false ? 'none' : ''; });
  });
  const mvo = document.querySelector('.ns-mvo-grid');
  if (mvo) {
    mvo.style.gridTemplateColumns = t.mvoLayout === 'stack' ? '1fr' : 'repeat(3, 1fr)';
  }
}

function NosotrosTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => { applyAll(t); }, [t]);

  return (
    <TweaksPanel title="Tweaks · Nosotros">
      <TweakSection label="Hero" />
      <TweakText label="Eyebrow" value={t.heroEyebrow} onChange={(v) => setTweak('heroEyebrow', v)} />
      <TweakText label="Título" value={t.heroTitle} onChange={(v) => setTweak('heroTitle', v)} />

      <TweakSection label="Historia" />
      <TweakText label="Eyebrow" value={t.histEyebrow} onChange={(v) => setTweak('histEyebrow', v)} />
      <TweakText label="Título" value={t.histTitle} onChange={(v) => setTweak('histTitle', v)} />
      <TweakText label="Párrafo 1" value={t.histP1} onChange={(v) => setTweak('histP1', v)} />
      <TweakText label="Párrafo 2" value={t.histP2} onChange={(v) => setTweak('histP2', v)} />
      <TweakText label="Párrafo 3" value={t.histP3} onChange={(v) => setTweak('histP3', v)} />
      <TweakText label="Pill" value={t.histPill} onChange={(v) => setTweak('histPill', v)} />

      <TweakSection label="Misión / Visión / Objetivo" />
      <TweakText label="Eyebrow" value={t.mvoEyebrow} onChange={(v) => setTweak('mvoEyebrow', v)} />
      <TweakText label="Título" value={t.mvoTitle} onChange={(v) => setTweak('mvoTitle', v)} />
      <TweakText label="1 · Núm" value={t.mis1Num} onChange={(v) => setTweak('mis1Num', v)} />
      <TweakText label="1 · Título" value={t.mis1H} onChange={(v) => setTweak('mis1H', v)} />
      <TweakText label="1 · Texto" value={t.mis1P} onChange={(v) => setTweak('mis1P', v)} />
      <TweakText label="2 · Núm" value={t.mis2Num} onChange={(v) => setTweak('mis2Num', v)} />
      <TweakText label="2 · Título" value={t.mis2H} onChange={(v) => setTweak('mis2H', v)} />
      <TweakText label="2 · Texto" value={t.mis2P} onChange={(v) => setTweak('mis2P', v)} />
      <TweakText label="3 · Núm" value={t.mis3Num} onChange={(v) => setTweak('mis3Num', v)} />
      <TweakText label="3 · Título" value={t.mis3H} onChange={(v) => setTweak('mis3H', v)} />
      <TweakText label="3 · Texto" value={t.mis3P} onChange={(v) => setTweak('mis3P', v)} />
      <TweakRadio label="Layout" value={t.mvoLayout}
        options={[{value:'grid', label:'Grid 3'}, {value:'stack', label:'Stack'}]}
        onChange={(v) => setTweak('mvoLayout', v)} />

      <TweakSection label="Cómo funcionamos" />
      <TweakText label="Eyebrow" value={t.workEyebrow} onChange={(v) => setTweak('workEyebrow', v)} />
      <TweakText label="Título" value={t.workTitle} onChange={(v) => setTweak('workTitle', v)} />
      <TweakText label="A · Título" value={t.w1H} onChange={(v) => setTweak('w1H', v)} />
      <TweakText label="A · Pár 1" value={t.w1P1} onChange={(v) => setTweak('w1P1', v)} />
      <TweakText label="A · Pár 2" value={t.w1P2} onChange={(v) => setTweak('w1P2', v)} />
      <TweakText label="B · Título" value={t.w2H} onChange={(v) => setTweak('w2H', v)} />
      <TweakText label="B · Pár 1" value={t.w2P1} onChange={(v) => setTweak('w2P1', v)} />
      <TweakText label="B · Pár 2" value={t.w2P2} onChange={(v) => setTweak('w2P2', v)} />

      <TweakSection label="Local" />
      <TweakText label="Eyebrow" value={t.localEyebrow} onChange={(v) => setTweak('localEyebrow', v)} />
      <TweakText label="Título" value={t.localTitle} onChange={(v) => setTweak('localTitle', v)} />
      <TweakText label="Texto" value={t.localP} onChange={(v) => setTweak('localP', v)} />

      <TweakSection label="CTA" />
      <TweakText label="Título" value={t.ctaTitle} onChange={(v) => setTweak('ctaTitle', v)} />
      <TweakText label="Texto" value={t.ctaP} onChange={(v) => setTweak('ctaP', v)} />

      <TweakSection label="Visibilidad" />
      <TweakToggle label="Historia" value={t.showHistory} onChange={(v) => setTweak('showHistory', v)} />
      <TweakToggle label="Misión/Visión" value={t.showMvo} onChange={(v) => setTweak('showMvo', v)} />
      <TweakToggle label="Cómo funcionamos" value={t.showWork} onChange={(v) => setTweak('showWork', v)} />
      <TweakToggle label="Local" value={t.showLocal} onChange={(v) => setTweak('showLocal', v)} />
      <TweakToggle label="CTA" value={t.showCta} onChange={(v) => setTweak('showCta', v)} />
    </TweaksPanel>
  );
}

const __nosotrosRoot = document.createElement('div');
document.body.appendChild(__nosotrosRoot);
ReactDOM.createRoot(__nosotrosRoot).render(<NosotrosTweaks />);
