// Sikas y Centinelas — Tweaks
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "tone": "epic",
  "pillarsLayout": "grid",
  "galleryLayout": "mosaic",
  "density": 1,
  "motion": true
}/*EDITMODE-END*/;

function SikasTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => { window.__sikasApplyTone?.(t.tone); }, [t.tone]);
  React.useEffect(() => { window.__sikasApplyPillars?.(t.pillarsLayout); }, [t.pillarsLayout]);
  React.useEffect(() => { window.__sikasApplyGallery?.(t.galleryLayout); }, [t.galleryLayout]);
  React.useEffect(() => { window.__sikasApplyDensity?.(t.density); }, [t.density]);
  React.useEffect(() => { window.__sikasApplyMotion?.(t.motion); }, [t.motion]);

  return (
    <TweaksPanel title="Tweaks · Sikas y Centinelas">
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

      <TweakSection label="Atmósfera" />
      <TweakSlider
        label="Densidad de gráficos"
        value={t.density}
        min={0.4} max={1.6} step={0.2}
        onChange={(v) => setTweak('density', v)}
      />
      <TweakToggle
        label="Animaciones"
        value={t.motion}
        onChange={(v) => setTweak('motion', v)}
      />
    </TweaksPanel>
  );
}

const __sikasRoot = document.createElement('div');
document.body.appendChild(__sikasRoot);
ReactDOM.createRoot(__sikasRoot).render(<SikasTweaks />);
