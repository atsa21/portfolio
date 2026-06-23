import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { RevealDirective } from '@shared/directives/reveal.directive';
import { profile, skills } from '@core/constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly profile = profile;
  protected readonly skills = skills;

  /** Falls back to an initials placeholder until the photo file exists. */
  protected readonly photoMissing = signal(false);
  protected readonly initials = (
    profile.firstName.charAt(0) + profile.lastName.charAt(0)
  ).toUpperCase();
}
