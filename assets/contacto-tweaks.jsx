// Contacto — Tweaks
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroEy": "Contacto · 19°21'N 99°12'W",
  "heroTitle": "Ven cualquier sábado",
  "heroEm": "— No hace falta cita —",
  "heroLede": "No necesitas formularios, ni inscripción previa, ni uniforme la primera vez. Llega al Parque Luis Barragán cualquier sábado a las cuatro y nos conoces. Si te late, te quedas.",
  "waPre": "— La forma más rápida —",
  "waNum": "55 3031 0438",
  "waSub": "Respondemos en el día",
  "waBtn": "Escríbenos por WhatsApp →",
  "waNb": "— Cuéntanos qué edad tiene tu hijo o tú —",
  "dataEy": "Otros canales",
  "dataTitle": "Y si prefieres<br/>otra vía",
  "horarioEy": "Cuándo nos vemos",
  "horarioTitle": "Todos los<br/>sábados",
  "horarioP1": "Llega con ropa cómoda, tenis y una botella de agua. Si vas por primera vez, basta con avisarnos por WhatsApp un par de días antes — así sabemos a quién esperar.",
  "horarioP2": "— No hace falta uniforme la primera vez —",
  "locEy": "Dónde encontrarnos",
  "locTitle": "Parque Luis<br/>Barragán",
  "finalTitle": "Te esperamos<br/>este sábado",
  "finalP": "· 16:00 hrs · Parque Luis Barragán · Sin cita ·",
  "showWa": true,
  "showData": true,
  "showHorario": true,
  "showLoc": true,
  "showFinal": true,
  "dataCols": "2"
}/*EDITMODE-END*/;

function applyAll(t) {
  Object.keys(t).forEach(k => {
    document.querySelectorAll(`[data-tw="${k}"]`).forEach(el => { el.innerHTML = String(t[k]); });
  });
  const vis = { showWa:'.ct-wa', showData:'.ct-data', showHorario:'.ct-horario', showLoc:'.ct-loc', showFinal:'.ct-final' };
  Object.entries(vis).forEach(([k, sel]) => {
    document.querySelectorAll(sel).forEach(el => { el.style.display = t[k] === false ? 'none' : ''; });
  });
  const grid = document.querySelector('.ct-data-grid');
  if (grid) grid.style.gridTemplateColumns = `repeat(${t.dataCols}, 1fr)`;
}

function ContactoTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  React.useEffect(() => { applyAll(t); }, [t]);
  return (
    <TweaksPanel title="Tweaks · Contacto">
      <TweakSection label="Hero" />
      <TweakText label="Eyebrow" value={t.heroEy} onChange={(v) => setTweak('heroEy', v)} />
      <TweakText label="Título" value={t.heroTitle} onChange={(v) => setTweak('heroTitle', v)} />
      <TweakText label="Sub-título" value={t.heroEm} onChange={(v) => setTweak('heroEm', v)} />
      <TweakText label="Lede" value={t.heroLede} onChange={(v) => setTweak('heroLede', v)} />

      <TweakSection label="WhatsApp" />
      <TweakText label="Pre" value={t.waPre} onChange={(v) => setTweak('waPre', v)} />
      <TweakText label="Número" value={t.waNum} onChange={(v) => setTweak('waNum', v)} />
      <TweakText label="Sub" value={t.waSub} onChange={(v) => setTweak('waSub', v)} />
      <TweakText label="Botón" value={t.waBtn} onChange={(v) => setTweak('waBtn', v)} />
      <TweakText label="Nota" value={t.waNb} onChange={(v) => setTweak('waNb', v)} />

      <TweakSection label="Otros canales" />
      <TweakText label="Eyebrow" value={t.dataEy} onChange={(v) => setTweak('dataEy', v)} />
      <TweakText label="Título" value={t.dataTitle} onChange={(v) => setTweak('dataTitle', v)} />
      <TweakRadio label="Columnas" value={t.dataCols}
        options={[{value:'1', label:'1'}, {value:'2', label:'2'}, {value:'4', label:'4'}]}
        onChange={(v) => setTweak('dataCols', v)} />

      <TweakSection label="Horarios" />
      <TweakText label="Eyebrow" value={t.horarioEy} onChange={(v) => setTweak('horarioEy', v)} />
      <TweakText label="Título" value={t.horarioTitle} onChange={(v) => setTweak('horarioTitle', v)} />
      <TweakText label="Párrafo 1" value={t.horarioP1} onChange={(v) => setTweak('horarioP1', v)} />
      <TweakText label="Nota" value={t.horarioP2} onChange={(v) => setTweak('horarioP2', v)} />

      <TweakSection label="Ubicación" />
      <TweakText label="Eyebrow" value={t.locEy} onChange={(v) => setTweak('locEy', v)} />
      <TweakText label="Título" value={t.locTitle} onChange={(v) => setTweak('locTitle', v)} />

      <TweakSection label="Cierre" />
      <TweakText label="Título" value={t.finalTitle} onChange={(v) => setTweak('finalTitle', v)} />
      <TweakText label="Texto" value={t.finalP} onChange={(v) => setTweak('finalP', v)} />

      <TweakSection label="Visibilidad" />
      <TweakToggle label="WhatsApp" value={t.showWa} onChange={(v) => setTweak('showWa', v)} />
      <TweakToggle label="Otros canales" value={t.showData} onChange={(v) => setTweak('showData', v)} />
      <TweakToggle label="Horarios" value={t.showHorario} onChange={(v) => setTweak('showHorario', v)} />
      <TweakToggle label="Ubicación" value={t.showLoc} onChange={(v) => setTweak('showLoc', v)} />
      <TweakToggle label="Cierre" value={t.showFinal} onChange={(v) => setTweak('showFinal', v)} />
    </TweaksPanel>
  );
}

const __contactoRoot = document.createElement('div');
document.body.appendChild(__contactoRoot);
ReactDOM.createRoot(__contactoRoot).render(<ContactoTweaks />);
