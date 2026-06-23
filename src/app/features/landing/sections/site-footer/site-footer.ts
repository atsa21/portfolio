import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RevealDirective } from '@shared/directives/reveal.directive';
import { profile, socials } from '@core/constants';

@Component({
  selector: 'app-site-footer',
  templateUrl: './site-footer.html',
  styleUrl: './site-footer.scss',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooter {
  protected readonly profile = profile;
  protected readonly socials = socials;
  protected readonly year = 2026;
}
