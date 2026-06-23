import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  inject,
} from '@angular/core';

import { profile } from '@core/constants';

interface FloatToken {
  text: string;
  top: number;
  left: number;
  size: number;
  depth: number;
  rotate: number;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly profile = profile;

  protected readonly tokens: FloatToken[] = [
    { text: '</>', top: 18, left: 8, size: 2.4, depth: 26, rotate: -8 },
    { text: '{ }', top: 70, left: 7, size: 2, depth: 40, rotate: 6 },
    { text: 'const', top: 30, left: 82, size: 1.4, depth: 18, rotate: 4 },
    { text: '=>', top: 62, left: 88, size: 2.6, depth: 34, rotate: -5 },
    { text: 'TS', top: 80, left: 72, size: 1.8, depth: 22, rotate: 8 },
    { text: 'signal', top: 12, left: 64, size: 1.3, depth: 14, rotate: -3 },
  ];

  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly reducedMotion =
    typeof matchMedia === 'function' &&
    matchMedia('(prefers-reduced-motion: reduce)').matches;
  private frame = 0;

  @HostListener('pointermove', ['$event'])
  protected onPointerMove(event: PointerEvent): void {
    if (this.reducedMotion || event.pointerType === 'touch') return;
    if (this.frame) return; // throttle to one update per animation frame

    this.frame = requestAnimationFrame(() => {
      const node = this.el.nativeElement;
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      node.style.setProperty('--mx', x.toFixed(3));
      node.style.setProperty('--my', y.toFixed(3));
      this.frame = 0;
    });
  }
}
