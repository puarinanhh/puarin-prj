import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeonCardComponent } from '../../../shared/components/neon-card/neon-card.component';
import { NeonButtonComponent } from '../../../shared/components/neon-button/neon-button.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { TiltDirective } from '../../../shared/directives/tilt.directive';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NeonCardComponent, NeonButtonComponent, RevealDirective, TiltDirective],
  template: `
    <section id="projects" class="projects section">
      <div class="container">
        <!-- Section Title -->
        <div class="projects__header" appReveal>
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle">
            A selection of projects I've worked on, showcasing my skills and passion for development.
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="projects__grid">
          <div
            *ngFor="let project of projects; let i = index"
            class="project-card"
            appReveal
            [revealDelay]="200 + (i * 100)"
            appTilt
            [tiltMaxX]="10"
            [tiltMaxY]="10"
            [tiltScale]="1.02"
          >
            <app-neon-card [variant]="'gradient'" [hoverable]="false" [glow]="true">
              <div class="project-content">
                <!-- Image Placeholder -->
                <div class="project-image">
                  <div class="image-placeholder">
                    <span class="project-number">{{ (i + 1).toString().padStart(2, '0') }}</span>
                  </div>
                  <div class="project-overlay">
                    <div class="overlay-links">
                      <a
                        *ngIf="project.githubUrl"
                        [href]="project.githubUrl"
                        target="_blank"
                        rel="noopener"
                        class="overlay-link"
                      >
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a
                        *ngIf="project.liveUrl"
                        [href]="project.liveUrl"
                        target="_blank"
                        rel="noopener"
                        class="overlay-link"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <!-- Project Info -->
                <div class="project-info">
                  <h3 class="project-title">{{ project.title }}</h3>
                  <p class="project-description">{{ project.description }}</p>

                  <!-- Technologies -->
                  <div class="project-tech">
                    <span *ngFor="let tech of project.technologies" class="tech-tag">
                      {{ tech }}
                    </span>
                  </div>
                </div>
              </div>
            </app-neon-card>
          </div>
        </div>

        <!-- View More -->
        <div class="projects__more" appReveal [revealDelay]="600">
          <app-neon-button variant="outline">
            View All Projects
          </app-neon-button>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects {
      background: linear-gradient(180deg, #162b28 0%, #0f1f1d 100%);
      position: relative;
    }

    .projects__header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .projects__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 2rem;

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .project-card {
      height: 100%;

      :host ::ng-deep .neon-card__content {
        padding: 0;
      }
    }

    .project-content {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .project-image {
      position: relative;
      height: 200px;
      overflow: hidden;
      border-radius: 12px 12px 0 0;

      .image-placeholder {
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #223834 0%, #0f1f1d 100%);
        display: flex;
        align-items: center;
        justify-content: center;

        .project-number {
          font-family: 'Bebas Neue', monospace;
          font-size: 4rem;
          font-weight: 900;
          color: rgba(184, 255, 230, 0.1);
        }
      }

      .project-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(15, 31, 29, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;

        .overlay-links {
          display: flex;
          gap: 1rem;
        }

        .overlay-link {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(184, 255, 230, 0.1);
          border: 1px solid rgba(184, 255, 230, 0.3);
          border-radius: 50%;
          color: #b8ffe6;
          transition: all 0.3s ease;

          svg {
            width: 22px;
            height: 22px;
          }

          &:hover {
            background: rgba(184, 255, 230, 0.2);
            transform: scale(1.1);
            box-shadow: 0 0 20px rgba(184, 255, 230, 0.3);
          }
        }
      }

      &:hover .project-overlay {
        opacity: 1;
      }
    }

    .project-info {
      padding: 1.5rem;
      flex: 1;
      display: flex;
      flex-direction: column;

      .project-title {
        font-family: 'Bebas Neue', monospace;
        font-size: 1.25rem;
        font-weight: 600;
        color: white;
        margin-bottom: 0.75rem;
      }

      .project-description {
        color: #b6d8cc;
        font-size: 0.9rem;
        line-height: 1.6;
        margin-bottom: 1rem;
        flex: 1;
      }

      .project-tech {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;

        .tech-tag {
          padding: 0.25rem 0.75rem;
          background: rgba(110, 194, 168, 0.1);
          border-radius: 15px;
          font-family: 'Courier Prime', monospace;
          font-size: 0.7rem;
          color: #6ec2a8;
        }
      }
    }

    .projects__more {
      display: flex;
      justify-content: center;
      margin-top: 3rem;
    }
  `]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: '1',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with real-time inventory management, payment integration, and admin dashboard.',
      image: '',
      technologies: ['Angular', 'NestJS', 'PostgreSQL', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/puarin/ecommerce',
      featured: true
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, drag-and-drop interface, and team features.',
      image: '',
      technologies: ['Angular', 'Firebase', 'RxJS', 'Material UI'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/puarin/taskmanager',
      featured: true
    },
    {
      id: '3',
      title: 'Portfolio Website',
      description: 'Personal portfolio website with retro-inspired aesthetics, particle effects, and smooth animations.',
      image: '',
      technologies: ['Angular', 'Tailwind CSS', 'SCSS', 'TypeScript'],
      githubUrl: 'https://github.com/puarin/portfolio',
      featured: true
    },
    {
      id: '4',
      title: 'Chat Application',
      description: 'Real-time chat application with WebSocket support, file sharing, and message encryption.',
      image: '',
      technologies: ['Angular', 'Socket.io', 'Node.js', 'MongoDB'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/puarin/chat',
      featured: false
    },
    {
      id: '5',
      title: 'Analytics Dashboard',
      description: 'Business analytics dashboard with interactive charts, data visualization, and report generation.',
      image: '',
      technologies: ['Angular', 'D3.js', 'NgRx', 'REST API'],
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      id: '6',
      title: 'Weather App',
      description: 'Beautiful weather application with location-based forecasts, animated backgrounds, and PWA support.',
      image: '',
      technologies: ['Angular', 'OpenWeather API', 'PWA', 'CSS Animations'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/puarin/weather',
      featured: false
    }
  ];
}
