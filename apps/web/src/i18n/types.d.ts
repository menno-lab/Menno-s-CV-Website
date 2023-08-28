import { languages } from './utils/constants';

export type Language = (typeof languages)[number];
export type NameSpace = 'common';

export interface LanguageDetails {
    name: string;
    nativeName: string;
}

export type LanguageMap = Record<Language, LanguageDetails>;
