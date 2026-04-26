import { useReducer, useCallback, useEffect, useState } from 'react';
import type { SayacState, SayacAction } from '../types/counter';
import { sayaciOku, sayaciYaz } from '../utils/storage';

function sayacReducer(state: SayacState, action: SayacAction): SayacState {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, deger: state.deger + 1, hata: null };
    case 'DECREMENT':
      return { ...state, deger: state.deger - 1, hata: null };
    case 'RESET':
      return { ...state, deger: 0, hata: null };
    case 'INIT':
      return { ...state, deger: action.value, yukleniyor: false, hata: null };
    default:
      return state;
  }
}

const initialState: SayacState = {
  deger: 0,
  hata: null,
  yukleniyor: true,
};

export function useCounter() {
  const [state, dispatch] = useReducer(sayacReducer, initialState);
  const [onayGorunur, setOnayGorunur] = useState(false);

  // İlk yükleme: localStorage'dan oku
  useEffect(() => {
    try {
      const kayitli = sayaciOku();
      if (kayitli !== null) {
        dispatch({ type: 'INIT', value: kayitli });
      } else {
        dispatch({ type: 'INIT', value: 0 });
      }
    } catch (_e) {
      dispatch({ type: 'INIT', value: 0 });
    }
  }, []);

  // Her değişiklikte localStorage'a yaz
  useEffect(() => {
    if (!state.yukleniyor && state.hata === null) {
      try {
        sayaciYaz(state.deger);
      } catch (_e) {
        // Hata durumunda sessizce devam et
      }
    }
  }, [state.deger, state.yukleniyor, state.hata]);

  const increment = useCallback(() => {
    dispatch({ type: 'INCREMENT' });
  }, []);

  const decrement = useCallback(() => {
    dispatch({ type: 'DECREMENT' });
  }, []);

  const onayDialogunuAc = useCallback(() => {
    setOnayGorunur(true);
  }, []);

  const onayDialogunuKapat = useCallback(() => {
    setOnayGorunur(false);
  }, []);

  const onaylaVeSifirla = useCallback(() => {
    dispatch({ type: 'RESET' });
    setOnayGorunur(false);
  }, []);

  const hataTemizle = useCallback(() => {
    dispatch({ type: 'INIT', value: 0 });
  }, []);

  const yenidenDene = useCallback(() => {
    try {
      const kayitli = sayaciOku();
      dispatch({ type: 'INIT', value: kayitli ?? 0 });
    } catch (_e) {
      dispatch({ type: 'INIT', value: 0 });
    }
  }, []);

  return {
    state,
    increment,
    decrement,
    reset: onaylaVeSifirla,
    onayDialogunuAc,
    onayDialogunuKapat,
    onaylaVeSifirla,
    hataTemizle,
    yenidenDene,
    onayGorunur,
  };
}
