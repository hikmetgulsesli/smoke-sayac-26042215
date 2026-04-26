import { useEffect } from 'react';
import { useCounter } from './hooks/useCounter';
import { AnaSayacEkrani } from './screens/AnaSayacEkrani';
import { YuklemeEkrani } from './screens/YuklemeEkrani';
import { HataDurumuEkrani } from './screens/HataDurumuEkrani';
import { SifirlamaOnayDiyalogu } from './screens/SifirlamaOnayDiyalogu';

export default function App() {
  const counter = useCounter();

  useEffect(() => {
    (window as unknown as Record<string, unknown>).app = {
      state: counter.state,
      counter: {
        value: counter.state.deger,
        error: counter.state.hata,
      },
    };
  }, [counter.state]);

  if (counter.state.yukleniyor) {
    return (
      <div className="min-h-screen bg-background text-on-surface">
        <YuklemeEkrani />
      </div>
    );
  }

  if (counter.state.hata) {
    return (
      <div className="min-h-screen bg-background text-on-surface">
        <HataDurumuEkrani context={counter} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col">
      <AnaSayacEkrani context={counter} />
      {counter.onayGorunur && <SifirlamaOnayDiyalogu context={counter} />}
    </div>
  );
}
