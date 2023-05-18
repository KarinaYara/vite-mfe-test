import {atom} from 'jotai';

export type Language = 'en' | 'de';

export const languageAtom = atom<Language>('en');