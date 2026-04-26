import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AnaSayacEkrani } from './AnaSayacEkrani';

const mockContext = {
  state: { deger: 7, hata: null, yukleniyor: false },
  increment: vi.fn(),
  decrement: vi.fn(),
  onayDialogunuAc: vi.fn(),
  onayDialogunuKapat: vi.fn(),
  onaylaVeSifirla: vi.fn(),
  hataTemizle: vi.fn(),
  yenidenDene: vi.fn(),
  onayGorunur: false,
};

describe('QA-FIX-001: AnaSayacEkrani accessibility', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('desktop header nav buttons have aria-label', () => {
    const { container } = render(<AnaSayacEkrani context={mockContext} />);
    // Desktop header is hidden in jsdom (md:flex), query directly
    const desktopHeader = container.querySelector('.hidden.md\\:flex');
    expect(desktopHeader).toBeTruthy();
    const buttons = desktopHeader!.querySelectorAll('button');
    expect(buttons.length).toBe(3);
    buttons.forEach((btn) => {
      expect(btn.getAttribute('aria-label')).toBeTruthy();
    });
    expect(buttons[0].getAttribute('aria-label')).toBe('Tally');
    expect(buttons[1].getAttribute('aria-label')).toBe('Logs');
    expect(buttons[2].getAttribute('aria-label')).toBe('Settings');
  });

  it('mobile header nav buttons have aria-label', () => {
    render(<AnaSayacEkrani context={mockContext} />);
    // Mobile header buttons are inside the md:hidden div
    const mobileButtons = screen.getAllByLabelText(/Logs|Settings/);
    expect(mobileButtons.length).toBeGreaterThanOrEqual(2);
  });

  it('action buttons have aria-label', () => {
    render(<AnaSayacEkrani context={mockContext} />);
    expect(screen.getByLabelText('Artır')).toBeInTheDocument();
    expect(screen.getByLabelText('Azalt')).toBeInTheDocument();
    expect(screen.getByLabelText('Sıfırla')).toBeInTheDocument();
  });

  it('Sıfırla button has min-h-[44px] class for touch target', () => {
    render(<AnaSayacEkrani context={mockContext} />);
    const sifirlaBtn = screen.getByLabelText('Sıfırla');
    expect(sifirlaBtn.className).toContain('min-h-[44px]');
    expect(sifirlaBtn.className).toContain('min-w-[44px]');
  });

  it('header nav buttons have min-h-[44px] class for touch target', () => {
    render(<AnaSayacEkrani context={mockContext} />);
    const tallyBtn = screen.getByLabelText('Tally');
    expect(tallyBtn.className).toContain('min-h-[44px]');
    expect(tallyBtn.className).toContain('min-w-[44px]');
  });

  it('bottom nav buttons have min-h-[44px] class for touch target', () => {
    render(<AnaSayacEkrani context={mockContext} />);
    // Bottom nav is inside a <nav> element
    const nav = document.querySelector('nav');
    expect(nav).toBeInTheDocument();
    const buttons = nav!.querySelectorAll('button');
    buttons.forEach((btn) => {
      expect(btn.className).toContain('min-h-[44px]');
      expect(btn.className).toContain('min-w-[44px]');
    });
  });

  it('renders the current counter value', () => {
    render(<AnaSayacEkrani context={mockContext} />);
    expect(screen.getByText('7')).toBeInTheDocument();
  });
});
