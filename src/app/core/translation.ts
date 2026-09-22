import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type Lang = 'en' | 'de' | 'es' | 'it' | 'nl';

export const LANGUAGES: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'de', label: 'DE' },
  { code: 'es', label: 'ES' },
  { code: 'it', label: 'IT' },
  { code: 'nl', label: 'NL' },
];

@Injectable({
  providedIn: 'root',
})
export class Translation {
  private translations = signal<Record<string, unknown>>({});
  currentLang = signal<Lang>('en');

  constructor(private http: HttpClient) {
    this.loadTranslations('en');
  }

  setLanguage(lang: Lang): void {
    if (lang === this.currentLang()) return;
    this.currentLang.set(lang);
    this.loadTranslations(lang);
  }

  private loadTranslations(lang: Lang): void {
    this.http.get<Record<string, unknown>>(`i18n/${lang}.json`).subscribe((data) => {
      this.translations.set(data);
    });
  }

  translate(key: string): string {
    const keys = key.split('.');
    let result: unknown = this.translations();

    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = (result as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }

    return typeof result === 'string' ? result : key;
  }
}
