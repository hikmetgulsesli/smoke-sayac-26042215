const STORAGE_KEY = 'sayac-degeri';

export function sayaciOku(): number | null {
  try {
    const kayitli = localStorage.getItem(STORAGE_KEY);
    if (kayitli === null) return null;
    const parsed = parseInt(kayitli, 10);
    if (isNaN(parsed)) return null;
    return parsed;
  } catch (_e) {
    // localStorage erişilemez veya parse hatası
    throw new Error('Depolamadan değer okunamadı');
  }
}

export function sayaciYaz(deger: number): void {
  try {
    localStorage.setItem(STORAGE_KEY, String(deger));
  } catch (_e) {
    throw new Error('Değer kaydedilemedi');
  }
}

export function sayaciSil(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (_e) {
    throw new Error('Değer silinemedi');
  }
}
