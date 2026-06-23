import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { RevealDirective } from '@shared/directives/reveal.directive';
import { Project } from '@core/models';

@Component({
  selector: 'app-project-grid',
  templateUrl: './project-grid.html',
  styleUrl: './project-grid.scss',
  imports: [RevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectGrid {
  readonly sectionId = input.required<string>();
  readonly eyebrow = input.required<string>();
  readonly titleLead = input.required<string>();
  readonly titleAccent = input.required<string>();
  readonly projects = input.required<Project[]>();
  readonly countNoun = input<string>('projects');

  protected indexLabel(i: number): string {
    return (i + 1).toString().padStart(2, '0');
  }
}
