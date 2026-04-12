import { getRelativeLocaleUrl } from 'astro:i18n';

import type { Locale } from '../i18n';

export type LegalPageId = 'imprint' | 'privacy';

const legalPaths = {
  de: {
    imprint: 'impressum',
    privacy: 'datenschutz',
  },
  en: {
    imprint: 'imprint',
    privacy: 'privacy-policy',
  },
} as const satisfies Record<Locale, Record<LegalPageId, string>>;

export const getLegalPath = (locale: Locale, page: LegalPageId): string => legalPaths[locale][page];

export const getLegalHref = (locale: Locale, page: LegalPageId): string =>
  getRelativeLocaleUrl(locale, getLegalPath(locale, page));

export const getAlternateLegalHref = (locale: Locale, page: LegalPageId): string => {
  const alternateLocale: Locale = locale === 'de' ? 'en' : 'de';
  return getLegalHref(alternateLocale, page);
};
