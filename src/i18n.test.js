import { describe, expect, it } from 'vitest';
import i18n from './i18n';

describe('interface translations', () => {
  it('provides English and Kinyarwanda text for key actions', () => {
    expect(i18n.getResource('en', 'translation', 'reportWaste')).toBe('Report a problem');
    expect(i18n.getResource('rw', 'translation', 'reportWaste')).toBe('Tanga ikibazo');
    expect(i18n.getResource('rw', 'translation', 'signIn')).toBe('Injira');
  });
});
