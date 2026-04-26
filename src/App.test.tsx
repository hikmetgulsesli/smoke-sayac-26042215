import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

// Mock useCounter to control state
const mockIncrement = vi.fn();
const mockDecrement = vi.fn();
const mockOnayDialogunuAc = vi.fn();
const mockOnayDialogunuKapat = vi.fn();
const mockOnaylaVeSifirla = vi.fn();
const mockHataTemizle = vi.fn();
const mockYenidenDene = vi.fn();

let mockState: { deger: number; hata: string | null; yukleniyor: boolean } = { deger: 5, hata: null, yukleniyor: false };
let mockOnayGorunur = false;

vi.mock('./hooks/useCounter', () => ({
  useCounter: () => ({
    state: mockState,
    increment: mockIncrement,
    decrement: mockDecrement,
    onayDialogunuAc: mockOnayDialogunuAc,
    onayDialogunuKapat: mockOnayDialogunuKapat,
    onaylaVeSifirla: mockOnaylaVeSifirla,
    hataTemizle: mockHataTemizle,
    yenidenDene: mockYenidenDene,
    onayGorunur: mockOnayGorunur,
  }),
}));

describe('QA-FIX-001: window.app exposure', () => {
  beforeEach(() => {
    mockState = { deger: 5, hata: null, yukleniyor: false };
    mockOnayGorunur = false;
    // @ts-expect-error clearing window.app for clean test state
    window.app = undefined;
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('exposes window.app with state and counter shape', () => {
    render(<App />);
    // @ts-expect-error window.app is dynamically typed
    expect(window.app).toBeDefined();
    // @ts-expect-error window.app is dynamically typed
    expect(window.app.state).toEqual(mockState);
    // @ts-expect-error window.app is dynamically typed
    expect(window.app.counter).toEqual({ value: 5, error: null });
  });

  it('updates window.app when counter state changes', () => {
    render(<App />);
    mockState = { deger: 10, hata: 'test error', yukleniyor: false };
    // Re-render to trigger useEffect
    const { rerender } = render(<App />);
    rerender(<App />);
    // @ts-expect-error window.app is dynamically typed
    expect(window.app.counter).toEqual({ value: 10, error: 'test error' });
  });

  it('exposes window.app even during loading state', () => {
    mockState = { deger: 0, hata: null, yukleniyor: true };
    render(<App />);
    // @ts-expect-error window.app is dynamically typed
    expect(window.app).toBeDefined();
    // @ts-expect-error window.app is dynamically typed
    expect(window.app.state.yukleniyor).toBe(true);
  });

  it('exposes window.app even during error state', () => {
    mockState = { deger: 0, hata: 'localStorage erişim hatası oluştu.', yukleniyor: false };
    render(<App />);
    // @ts-expect-error window.app is dynamically typed
    expect(window.app).toBeDefined();
    // @ts-expect-error window.app is dynamically typed
    expect(window.app.counter.error).toBe('localStorage erişim hatası oluştu.');
  });
});
