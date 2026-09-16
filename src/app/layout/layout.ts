import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Intro } from '../features/intro/intro';
import { Profile } from '../features/profile/profile';

@Component({
  selector: 'app-layout',
  imports: [RouterLink, RouterOutlet, Intro, Profile],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  readonly menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
