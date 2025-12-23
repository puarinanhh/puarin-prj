import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
  Inject,
  Renderer2
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;
  @Input() revealDirection: 'up' | 'down' | 'left' | 'right' | 'scale' = 'up';
  @Input() revealDistance = '30px';
  @Input() revealDuration = '0.6s';
  @Input() revealThreshold = 0.1;

  private observer!: IntersectionObserver;
  private isBrowser: boolean;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;

    this.setupInitialStyles();
    this.createObserver();
  }

  private setupInitialStyles(): void {
    const el = this.el.nativeElement;

    this.renderer.setStyle(el, 'opacity', '0');
    this.renderer.setStyle(el, 'transition', `opacity ${this.revealDuration} ease, transform ${this.revealDuration} ease`);
    this.renderer.setStyle(el, 'transitionDelay', `${this.revealDelay}ms`);

    switch (this.revealDirection) {
      case 'up':
        this.renderer.setStyle(el, 'transform', `translateY(${this.revealDistance})`);
        break;
      case 'down':
        this.renderer.setStyle(el, 'transform', `translateY(-${this.revealDistance})`);
        break;
      case 'left':
        this.renderer.setStyle(el, 'transform', `translateX(${this.revealDistance})`);
        break;
      case 'right':
        this.renderer.setStyle(el, 'transform', `translateX(-${this.revealDistance})`);
        break;
      case 'scale':
        this.renderer.setStyle(el, 'transform', 'scale(0.9)');
        break;
    }
  }

  private createObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.reveal();
            this.observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: this.revealThreshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  private reveal(): void {
    const el = this.el.nativeElement;
    this.renderer.setStyle(el, 'opacity', '1');
    this.renderer.setStyle(el, 'transform', 'translateY(0) translateX(0) scale(1)');
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
