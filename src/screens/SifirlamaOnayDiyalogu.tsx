// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Sıfırlama Onay Diyaloğu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

import type { SayacContext } from '../types/counter';

interface SifirlamaOnayDiyaloguProps {
  context: SayacContext;
}

export function SifirlamaOnayDiyalogu({ context }: SifirlamaOnayDiyaloguProps) {
  const { state, onaylaVeSifirla, onayDialogunuKapat } = context;
  return (
    <>
      {/*  Top Navigation (Shell suppressed due to Transactional intent - Task-Focused)  */}
      {/*  Main Canvas Content (Simulated Background)  */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 relative z-0 opacity-40 blur-sm pointer-events-none">
      {/*  Simulated Counter App Content behind the modal  */}
      <div className="flex flex-col items-center gap-12 mt-12 w-full max-w-sm">
      <div className="flex flex-col items-center">
      <span className="font-label text-[0.75rem] font-medium uppercase tracking-[0.05em] text-[var(--color-on-surface-variant)] mb-4">Toplam Sayı</span>
      <h1 className="font-display text-[3.5rem] font-bold text-[var(--color-on-primary-container)] leading-none">{state.deger}</h1>
      </div>
      <div className="bg-[var(--color-surface-container)] rounded-xl w-full p-8 flex flex-col items-center pt-[32px] shadow-[0_0_40px_color-mix(in_srgb,var(--color-on-primary)_20%,transparent)]">
      <div className="flex justify-between w-full gap-6">
      <button className="bg-[var(--color-secondary-container)] text-[var(--color-on-secondary-container)] rounded-lg p-6 flex-1 flex items-center justify-center">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'wght' 600"}}>remove</span>
      </button>
      <button className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-container)] text-[var(--color-on-primary)] rounded-lg p-6 flex-1 flex items-center justify-center">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'wght' 600"}}>add</span>
      </button>
      </div>
      </div>
      </div>
      </main>
      {/*  Modal Overlay Backdrop  */}
      <div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 bg-[var(--color-surface)]/80 backdrop-blur-md z-40 flex items-center justify-center p-6" role="dialog">
      {/*  Modal Content Container  */}
      <div className="bg-[var(--color-surface-container-highest)] rounded-xl w-full max-w-md p-8 shadow-[0_0_60px_color-mix(in_srgb,var(--color-on-primary)_30%,transparent)] relative overflow-hidden ring-1 ring-[var(--color-outline-variant)]/15 flex flex-col gap-6 transform scale-100 opacity-100 transition-all">
      {/*  Icon/Indicator  */}
      <div className="w-12 h-12 rounded-full bg-[var(--color-error-container)]/20 flex items-center justify-center text-[var(--color-error)] mx-auto mb-2">
      <span className="material-symbols-outlined text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>warning</span>
      </div>
      {/*  Title & Description  */}
      <div className="text-center flex flex-col gap-2">
      <h2 className="font-headline text-xl font-bold text-[var(--color-on-surface)]" id="modal-title">Sıfırlama Onayı</h2>
      <p className="font-body text-sm text-[var(--color-on-surface-variant)] leading-relaxed">
                          Sayacı sıfırlamak istediğinize emin misiniz? Bu işlem geri alınamaz ve tüm kayıtlı ilerlemeniz silinir.
                      </p>
      </div>
      {/*  Actions  */}
      <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full">
      <button onClick={onayDialogunuKapat} aria-label="İptal" type="button" className="order-2 sm:order-1 flex-1 px-6 py-3 rounded-lg bg-[var(--color-surface)] font-label text-[0.75rem] font-medium uppercase tracking-[0.05em] text-[var(--color-on-surface-variant)] hover:bg-[var(--color-surface-container-low)] transition-colors ring-1 ring-[var(--color-outline-variant)]/20 cursor-pointer">
                          İptal
                      </button>
      <button onClick={onaylaVeSifirla} aria-label="Evet, Sıfırla" type="button" className="order-1 sm:order-2 flex-1 px-6 py-3 rounded-lg bg-[var(--color-error-container)] font-label text-[0.75rem] font-medium uppercase tracking-[0.05em] text-[var(--color-on-error-container)] hover:brightness-110 transition-all flex justify-center items-center gap-2 cursor-pointer">
      <span className="material-symbols-outlined text-sm">delete</span>
                          Evet, Sıfırla
                      </button>
      </div>
      </div>
      </div>
    </>
  );
}
