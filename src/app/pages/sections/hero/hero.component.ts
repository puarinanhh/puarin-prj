import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { GlitchTextComponent } from '../../../shared/components/glitch-text/glitch-text.component';
import { NeonButtonComponent } from '../../../shared/components/neon-button/neon-button.component';
import { ParticleBackgroundComponent } from '../../../shared/components/particle-background/particle-background.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, GlitchTextComponent, NeonButtonComponent, ParticleBackgroundComponent],
  template: `
    <section id="hero" class="hero">
      <!-- Particle Background -->
      <app-particle-background
        [particleCount]="100"
        [connectionDistance]="150"
      ></app-particle-background>

      <!-- Cyber Grid -->
      <div class="cyber-grid"></div>

      <!-- Scan Line -->
      <div class="scan-line"></div>

      <!-- Content -->
      <div class="hero__content">
        <!-- Greeting -->
        <p class="hero__greeting animate-fade-in">
          <span class="bracket">&lt;</span>
          Hello, World! I'm
          <span class="bracket">/&gt;</span>
        </p>

        <!-- Name with Glitch -->
        <h1 class="hero__name">
          <app-glitch-text
            [text]="'PUARIN'"
            textClass="text-gradient"
            [active]="true"
          ></app-glitch-text>
        </h1>

        <!-- Typing Role -->
        <div class="hero__role">
          <span class="role-prefix">I'm a </span>
          <span class="role-text">{{ displayText }}<span class="cursor" [class.blink]="!isTyping">|</span></span>
        </div>

        <!-- Description -->
        <p class="hero__description">
          Crafting beautiful digital experiences with clean code and creative solutions.
          Passionate about building performant web applications with modern technologies.
        </p>

        <!-- CTA Buttons -->
        <div class="hero__cta">
          <app-neon-button
            variant="primary"
            (onClick)="scrollToSection('projects')"
          >
            View My Work
          </app-neon-button>
          <app-neon-button
            variant="outline"
            (onClick)="scrollToSection('contact')"
          >
            Get In Touch
          </app-neon-button>
        </div>

        <!-- Social Links -->
        <div class="hero__social">
          <a href="https://github.com/puarin" target="_blank" rel="noopener" class="social-link">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/puarin" target="_blank" rel="noopener" class="social-link">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="hero__scroll">
        <span>Scroll Down</span>
        <div class="scroll-icon">
          <div class="scroll-wheel"></div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background: linear-gradient(135deg, #0a0a0f 0%, #12121a 100%);
    }

    .cyber-grid {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image:
        linear-gradient(rgba(0, 245, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 245, 255, 0.03) 1px, transparent 1px);
      background-size: 50px 50px;
      pointer-events: none;
    }

    .scan-line {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, transparent, rgba(0, 245, 255, 0.3), transparent);
      animation: scanLine 8s linear infinite;
      pointer-events: none;
    }

    @keyframes scanLine {
      0% { top: -100%; }
      100% { top: 100%; }
    }

    .hero__content {
      position: relative;
      z-index: 10;
      text-align: center;
      padding: 2rem;
      max-width: 900px;
    }

    .hero__greeting {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1rem;
      color: #a1a1aa;
      margin-bottom: 1rem;
      opacity: 0;
      animation: fadeInUp 0.6s ease forwards;

      .bracket {
        color: #00f5ff;
      }
    }

    .hero__name {
      font-size: clamp(3rem, 12vw, 7rem);
      font-family: 'Orbitron', monospace;
      font-weight: 900;
      margin-bottom: 1rem;
      line-height: 1;
      opacity: 0;
      animation: fadeInUp 0.6s ease 0.2s forwards;
    }

    :host ::ng-deep .text-gradient {
      background: linear-gradient(135deg, #bf00ff 0%, #00f5ff 50%, #ff0080 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 200% auto;
      animation: gradientShift 3s ease infinite;
    }

    @keyframes gradientShift {
      0%, 100% { background-position: 0% center; }
      50% { background-position: 100% center; }
    }

    .hero__role {
      font-family: 'Orbitron', monospace;
      font-size: clamp(1.25rem, 3vw, 1.75rem);
      margin-bottom: 1.5rem;
      opacity: 0;
      animation: fadeInUp 0.6s ease 0.4s forwards;

      .role-prefix {
        color: #a1a1aa;
      }

      .role-text {
        color: #00f5ff;
        text-shadow: 0 0 20px rgba(0, 245, 255, 0.5);
      }

      .cursor {
        color: #00f5ff;
        font-weight: 100;

        &.blink {
          animation: blink 1s step-end infinite;
        }
      }
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    .hero__description {
      font-size: 1.125rem;
      color: #a1a1aa;
      max-width: 600px;
      margin: 0 auto 2rem;
      line-height: 1.8;
      opacity: 0;
      animation: fadeInUp 0.6s ease 0.6s forwards;
    }

    .hero__cta {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 2rem;
      opacity: 0;
      animation: fadeInUp 0.6s ease 0.8s forwards;
    }

    .hero__social {
      display: flex;
      gap: 1rem;
      justify-content: center;
      opacity: 0;
      animation: fadeInUp 0.6s ease 1s forwards;

      .social-link {
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #71717a;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        transition: all 0.3s ease;

        svg {
          width: 20px;
          height: 20px;
        }

        &:hover {
          color: #00f5ff;
          border-color: #00f5ff;
          transform: translateY(-3px);
          box-shadow: 0 0 20px rgba(0, 245, 255, 0.3);
        }
      }
    }

    .hero__scroll {
      position: absolute;
      bottom: 2rem;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      opacity: 0;
      animation: fadeIn 1s ease 1.5s forwards;

      span {
        font-family: 'Rajdhani', sans-serif;
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.2em;
        color: #71717a;
      }

      .scroll-icon {
        width: 24px;
        height: 40px;
        border: 2px solid rgba(0, 245, 255, 0.3);
        border-radius: 12px;
        position: relative;

        .scroll-wheel {
          width: 4px;
          height: 8px;
          background: #00f5ff;
          border-radius: 2px;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          animation: scrollWheel 2s ease-in-out infinite;
        }
      }
    }

    @keyframes scrollWheel {
      0%, 100% { opacity: 1; top: 8px; }
      50% { opacity: 0.3; top: 20px; }
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  roles = ['Fullstack Developer', 'Angular Specialist', 'UI/UX Enthusiast', 'Code Artisan'];
  currentRoleIndex = 0;
  displayText = '';
  isTyping = true;
  private typingSpeed = 100;
  private deletingSpeed = 50;
  private pauseTime = 2000;
  private timeoutId?: any;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.startTypingAnimation();
    }
  }

  private startTypingAnimation(): void {
    const currentRole = this.roles[this.currentRoleIndex];

    if (this.isTyping) {
      if (this.displayText.length < currentRole.length) {
        this.displayText = currentRole.substring(0, this.displayText.length + 1);
        this.timeoutId = setTimeout(() => this.startTypingAnimation(), this.typingSpeed);
      } else {
        this.isTyping = false;
        this.timeoutId = setTimeout(() => this.startTypingAnimation(), this.pauseTime);
      }
    } else {
      if (this.displayText.length > 0) {
        this.displayText = this.displayText.substring(0, this.displayText.length - 1);
        this.timeoutId = setTimeout(() => this.startTypingAnimation(), this.deletingSpeed);
      } else {
        this.isTyping = true;
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        this.timeoutId = setTimeout(() => this.startTypingAnimation(), 500);
      }
    }
  }

  scrollToSection(sectionId: string): void {
    if (!this.isBrowser) return;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnDestroy(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
