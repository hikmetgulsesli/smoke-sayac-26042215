// Counter state types and action types
export type SayacAction =
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' }
  | { type: 'INIT'; value: number }
  | { type: 'ERROR'; message: string };

export interface SayacState {
  deger: number;
  hata: string | null;
  yukleniyor: boolean;
}

export interface SayacContext {
  state: SayacState;
  increment: () => void;
  decrement: () => void;
  onayDialogunuAc: () => void;
  onayDialogunuKapat: () => void;
  onaylaVeSifirla: () => void;
  hataTemizle: () => void;
  yenidenDene: () => void;
  onayGorunur: boolean;
}
