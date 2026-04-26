// Counter state types and action types
export type SayacAction =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' }
  | { type: 'INIT'; value: number };

export interface SayacState {
  deger: number;
  hata: string | null;
  yukleniyor: boolean;
}

export interface SayacContext {
  state: SayacState;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  onayDialogunuAc: () => void;
  onayDialogunuKapat: () => void;
  onaylaVeSifirla: () => void;
  hataTemizle: () => void;
  yenidenDene: () => void;
  onayGorunur: boolean;
}
