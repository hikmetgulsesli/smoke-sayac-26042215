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
      <header className="bg-[#0c1322] docked full-width top-0 z-50">
      <div className="flex justify-between items-center w-full px-6 py-4">
      <div className="flex items-center gap-4">
      <h1 className="font-['Inter'] font-bold tracking-tight text-xl font-black tracking-tighter text-blue-600 dark:text-blue-400">Obsidian Tally</h1>
      </div>
      <div className="flex items-center gap-4 hidden md:flex">
      <button aria-label="Tally" className="p-2 text-blue-400 font-bold hover:opacity-80 transition-opacity scale-95 active:scale-90 transition-transform min-h-[44px] min-w-[44px]">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>add_circle</span>
      <span className="sr-only">Tally</span>
      </button>
      <button aria-label="Logs" className="p-2 text-slate-500 hover:opacity-80 transition-opacity scale-95 active:scale-90 transition-transform min-h-[44px] min-w-[44px]">
      <span className="material-symbols-outlined">history</span>
      <span className="sr-only">Logs</span>
      </button>
      <button aria-label="Settings" className="p-2 text-slate-500 hover:opacity-80 transition-opacity scale-95 active:scale-90 transition-transform min-h-[44px] min-w-[44px]">
      <span className="material-symbols-outlined">settings</span>
      <span className="sr-only">Settings</span>
      </button>
      </div>
      <div className="flex items-center gap-4 md:hidden">
      <button aria-label="Logs" className="p-2 text-blue-600 dark:text-blue-400 hover:opacity-80 transition-opacity scale-95 active:scale-90 transition-transform min-h-[44px] min-w-[44px]">
      <span className="material-symbols-outlined">history</span>
      </button>
      <button aria-label="Settings" className="p-2 text-blue-600 dark:text-blue-400 hover:opacity-80 transition-opacity scale-95 active:scale-90 transition-transform min-h-[44px] min-w-[44px]">
      <span className="material-symbols-outlined">settings</span>
      </button>
      </div>
      </div>
      </header>
      {/*  Main Content: The Nocturnal Monolith  */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 pb-32 pt-8 relative overflow-hidden">
      {/*  Ambient Background Glow  */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
      <div className="w-[500px] h-[500px] bg-primary-container/5 rounded-full blur-[100px]"></div>
      </div>
      <div className="w-full max-w-md flex flex-col items-center relative z-10">
      {/*  Context Label  */}
      <div className="mb-4">
      <span className="font-label text-xs font-medium uppercase tracking-[0.05em] text-on-surface-variant/70">Sayaç</span>
      </div>
      {/*  The Counter Monolith  */}
      <div className="bg-surface-container rounded-xl p-12 w-full flex flex-col items-center justify-center mb-8 relative">
      {/*  Ghost border fallback for structural feel  */}
      <div className="absolute inset-0 border border-outline-variant/15 rounded-xl pointer-events-none"></div>
      <h2 className="font-display font-bold text-[5rem] leading-none text-on-primary-container tracking-tighter drop-shadow-[0_0_20px_rgba(37,99,235,0.2)]">
        {state.deger}
      </h2>
      <div className="mt-4 opacity-0">
      <span className="text-sm text-on-surface-variant">Pulse Anchor</span>
      </div>
      </div>
      {/*  Controls (Asymmetric & Tonal)  */}
      <div className="w-full flex flex-col gap-6">
      {/*  Primary Actions Grid  */}
      <div className="grid grid-cols-2 gap-4">
      {/*  Azalt (Decrease)  */}
      <button onClick={decrement} aria-label="Azalt" className="bg-secondary-container text-on-secondary-container rounded-lg py-5 px-6 flex items-center justify-center gap-2 transition-transform hover:brightness-125 active:scale-95 shadow-[0_4px_20px_rgba(187,1,18,0.15)] group relative overflow-hidden cursor-pointer">
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <span className="material-symbols-outlined text-[2rem]" style={{fontVariationSettings: "'wght' 600"}}>remove</span>
      <span className="font-label font-bold tracking-wide">Azalt</span>
      </button>
      {/*  Artır (Increase)  */}
      <button onClick={increment} aria-label="Artır" className="bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-lg py-5 px-6 flex items-center justify-center gap-2 transition-transform hover:brightness-110 active:scale-95 shadow-[0_4px_30px_rgba(37,99,235,0.3)] group relative overflow-hidden cursor-pointer">
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <span className="material-symbols-outlined text-[2rem]" style={{fontVariationSettings: "'wght' 600"}}>add</span>
      <span className="font-label font-bold tracking-wide">Artır</span>
      </button>
      </div>
      {/*  Secondary Action (Off-center/Asymmetric)  */}
      <div className="flex justify-end mt-2">
      <button onClick={onayDialogunuAc} aria-label="Sıfırla" className="bg-surface-variant text-on-surface-variant rounded-full py-2 px-5 flex items-center gap-2 hover:bg-surface-bright transition-colors text-sm font-medium border border-outline-variant/20 cursor-pointer min-h-[44px] min-w-[44px]">
      <span className="material-symbols-outlined text-sm">restart_alt</span>
                              Sıfırla
                          </button>
      </div>
      </div>
      </div>
      </main>
      {/*  BottomNavBar (Mobile Only)  */}
      <nav className="md:hidden bg-[#0c1322]/40 backdrop-blur-xl fixed bottom-0 w-full z-50 shadow-[0_-4px_40px_rgba(37,99,235,0.1)]">
      <div className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-2">
      {/*  Active Tab  */}
      <button aria-label="Tally" className="flex flex-col items-center justify-center bg-blue-600/10 text-blue-400 rounded-xl px-4 py-2 hover:text-blue-300 transition-colors scale-110 duration-150 ease-out group min-h-[44px] min-w-[44px]">
      <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: "'FILL' 1"}}>add_circle</span>
      <span className="font-['Inter'] text-[10px] font-medium uppercase tracking-[0.05em]">Tally</span>
      </button>
      {/*  Inactive Tab  */}
      <button aria-label="Logs" className="flex flex-col items-center justify-center text-slate-500 px-4 py-2 hover:text-blue-300 transition-colors group min-h-[44px] min-w-[44px]">
      <span className="material-symbols-outlined mb-1 transition-transform group-hover:scale-110">history</span>
      <span className="font-['Inter'] text-[10px] font-medium uppercase tracking-[0.05em]">Logs</span>
      </button>
      {/*  Inactive Tab  */}
      <button aria-label="Settings" className="flex flex-col items-center justify-center text-slate-500 px-4 py-2 hover:text-blue-300 transition-colors group min-h-[44px] min-w-[44px]">
      <span className="material-symbols-outlined mb-1 transition-transform group-hover:scale-110">tune</span>
      <span className="font-['Inter'] text-[10px] font-medium uppercase tracking-[0.05em]">Settings</span>
      </button>
      </div>
      </nav>
    </>
  );
}
