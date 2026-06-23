import { ChangeDetectionStrategy, Component } from '@angular/core';

import { About } from './sections/about/about';
import { Experience } from './sections/experience/experience';
import { Hero } from './sections/hero/hero';
import { Marquee } from './sections/marquee/marquee';
import { ProjectGrid } from './sections/project-grid/project-grid';
import { SiteFooter } from './sections/site-footer/site-footer';
import { SiteNav } from './sections/site-nav/site-nav';
import { petProjects } from '@core/constants';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
  imports: [SiteNav, Hero, About, Experience, ProjectGrid, Marquee, SiteFooter],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Landing {
  protected readonly petProjects = petProjects;
}
