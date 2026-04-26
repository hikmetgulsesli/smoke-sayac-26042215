import '@testing-library/jest-dom';
import { beforeEach } from 'vitest';

// jsdom localStorage mock cleanup
beforeEach(() => {
  localStorage.clear();
});
