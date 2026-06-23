import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { profile } from '@core/constants';

@Component({
  selector: 'app-site-nav',
  templateUrl: './site-nav.html',
  styleUrl: './site-nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onScroll()',
  },
})
export class SiteNav {
  protected readonly profile = profile;
  protected readonly initials = (
    profile.firstName.charAt(0) + profile.lastName.charAt(0)
  ).toUpperCase();

  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  protected readonly links = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#pet-projects' },
    { label: 'Contact', href: '#contact' },
  ];

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 48);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
