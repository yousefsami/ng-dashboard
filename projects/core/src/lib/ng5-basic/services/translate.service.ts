import { Injectable } from '@angular/core';

@Injectable()
export class TranslateService {
  private lang = 'en';
  private langs = {};
  setTranslation(lang: string, translation: any) {
    this.langs[lang] = translation;
  }
  use(lang: string) {
    this.lang = lang;
  }
  setDefaultLang(lang: string) {
    this.lang = lang;
  }
  instant(key: string): string {
    const val = this.langs[this.lang][key];
    return val ? val : key;
  }
  get currentLang() {
    return this.lang;
  }
}
