import {
  Directive,
  ElementRef,
  inject,
  input,
  numberAttribute,
  OnDestroy,
  OnInit,
} from '@angular/core';

/**
 * Scroll-reveal: fades/slides the host element in when it scrolls into view.
 *
 * Usage:  <div appReveal>...</div>
 *         <div [appReveal]="120">...</div>   // 120ms enter delay (stagger)
 *
 * Honours `prefers-reduced-motion` (shows content immediately, no transition)
 * and falls back gracefully where IntersectionObserver is unavailable.
 */
@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements OnInit, OnDestroy {
  /** Enter delay in ms, for staggering sibling elements. */
  readonly delay = input(0, {
    alias: 'appReveal',
    transform: (value: unknown) => numberAttribute(value, 0),
  });

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const el = this.host.nativeElement;
    el.classList.add('reveal');
    el.style.setProperty('--reveal-delay', `${this.delay()}ms`);

    const prefersReduced =
      typeof matchMedia === 'function' &&
      matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );

    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
