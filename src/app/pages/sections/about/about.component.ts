import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeonCardComponent } from '../../../shared/components/neon-card/neon-card.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

interface Stat {
  value: string;
  label: string;
  color: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, NeonCardComponent, RevealDirective],
  template: `
    <section id="about" class="about section">
      <div class="container">
        <!-- Section Title -->
        <div class="about__header" appReveal>
          <h2 class="section-title">About Me</h2>
          <p class="section-subtitle">
            Get to know me better - my background, passion, and what drives me as a developer.
          </p>
        </div>

        <div class="about__content">
          <!-- Profile Image -->
          <div class="about__image" appReveal [revealDirection]="'left'" [revealDelay]="200">
            <div class="image-wrapper">
              <div class="image-border"></div>
              <div class="image-placeholder">
                <span class="avatar-text">P</span>
              </div>
              <!-- Decorative Elements -->
              <div class="decorator decorator--1"></div>
              <div class="decorator decorator--2"></div>
            </div>
          </div>

          <!-- About Text -->
          <div class="about__text">
            <div appReveal [revealDirection]="'right'" [revealDelay]="300">
              <h3 class="about__greeting">
                Hi there! <span class="wave">&#x1F44B;</span>
              </h3>

              <p>
                I'm a <span class="highlight">Fullstack Developer</span> based in Vietnam with a passion
                for creating beautiful, functional, and user-centered digital experiences. With expertise
                in both frontend and backend technologies, I bring ideas to life through clean code and
                creative problem-solving.
              </p>

              <p>
                My journey in web development started several years ago, and since then, I've had the
                privilege of working on diverse projects - from building enterprise applications to
                crafting interactive web experiences. I specialize in <span class="highlight">Angular</span>,
                <span class="highlight">TypeScript</span>, and <span class="highlight">Node.js</span>,
                always staying curious about new technologies and best practices.
              </p>

              <p>
                When I'm not coding, you'll find me exploring new anime series, gaming, or experimenting
                with new tech stacks. I believe in continuous learning and pushing the boundaries of
                what's possible on the web.
              </p>
            </div>

            <!-- Stats -->
            <div class="about__stats" appReveal [revealDelay]="500">
              <div *ngFor="let stat of stats" class="stat-item">
                <span class="stat-value" [style.color]="stat.color">{{ stat.value }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            </div>

            <!-- Tech Tags -->
            <div class="about__tags" appReveal [revealDelay]="600">
              <span *ngFor="let tech of technologies" class="tag">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      background: linear-gradient(180deg, #0f1f1d 0%, #162b28 100%);
      position: relative;
    }

    .about__header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .about__content {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;
      align-items: center;

      @media (min-width: 1024px) {
        grid-template-columns: 1fr 1.5fr;
        gap: 4rem;
      }
    }

    .about__image {
      display: flex;
      justify-content: center;

      .image-wrapper {
        position: relative;
        width: 280px;
        height: 280px;

        @media (min-width: 768px) {
          width: 320px;
          height: 320px;
        }
      }

      .image-border {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 2px solid transparent;
        border-radius: 20px;
        background: linear-gradient(135deg, #6ec2a8 0%, #b8ffe6 100%) border-box;
        -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
        mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
        animation: borderRotate 4s linear infinite;
      }

      .image-placeholder {
        position: absolute;
        top: 10px;
        left: 10px;
        right: 10px;
        bottom: 10px;
        background: linear-gradient(135deg, #223834 0%, #162b28 100%);
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;

        .avatar-text {
          font-family: 'Bebas Neue', monospace;
          font-size: 6rem;
          font-weight: 900;
          background: linear-gradient(135deg, #6ec2a8 0%, #b8ffe6 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      .decorator {
        position: absolute;
        border-radius: 50%;
        pointer-events: none;

        &--1 {
          width: 60px;
          height: 60px;
          background: rgba(184, 255, 230, 0.1);
          border: 1px solid rgba(184, 255, 230, 0.3);
          top: -20px;
          right: -20px;
          animation: float 6s ease-in-out infinite;
        }

        &--2 {
          width: 40px;
          height: 40px;
          background: rgba(110, 194, 168, 0.1);
          border: 1px solid rgba(110, 194, 168, 0.3);
          bottom: -10px;
          left: -10px;
          animation: float 6s ease-in-out infinite 1s;
        }
      }
    }

    @keyframes borderRotate {
      0%, 100% {
        filter: hue-rotate(0deg);
      }
      50% {
        filter: hue-rotate(30deg);
      }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }

    .about__text {
      h3 {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
        color: white;

        .wave {
          display: inline-block;
          animation: wave 2.5s ease-in-out infinite;
          transform-origin: 70% 70%;
        }
      }

      p {
        color: #b6d8cc;
        line-height: 1.8;
        margin-bottom: 1.25rem;
        font-size: 1.05rem;

        .highlight {
          color: #b8ffe6;
          font-weight: 600;
        }
      }
    }

    @keyframes wave {
      0%, 100% { transform: rotate(0deg); }
      10% { transform: rotate(14deg); }
      20% { transform: rotate(-8deg); }
      30% { transform: rotate(14deg); }
      40% { transform: rotate(-4deg); }
      50% { transform: rotate(10deg); }
      60%, 100% { transform: rotate(0deg); }
    }

    .about__stats {
      display: flex;
      gap: 2rem;
      margin: 2rem 0;
      flex-wrap: wrap;

      .stat-item {
        text-align: center;

        .stat-value {
          display: block;
          font-family: 'Bebas Neue', monospace;
          font-size: 2.5rem;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #6f9388;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
      }
    }

    .about__tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-top: 2rem;

      .tag {
        padding: 0.5rem 1rem;
        background: rgba(184, 255, 230, 0.1);
        border: 1px solid rgba(184, 255, 230, 0.2);
        border-radius: 20px;
        font-family: 'Courier Prime', monospace;
        font-size: 0.8rem;
        color: #b8ffe6;
        transition: all 0.3s ease;

        &:hover {
          background: rgba(184, 255, 230, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 0 15px rgba(184, 255, 230, 0.2);
        }
      }
    }
  `]
})
export class AboutComponent {
  stats: Stat[] = [
    { value: '3+', label: 'Years Experience', color: '#b8ffe6' },
    { value: '20+', label: 'Projects Done', color: '#6ec2a8' },
    { value: '10+', label: 'Technologies', color: '#7ab8a2' }
  ];

  technologies = [
    'Angular', 'TypeScript', 'JavaScript', 'Node.js',
    'NestJS', 'PostgreSQL', 'MongoDB', 'Docker',
    'Git', 'Tailwind CSS', 'SCSS', 'RxJS'
  ];
}
