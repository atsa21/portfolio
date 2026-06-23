import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RevealDirective } from '@shared/directives/reveal.directive';
import { education, workExperience } from '@core/constants';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  protected readonly roles = workExperience;
  protected readonly education = education;

  /** Total project count across all companies — derived once from static data. */
  protected readonly projectCount = this.roles.reduce(
    (total, role) => total + role.projects.length,
    0,
  );
}
