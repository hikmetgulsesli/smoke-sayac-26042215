// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Hata Durumu Ekranı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

import type { SayacContext } from '../types/counter';

interface HataDurumuEkraniProps {
  context: SayacContext;
}

export function HataDurumuEkrani({ context }: HataDurumuEkraniProps) {
  const { hataTemizle, yenidenDene } = context;
  return (
    <>
      {/*  Main Content Canvas  */}
      <main className="flex-1 flex items-center justify-center p-6 sm:p-8">
      {/*  Error Container: Glassmorphism / Monolith Style  */}
      <div className="relative w-full max-w-md bg-[var(--color-surface-container-highest)] rounded-xl p-8 sm:p-10 flex flex-col items-center text-center shadow-[0_0_60px_color-mix(in_srgb,var(--color-secondary-container)_15%,transparent)] ring-1 ring-[var(--color-outline-variant)]/15 overflow-hidden">
      {/*  Ambient Glow Effect behind the card content  */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[var(--color-error-container)] rounded-full blur-[80px] opacity-30 pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[var(--color-error-container)] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>
      {/*  Error Icon Header  */}
      <div className="relative z-10 mb-8 mt-4">
      <div className="w-24 h-24 rounded-full bg-[var(--color-surface-container)] flex items-center justify-center ring-1 ring-[var(--color-outline-variant)]/20 shadow-[0_10px_30px_color-mix(in_srgb,var(--color-secondary-container)_20%,transparent)]">
      <span className="material-symbols-outlined text-5xl text-[var(--color-error)] icon-bold" data-icon="error_outline">error_outline</span>
      </div>
      </div>
      {/*  Typography Structure  */}
      <div className="relative z-10 w-full space-y-4">
      <h1 className="font-display font-black tracking-tight text-3xl sm:text-4xl text-[var(--color-on-surface)]">
                          Hata
                      </h1>
      <div className="h-px w-12 bg-[var(--color-error-container)] mx-auto rounded-full my-6 opacity-50"></div>
      <p className="font-body text-base sm:text-lg text-[var(--color-on-surface-variant)] leading-relaxed px-4">
                          Depolamadan değer okunamadı. <br className="hidden sm:block" />
      <span className="text-[var(--color-error)] font-medium">Sayaç varsayılan değerle açılıyor.</span>
      </p>
      </div>
      {/*  Action Area  */}
      <div className="relative z-10 w-full mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
      {/*  Primary Action (Continue)  */}
      <button onClick={hataTemizle} className="w-full sm:w-auto px-8 py-4 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-container)] text-[var(--color-on-primary-container)] font-headline font-bold rounded-lg tracking-wide hover:brightness-125 active:scale-95 transition-transform duration-150 shadow-[0_0_20px_color-mix(in_srgb,var(--color-primary-container)_20%,transparent)] cursor-pointer">
                          Devam Et
                      </button>
      {/*  Secondary Action (Retry)  */}
      <button onClick={yenidenDene} className="w-full sm:w-auto px-8 py-4 bg-[var(--color-surface-container)] text-[var(--color-on-surface-variant)] font-headline font-medium rounded-lg tracking-wide hover:bg-[var(--color-surface-container-high)] hover:text-[var(--color-on-surface)] ring-1 ring-[var(--color-outline-variant)]/20 active:scale-95 transition-transform duration-150 cursor-pointer">
                          Yeniden Dene
                      </button>
      </div>
      </div>
      </main>
    </>
  );
}
