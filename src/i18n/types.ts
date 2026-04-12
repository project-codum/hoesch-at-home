import type { CollectionEntry } from 'astro:content';

export const locales = ['en', 'de'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'de';

export type HomeContent = CollectionEntry<'home'>['data'];

export type CalendarContent = {
  metaTitle: string;
  metaDescription?: string;
  eyebrow: string;
};

export type LegalBlock =
  | {
      type: 'paragraph';
      html: string;
    }
  | {
      type: 'list';
      items: string[];
    };

export type LegalSection = {
  heading: string;
  blocks: LegalBlock[];
};

export type LegalPageContent = {
  metaTitle: string;
  metaDescription?: string;
  eyebrow: string;
  heading: string;
  sections: LegalSection[];
};

export type LegalContent = {
  imprint: LegalPageContent;
  privacy: LegalPageContent;
};

export type LocaleStrings = {
  home: HomeContent;
  calendar: CalendarContent;
  legal: LegalContent;
};
