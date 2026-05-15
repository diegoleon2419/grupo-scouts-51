// Pioneros y Pioneras — Tweaks (text + secciones + layout)
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroEy": "Comunidad Scout · 14 — 18 años",
  "heroTitle1": "Pioneros",
  "heroAmp": "y",
  "heroTitle2": "Pioneras",
  "heroSub": "— Expedición sin retorno —",
  "metaEdadV": "14 — 18",
  "metaEdadL": "Edad",
  "metaDiaV": "Sábado",
  "metaDiaL": "16:00 — 19:45",
  "metaProgV": "Empresas",
  "metaProgL": "Proyectos largos",

  "queEy": "La Comunidad",
  "queTitle": "Autonomía\nreal",
  "queSub": "— Liderazgo de verdad —",

  "misticaEy": "La mística",
  "misticaTitle": "Dos senderos,\n",
  "misticaAccent": "una misma cordada",
  "misticaSub": "— Norte y Oeste —",
  "misticaP": "La Comunidad bebe de dos mitologías que describen el mismo coraje desde dos costas distintas. Los Pioneros toman su mística de los relatos vikingos del norte: la expedición, la fuerza colectiva, el honor. Las Pioneras se nutren de la tradición celta del oeste: la conexión con la tierra, la sabiduría circular, la palabra que ata.",
  "pioLabel": "Tradición del Norte",
  "pioH": "Pioneros",
  "pioTag": "Mitología vikinga",
  "pioP": "El drakkar parte cuando todos reman. La expedición vikinga no era un viaje solitario — era una empresa colectiva donde cada hombre tenía un puesto y una responsabilidad. Esa es la imagen que rige a los Pioneros: una tripulación, no un grupo.",
  "piaLabel": "Tradición del Oeste",
  "piaH": "Pioneras",
  "piaTag": "Mitología celta",
  "piaP": "El círculo druídico: igualdad entre todas, palabra empeñada, conexión con la tierra. La tradición celta enseña que la fuerza no está en el primero del grupo, sino en la cadena que las une. Las Pioneras adoptan esa imagen del clan femenino que cuida sus raíces.",

  "actsEy": "Empresas y aventuras",
  "actsTitle": "Lo que hace\n",
  "actsAccent": "la comunidad",
  "actsSub": "— Cuatro frentes —",
  "act1H": "Empresas grandes",
  "act2H": "Supervivencia",
  "act3H": "Construcciones",
  "act4H": "Excursiones culturales",

  "servEy": "Impacto",
  "servTitle": "Servicio\n",
  "servAccent": "de alto\nimpacto",
  "servSub": "— Una vez al año —",
  "servP1": "Cada año la Comunidad elige un proyecto social grande — apoyo a comunidades rurales, reforestación, intervenciones en albergues. No es una visita puntual: son meses de planeación, recaudación y trabajo en campo, con resultados medibles.",
  "servP2": "Es el momento donde lo aprendido en la sección sale del grupo y se entrega a quien lo necesita.",
  "servStatN": "1",
  "servStatL": "Proyecto / Año",

  "galleryEy": "La comunidad en imágenes",
  "galleryTitle": "Sábados,\n",
  "galleryAccent": "campamentos\ny empresa",

  "horarioEy": "Cuándo nos vemos",
  "horarioH": "Sábados\n16:00 — 19:45 hrs",
  "horarioP": "Parque Luis Barragán · Jardines del Pedregal · CDMX",
  "horarioFoot": "+ campamentos y empresas según calendario",

  "ctaEy": "Únete a la comunidad",
  "ctaTitle1": "¿Tienes entre\n14 ",
  "ctaAmp": "y",
  "ctaTitle2": " 18 años?",
  "ctaP": "Si te imaginas construyendo algo grande con quince personas más que también quieren hacerlo — esta es tu sección. Te esperamos cualquier sábado.",

  "tone": "epic",
  "actsLayout": "grid",
  "galleryLayout": "mosaic",
  "density": 1,
  "motion": true,

  "showQue": true,
  "showMistica": true,
  "showActs": true,
  "showServicio": true,
  "showGallery": true,
  "showHorario": true,
  "showCta": true,
  "showEmbers": true,
  "showRunes": true
}/*EDITMODE-END*/;

function applyPnText(t) {
  Object.keys(t).forEach(k => {
    document.querySelectorAll(`[data-tw="${k}"]`).forEach(el => {
      el.innerHTML = String(t[k]).replace(/\n/g, '<br/>');
    });
  });
}

function applyPnVisibility(t) {
  const map = {
    showQue: '.pn-que',
    showMistica: '.pn-mistica',
    showActs: '.pn-acts',
    showServicio: '.pn-servicio',
    showGallery: '.pn-gallery',
    showHorario: '.pn-horario',
    showCta: '.pn-cta'
  };
  Object.entries(map).forEach(([k, sel]) => {
    document.querySelectorAll(sel).forEach(el => {
      el.style.display = t[k] === false ? 'none' : '';
    });
  });
  document.querySelectorAll('.pn-hero .embers').forEach(el => el.style.display = t.showEmbers ? '' : 'none');
  document.querySelectorAll('.runes-side').forEach(el => el.style.display = t.showRunes ? '' : 'none');
}

function PionerosTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => { applyPnText(t); });
  React.useEffect(() => { applyPnVisibility(t); }, [t.showQue, t.showMistica, t.showActs, t.showServicio, t.showGallery, t.showHorario, t.showCta, t.showEmbers, t.showRunes]);
  React.useEffect(() => { window.__pionerosApplyTone?.(t.tone); }, [t.tone]);
  React.useEffect(() => { window.__pionerosApplyActs?.(t.actsLayout); }, [t.actsLayout]);
  React.useEffect(() => { window.__pionerosApplyGallery?.(t.galleryLayout); }, [t.galleryLayout]);
  React.useEffect(() => { window.__pionerosApplyDensity?.(t.density); }, [t.density]);
  React.useEffect(() => { window.__pionerosApplyMotion?.(t.motion); }, [t.motion]);

  return (
    <TweaksPanel title="Tweaks · Pioneros y Pioneras">
      <TweakSection label="Hero" />
      <TweakText label="Eyebrow" value={t.heroEy} onChange={(v) => setTweak('heroEy', v)} />
      <TweakText label="Título 1" value={t.heroTitle1} onChange={(v) => setTweak('heroTitle1', v)} />
      <TweakText label="Conector" value={t.heroAmp} onChange={(v) => setTweak('heroAmp', v)} />
      <TweakText label="Título 2" value={t.heroTitle2} onChange={(v) => setTweak('heroTitle2', v)} />
      <TweakText label="Subtítulo" value={t.heroSub} onChange={(v) => setTweak('heroSub', v)} />
      <TweakText label="Meta · Edad valor" value={t.metaEdadV} onChange={(v) => setTweak('metaEdadV', v)} />
      <TweakText label="Meta · Edad label" value={t.metaEdadL} onChange={(v) => setTweak('metaEdadL', v)} />
      <TweakText label="Meta · Día valor" value={t.metaDiaV} onChange={(v) => setTweak('metaDiaV', v)} />
      <TweakText label="Meta · Día label" value={t.metaDiaL} onChange={(v) => setTweak('metaDiaL', v)} />
      <TweakText label="Meta · Programa valor" value={t.metaProgV} onChange={(v) => setTweak('metaProgV', v)} />
      <TweakText label="Meta · Programa label" value={t.metaProgL} onChange={(v) => setTweak('metaProgL', v)} />

      <TweakSection label="Qué es" />
      <TweakText label="Eyebrow" value={t.queEy} onChange={(v) => setTweak('queEy', v)} />
      <TweakText label="Título" value={t.queTitle} onChange={(v) => setTweak('queTitle', v)} />
      <TweakText label="Subtítulo" value={t.queSub} onChange={(v) => setTweak('queSub', v)} />

      <TweakSection label="Mística" />
      <TweakText label="Eyebrow" value={t.misticaEy} onChange={(v) => setTweak('misticaEy', v)} />
      <TweakText label="Título" value={t.misticaTitle} onChange={(v) => setTweak('misticaTitle', v)} />
      <TweakText label="Acento" value={t.misticaAccent} onChange={(v) => setTweak('misticaAccent', v)} />
      <TweakText label="Subtítulo" value={t.misticaSub} onChange={(v) => setTweak('misticaSub', v)} />
      <TweakText label="Párrafo" value={t.misticaP} onChange={(v) => setTweak('misticaP', v)} />
      <TweakText label="Pioneros · Label" value={t.pioLabel} onChange={(v) => setTweak('pioLabel', v)} />
      <TweakText label="Pioneros · Título" value={t.pioH} onChange={(v) => setTweak('pioH', v)} />
      <TweakText label="Pioneros · Tag" value={t.pioTag} onChange={(v) => setTweak('pioTag', v)} />
      <TweakText label="Pioneros · Texto" value={t.pioP} onChange={(v) => setTweak('pioP', v)} />
      <TweakText label="Pioneras · Label" value={t.piaLabel} onChange={(v) => setTweak('piaLabel', v)} />
      <TweakText label="Pioneras · Título" value={t.piaH} onChange={(v) => setTweak('piaH', v)} />
      <TweakText label="Pioneras · Tag" value={t.piaTag} onChange={(v) => setTweak('piaTag', v)} />
      <TweakText label="Pioneras · Texto" value={t.piaP} onChange={(v) => setTweak('piaP', v)} />

      <TweakSection label="Actividades" />
      <TweakText label="Eyebrow" value={t.actsEy} onChange={(v) => setTweak('actsEy', v)} />
      <TweakText label="Título" value={t.actsTitle} onChange={(v) => setTweak('actsTitle', v)} />
      <TweakText label="Acento" value={t.actsAccent} onChange={(v) => setTweak('actsAccent', v)} />
      <TweakText label="Subtítulo" value={t.actsSub} onChange={(v) => setTweak('actsSub', v)} />
      <TweakText label="Act 1" value={t.act1H} onChange={(v) => setTweak('act1H', v)} />
      <TweakText label="Act 2" value={t.act2H} onChange={(v) => setTweak('act2H', v)} />
      <TweakText label="Act 3" value={t.act3H} onChange={(v) => setTweak('act3H', v)} />
      <TweakText label="Act 4" value={t.act4H} onChange={(v) => setTweak('act4H', v)} />

      <TweakSection label="Servicio" />
      <TweakText label="Eyebrow" value={t.servEy} onChange={(v) => setTweak('servEy', v)} />
      <TweakText label="Título" value={t.servTitle} onChange={(v) => setTweak('servTitle', v)} />
      <TweakText label="Acento" value={t.servAccent} onChange={(v) => setTweak('servAccent', v)} />
      <TweakText label="Subtítulo" value={t.servSub} onChange={(v) => setTweak('servSub', v)} />
      <TweakText label="Párrafo 1" value={t.servP1} onChange={(v) => setTweak('servP1', v)} />
      <TweakText label="Párrafo 2" value={t.servP2} onChange={(v) => setTweak('servP2', v)} />
      <TweakText label="Stat número" value={t.servStatN} onChange={(v) => setTweak('servStatN', v)} />
      <TweakText label="Stat label" value={t.servStatL} onChange={(v) => setTweak('servStatL', v)} />

      <TweakSection label="Galería" />
      <TweakText label="Eyebrow" value={t.galleryEy} onChange={(v) => setTweak('galleryEy', v)} />
      <TweakText label="Título" value={t.galleryTitle} onChange={(v) => setTweak('galleryTitle', v)} />
      <TweakText label="Acento" value={t.galleryAccent} onChange={(v) => setTweak('galleryAccent', v)} />

      <TweakSection label="Horario" />
      <TweakText label="Eyebrow" value={t.horarioEy} onChange={(v) => setTweak('horarioEy', v)} />
      <TweakText label="Título" value={t.horarioH} onChange={(v) => setTweak('horarioH', v)} />
      <TweakText label="Lugar" value={t.horarioP} onChange={(v) => setTweak('horarioP', v)} />
      <TweakText label="Nota" value={t.horarioFoot} onChange={(v) => setTweak('horarioFoot', v)} />

      <TweakSection label="CTA" />
      <TweakText label="Eyebrow" value={t.ctaEy} onChange={(v) => setTweak('ctaEy', v)} />
      <TweakText label="Título 1" value={t.ctaTitle1} onChange={(v) => setTweak('ctaTitle1', v)} />
      <TweakText label="Conector" value={t.ctaAmp} onChange={(v) => setTweak('ctaAmp', v)} />
      <TweakText label="Título 2" value={t.ctaTitle2} onChange={(v) => setTweak('ctaTitle2', v)} />
      <TweakText label="Texto" value={t.ctaP} onChange={(v) => setTweak('ctaP', v)} />

      <TweakSection label="Layout" />
      <TweakRadio
        label="Actividades"
        value={t.actsLayout}
        options={[
          { value: 'grid',   label: 'Grid' },
          { value: 'list',   label: 'Lista' },
          { value: 'zigzag', label: 'Zigzag' },
        ]}
        onChange={(v) => setTweak('actsLayout', v)}
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
      <TweakToggle label="Actividades" value={t.showActs} onChange={(v) => setTweak('showActs', v)} />
      <TweakToggle label="Servicio" value={t.showServicio} onChange={(v) => setTweak('showServicio', v)} />
      <TweakToggle label="Galería" value={t.showGallery} onChange={(v) => setTweak('showGallery', v)} />
      <TweakToggle label="Horario" value={t.showHorario} onChange={(v) => setTweak('showHorario', v)} />
      <TweakToggle label="CTA" value={t.showCta} onChange={(v) => setTweak('showCta', v)} />

      <TweakSection label="Atmósfera" />
      <TweakToggle label="Brasas" value={t.showEmbers} onChange={(v) => setTweak('showEmbers', v)} />
      <TweakToggle label="Runas laterales" value={t.showRunes} onChange={(v) => setTweak('showRunes', v)} />
      <TweakSlider label="Densidad de gráficos" value={t.density} min={0.4} max={1.6} step={0.2} onChange={(v) => setTweak('density', v)} />
      <TweakToggle label="Animaciones" value={t.motion} onChange={(v) => setTweak('motion', v)} />
    </TweaksPanel>
  );
}

const __pionerosRoot = document.createElement('div');
document.body.appendChild(__pionerosRoot);
ReactDOM.createRoot(__pionerosRoot).render(<PionerosTweaks />);
