import { ChangeDetectionStrategy, Component } from '@angular/core';

import { stack } from '@core/constants';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.html',
  styleUrl: './marquee.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Marquee {
  /** Duplicated list => seamless -50% loop. */
  protected readonly items = [...stack, ...stack];
}
