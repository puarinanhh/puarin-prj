import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
  Inject,
  Renderer2,
  NgZone
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appTilt]',
  standalone: true
})
export class TiltDirective implements OnInit, OnDestroy {
  @Input() tiltMaxX = 15;
  @Input() tiltMaxY = 15;
  @Input() tiltScale = 1.02;
  @Input() tiltSpeed = 300;
  @Input() tiltGlare = true;
  @Input() tiltGlareOpacity = 0.2;

  private isBrowser: boolean;
  private glareElement?: HTMLElement;
  private boundMouseEnter = this.onMouseEnter.bind(this);
  private boundMouseMove = this.onMouseMove.bind(this);
  private boundMouseLeave = this.onMouseLeave.bind(this);

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private ngZone: NgZone,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;

    this.setupElement();
    this.setupEventListeners();
  }

  private setupElement(): void {
    const el = this.el.nativeElement;

    this.renderer.setStyle(el, 'transformStyle', 'preserve-3d');
    this.renderer.setStyle(el, 'transition', `transform ${this.tiltSpeed}ms ease-out`);

    if (this.tiltGlare) {
      this.createGlareElement();
    }
  }

  private createGlareElement(): void {
    const el = this.el.nativeElement;

    this.renderer.setStyle(el, 'position', 'relative');
    this.renderer.setStyle(el, 'overflow', 'hidden');

    this.glareElement = this.renderer.createElement('div');
    this.renderer.setStyle(this.glareElement, 'position', 'absolute');
    this.renderer.setStyle(this.glareElement, 'top', '0');
    this.renderer.setStyle(this.glareElement, 'left', '0');
    this.renderer.setStyle(this.glareElement, 'width', '100%');
    this.renderer.setStyle(this.glareElement, 'height', '100%');
    this.renderer.setStyle(this.glareElement, 'pointerEvents', 'none');
    this.renderer.setStyle(this.glareElement, 'background', 'linear-gradient(135deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 60%, rgba(255,255,255,0) 100%)');
    this.renderer.setStyle(this.glareElement, 'backgroundSize', '200% 200%');
    this.renderer.setStyle(this.glareElement, 'backgroundPosition', '0% 0%');
    this.renderer.setStyle(this.glareElement, 'opacity', '0');
    this.renderer.setStyle(this.glareElement, 'transition', 'opacity 0.3s ease');
    this.renderer.setStyle(this.glareElement, 'borderRadius', 'inherit');

    this.renderer.appendChild(el, this.glareElement);
  }

  private setupEventListeners(): void {
    const el = this.el.nativeElement;

    this.ngZone.runOutsideAngular(() => {
      el.addEventListener('mouseenter', this.boundMouseEnter);
      el.addEventListener('mousemove', this.boundMouseMove);
      el.addEventListener('mouseleave', this.boundMouseLeave);
    });
  }

  private onMouseEnter(): void {
    const el = this.el.nativeElement;
    this.renderer.setStyle(el, 'transition', 'none');

    if (this.glareElement) {
      this.renderer.setStyle(this.glareElement, 'opacity', this.tiltGlareOpacity.toString());
    }
  }

  private onMouseMove(e: MouseEvent): void {
    const el = this.el.nativeElement;
    const rect = el.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -this.tiltMaxX;
    const rotateY = ((x - centerX) / centerX) * this.tiltMaxY;

    this.renderer.setStyle(
      el,
      'transform',
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${this.tiltScale}, ${this.tiltScale}, ${this.tiltScale})`
    );

    if (this.glareElement) {
      const glareX = (x / rect.width) * 100;
      const glareY = (y / rect.height) * 100;
      this.renderer.setStyle(this.glareElement, 'backgroundPosition', `${glareX}% ${glareY}%`);
    }
  }

  private onMouseLeave(): void {
    const el = this.el.nativeElement;

    this.renderer.setStyle(el, 'transition', `transform ${this.tiltSpeed}ms ease-out`);
    this.renderer.setStyle(el, 'transform', 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');

    if (this.glareElement) {
      this.renderer.setStyle(this.glareElement, 'opacity', '0');
    }
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) return;

    const el = this.el.nativeElement;
    el.removeEventListener('mouseenter', this.boundMouseEnter);
    el.removeEventListener('mousemove', this.boundMouseMove);
    el.removeEventListener('mouseleave', this.boundMouseLeave);

    if (this.glareElement) {
      this.renderer.removeChild(el, this.glareElement);
    }
  }
}
