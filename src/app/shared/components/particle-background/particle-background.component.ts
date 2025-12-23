import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  Input,
  PLATFORM_ID,
  Inject,
  NgZone
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

@Component({
  selector: 'app-particle-background',
  standalone: true,
  imports: [CommonModule],
  template: `
    <canvas
      #particleCanvas
      class="particle-canvas"
      [style.opacity]="opacity"
    ></canvas>
  `,
  styles: [`
    :host {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      z-index: 0;
    }

    .particle-canvas {
      width: 100%;
      height: 100%;
    }
  `]
})
export class ParticleBackgroundComponent implements AfterViewInit, OnDestroy {
  @ViewChild('particleCanvas') canvasRef!: ElementRef<HTMLCanvasElement>;

  @Input() particleCount = 80;
  @Input() connectionDistance = 120;
  @Input() particleSpeed = 0.5;
  @Input() opacity = 1;
  @Input() colors: string[] = ['#00f5ff', '#bf00ff', '#ff0080'];
  @Input() interactive = true;

  private ctx!: CanvasRenderingContext2D | null;
  private particles: Particle[] = [];
  private animationId!: number;
  private mousePosition = { x: -1000, y: -1000 };
  private isBrowser: boolean;
  private resizeObserver?: ResizeObserver;

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private ngZone: NgZone
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) return;

    this.initCanvas();
    this.createParticles();
    this.setupEventListeners();

    this.ngZone.runOutsideAngular(() => {
      this.animate();
    });
  }

  private initCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d');
    this.resizeCanvas();

    this.resizeObserver = new ResizeObserver(() => {
      this.resizeCanvas();
    });
    this.resizeObserver.observe(canvas.parentElement!);
  }

  private resizeCanvas(): void {
    const canvas = this.canvasRef.nativeElement;
    const parent = canvas.parentElement;
    if (parent) {
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    }
  }

  private createParticles(): void {
    const canvas = this.canvasRef.nativeElement;
    this.particles = [];

    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * this.particleSpeed,
        vy: (Math.random() - 0.5) * this.particleSpeed,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: this.colors[Math.floor(Math.random() * this.colors.length)]
      });
    }
  }

  private setupEventListeners(): void {
    if (!this.interactive) return;

    const canvas = this.canvasRef.nativeElement;

    canvas.parentElement?.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      this.mousePosition.x = e.clientX - rect.left;
      this.mousePosition.y = e.clientY - rect.top;
    });

    canvas.parentElement?.addEventListener('mouseleave', () => {
      this.mousePosition.x = -1000;
      this.mousePosition.y = -1000;
    });
  }

  private animate = (): void => {
    if (!this.ctx) return;

    const canvas = this.canvasRef.nativeElement;
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    this.particles.forEach((particle, i) => {
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Boundary check
      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

      // Mouse interaction
      if (this.interactive) {
        const dx = this.mousePosition.x - particle.x;
        const dy = this.mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx -= (dx / distance) * force * 0.5;
          particle.vy -= (dy / distance) * force * 0.5;
        }
      }

      // Draw particle
      this.ctx!.beginPath();
      this.ctx!.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      this.ctx!.fillStyle = particle.color;
      this.ctx!.globalAlpha = particle.opacity;
      this.ctx!.fill();

      // Draw connections
      for (let j = i + 1; j < this.particles.length; j++) {
        const other = this.particles[j];
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.connectionDistance) {
          this.ctx!.beginPath();
          this.ctx!.moveTo(particle.x, particle.y);
          this.ctx!.lineTo(other.x, other.y);
          this.ctx!.strokeStyle = particle.color;
          this.ctx!.globalAlpha = (1 - distance / this.connectionDistance) * 0.2;
          this.ctx!.lineWidth = 0.5;
          this.ctx!.stroke();
        }
      }
    });

    this.ctx.globalAlpha = 1;
    this.animationId = requestAnimationFrame(this.animate);
  };

  ngOnDestroy(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}
