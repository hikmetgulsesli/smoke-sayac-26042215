// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Yükleme Ekranı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

interface YuklemeEkraniProps {}

export function YuklemeEkrani(_props: YuklemeEkraniProps) {
  return (
    <>
      {/*  Top Navigation (Suppressed per "Transactional" rule for loading screens, but maintaining structure if needed, keeping empty for pure focus)  */}
      {/*  Main Content Canvas  */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/*  Ambient Background Glow  */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none flex items-center justify-center">
      <div className="w-96 h-96 bg-[var(--color-primary-container)]/10 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>
      {/*  The Monolith Loading Container  */}
      <div className="z-10 flex flex-col items-center justify-center space-y-12 w-full max-w-sm mx-auto">
      {/*  Brand Element / Title  */}
      <div className="flex flex-col items-center space-y-2 opacity-80">
      <span className="material-symbols-outlined text-4xl text-[var(--color-primary)]" data-icon="hourglass_top" data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}}>
                          hourglass_top
                      </span>
      <h1 className="font-headline font-black text-2xl tracking-tighter text-[var(--color-on-surface)] text-center">
                          Yükleniyor
                      </h1>
      </div>
      {/*  Loading Indicator  */}
      <div className="relative flex items-center justify-center py-8">
      {/*  Custom Ring Spinner  */}
      <div className="spinner-ring"></div>
      {/*  Inner Glow  */}
      <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 bg-[var(--color-primary)]/20 rounded-full blur-xl"></div>
      </div>
      </div>
      {/*  Loading Text  */}
      <div className="flex flex-col items-center space-y-1 mt-8">
      <p className="font-label text-xs font-medium uppercase tracking-[0.1em] text-[var(--color-primary)] pulse-text text-center">
                          Veriler yükleniyor...
                      </p>
      {/*  Subtle decorative line indicating progress implicitly  */}
      <div className="w-24 h-px bg-gradient-to-r from-transparent via-[var(--color-outline-variant)] to-transparent mt-4 opacity-50"></div>
      </div>
      </div>
      </main>
      {/*  Bottom Navigation (Suppressed per "Transactional/Loading" rule)  */}
    </>
  );
}
