import { Component, ElementRef, HostListener, signal } from '@angular/core';
import { Intro } from '../features/intro/intro';
import { Profile } from '../features/profile/profile';
import { Capabilities } from '../features/capabilities/capabilities';
import { Work } from '../features/work/work';
import { System } from '../features/system/system';
import { Journey } from '../features/journey/journey';
import { About } from '../features/about/about';
import { Contact } from '../features/contact/contact';
import { Translation, LANGUAGES, Lang } from '../core/translation';

@Component({
  selector: 'app-layout',
  imports: [Intro, Profile, Capabilities, Work, System, Journey, About, Contact],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  readonly menuOpen = signal(false);
  readonly langMenuOpen = signal(false);
  readonly languages = LANGUAGES;

  constructor(
    public translation: Translation,
    private elementRef: ElementRef<HTMLElement>,
  ) {}

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
    this.langMenuOpen.set(false);
  }

  toggleLangMenu(): void {
    this.langMenuOpen.update((open) => !open);
  }

  selectLanguage(lang: Lang): void {
    this.translation.setLanguage(lang);
    this.langMenuOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.langMenuOpen()) return;
    if (!this.elementRef.nativeElement.contains(event.target as Node)) {
      this.langMenuOpen.set(false);
      return;
    }
    const target = event.target as HTMLElement;
    if (!target.closest('.header__lang')) {
      this.langMenuOpen.set(false);
    }
  }
}
