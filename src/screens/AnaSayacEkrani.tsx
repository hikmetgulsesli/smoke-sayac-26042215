// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Sayaç Ekranı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state


import type { SayacContext } from '../types/counter';

interface AnaSayacEkraniProps {
  context: SayacContext;
}

export function AnaSayacEkrani({ context }: AnaSayacEkraniProps) {
  const { state, increment, decrement, onayDialogunuAc } = context;
  return (
    <>
      {/*  TopAppBar  */}
      <header className="bg-[var(--color-background)] docked full-width top-0 z-50">
      <div className="flex justify-between items-center w-full px-6 py-4">
      <div className="flex items-center gap-4">
      <h1 className="font-headline font-black text-xl text-[var(--color-primary)]">Obsidian Sayaç</h1>
      </div>
      <div className="flex items-center gap-4 hidden md:flex">
      <button aria-label="Sayaç" className="p-2 text-[var(--color-primary)] font-bold hover:opacity-80 transition-opacity scale-95 active:scale-90 transition-transform min-h-[44px] min-w-[44px]">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>add_circle</span>
      <span className="sr-only">Tally</span>
      </button>
      <button aria-label="Kayıtlar" className="p-2 text-[var(--color-on-surface-variant)] hover:opacity-80 transition-opacity scale-95 active:scale-90 transition-transform min-h-[44px] min-w-[44px]">
      <span className="material-symbols-outlined">history</span>
      <span className="sr-only">Logs</span>
      </button>
      <button aria-label="Ayarlar" className="p-2 text-[var(--color-on-surface-variant)] hover:opacity-80 transition-opacity scale-95 active:scale-90 transition-transform min-h-[44px] min-w-[44px]">
      <span className="material-symbols-outlined">settings</span>
      <span className="sr-only">Settings</span>
      </button>
      </div>
      <div className="flex items-center gap-4 md:hidden">
      <button aria-label="Kayıtlar" className="p-2 text-[var(--color-primary)] hover:opacity-80 transition-opacity scale-95 active:scale-90 transition-transform min-h-[44px] min-w-[44px]">
      <span className="material-symbols-outlined">history</span>
      </button>
      <button aria-label="Ayarlar" className="p-2 text-[var(--color-primary)] hover:opacity-80 transition-opacity scale-95 active:scale-90 transition-transform min-h-[44px] min-w-[44px]">
      <span className="material-symbols-outlined">settings</span>
      </button>
      </div>
      </div>
      </header>
      {/*  Main Content: The Nocturnal Monolith  */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 pb-32 pt-8 relative overflow-hidden">
      {/*  Ambient Background Glow  */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      <div className="w-[500px] h-[500px] bg-[var(--color-primary-container)]/5 rounded-full blur-[100px]"></div>
      </div>
      <div className="w-full max-w-md flex flex-col items-center relative z-10">
      {/*  Context Label  */}
      <div className="mb-4">
      <span className="font-label text-xs font-medium uppercase tracking-[0.05em] text-[var(--color-on-surface-variant)]">Sayaç</span>
      </div>
      {/*  The Counter Monolith  */}
      <div className="bg-[var(--color-surface-container)] rounded-xl p-12 w-full flex flex-col items-center justify-center mb-8 relative">
      {/*  Ghost border fallback for structural feel  */}
      <div className="absolute inset-0 border border-[var(--color-outline-variant)]/15 rounded-xl pointer-events-none"></div>
      <h2 className="font-display font-bold text-[5rem] leading-none text-[var(--color-on-primary-container)] tracking-tighter drop-shadow-[0_0_20px_color-mix(in_srgb,var(--color-primary-container)_20%,transparent)]">
        {state.deger}
      </h2>
      <div className="mt-4 opacity-0">
      <span className="text-sm text-[var(--color-on-surface-variant)]">Pulse Anchor</span>
      </div>
      </div>
      {/*  Controls (Asymmetric & Tonal)  */}
      <div className="w-full flex flex-col gap-6">
      {/*  Primary Actions Grid  */}
      <div className="grid grid-cols-2 gap-4">
      {/*  Azalt (Decrease)  */}
      <button onClick={decrement} aria-label="Azalt" className="bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)] rounded-lg py-5 px-6 flex items-center justify-center gap-2 transition-transform hover:brightness-125 active:scale-95 shadow-[0_4px_20px_color-mix(in_srgb,var(--color-secondary-container)_15%,transparent)] group relative overflow-hidden cursor-pointer">
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <span className="material-symbols-outlined text-[2rem]" style={{fontVariationSettings: "'wght' 600"}}>remove</span>
      <span className="font-label font-bold tracking-wide">Azalt</span>
      </button>
      {/*  Artır (Increase)  */}
      <button onClick={increment} aria-label="Artır" className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-container)] text-[var(--color-on-primary)] rounded-lg py-5 px-6 flex items-center justify-center gap-2 transition-transform hover:brightness-110 active:scale-95 shadow-[0_4px_30px_color-mix(in_srgb,var(--color-primary-container)_30%,transparent)] group relative overflow-hidden cursor-pointer">
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <span className="material-symbols-outlined text-[2rem]" style={{fontVariationSettings: "'wght' 600"}}>add</span>
      <span className="font-label font-bold tracking-wide">Artır</span>
      </button>
      </div>
      {/*  Secondary Action (Off-center/Asymmetric)  */}
      <div className="flex justify-end mt-2">
      <button onClick={onayDialogunuAc} aria-label="Sıfırla" className="bg-[var(--color-surface-variant)] text-[var(--color-on-surface-variant)] rounded-full py-2 px-5 flex items-center gap-2 hover:bg-[var(--color-surface-bright)] transition-colors text-sm font-medium border border-[var(--color-outline-variant)]/20 cursor-pointer min-h-[44px] min-w-[44px]">
      <span className="material-symbols-outlined text-sm">restart_alt</span>
                              Sıfırla
                          </button>
      </div>
      </div>
      </div>
      </main>
      {/*  BottomNavBar (Mobile Only)  */}
      <nav className="md:hidden bg-[var(--color-background)]/40 backdrop-blur-xl fixed bottom-0 w-full z-50 shadow-[0_-4px_40px_color-mix(in_srgb,var(--color-primary-container)_10%,transparent)]">
      <div className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-2">
      {/*  Active Tab  */}
      <button aria-label="Sayaç" className="flex flex-col items-center justify-center bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-xl px-4 py-2 hover:text-[var(--color-primary-fixed)] transition-colors scale-110 duration-150 ease-out group min-h-[44px] min-w-[44px]">
      <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: "'FILL' 1"}}>add_circle</span>
      <span className="font-headline text-[10px] font-medium uppercase tracking-[0.05em]">Sayaç</span>
      </button>
      {/*  Inactive Tab  */}
      <button aria-label="Kayıtlar" className="flex flex-col items-center justify-center text-[var(--color-on-surface-variant)] px-4 py-2 hover:text-[var(--color-primary-fixed)] transition-colors group min-h-[44px] min-w-[44px]">
      <span className="material-symbols-outlined mb-1 transition-transform group-hover:scale-110">history</span>
      <span className="font-headline text-[10px] font-medium uppercase tracking-[0.05em]">Kayıtlar</span>
      </button>
      {/*  Inactive Tab  */}
      <button aria-label="Ayarlar" className="flex flex-col items-center justify-center text-[var(--color-on-surface-variant)] px-4 py-2 hover:text-[var(--color-primary-fixed)] transition-colors group min-h-[44px] min-w-[44px]">
      <span className="material-symbols-outlined mb-1 transition-transform group-hover:scale-110">tune</span>
      <span className="font-headline text-[10px] font-medium uppercase tracking-[0.05em]">Ayarlar</span>
      </button>
      </div>
      </nav>
    </>
  );
}
