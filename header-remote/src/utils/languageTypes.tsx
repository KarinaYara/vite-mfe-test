export const languages = ['en', 'de'] as const;
export type Language = (typeof languages)[number];

export interface AppComponentProps {
    language?: Language;
}