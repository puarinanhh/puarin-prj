import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeonCardComponent } from '../../../shared/components/neon-card/neon-card.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

interface ServiceItem {
  title: string;
  description: string;
  deliverables: string[];
  timeline: string;
}

interface ProcessStep {
  title: string;
  details: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, NeonCardComponent, RevealDirective],
  template: `
    <section id="services" class="services section">
      <div class="container">
        <div class="services__header" appReveal>
          <h2 class="section-title">Services</h2>
          <p class="section-subtitle">
            Practical support from planning to launch, focused on measurable outcomes.
          </p>
        </div>

        <div class="services__grid">
          <div
            *ngFor="let service of services; let i = index"
            class="service-card"
            appReveal
            [revealDelay]="180 + (i * 100)"
          >
            <app-neon-card [variant]="'default'" [hoverable]="true" [glow]="true">
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <ul>
                <li *ngFor="let item of service.deliverables">{{ item }}</li>
              </ul>
              <span class="timeline">{{ service.timeline }}</span>
            </app-neon-card>
          </div>
        </div>

        <div class="services__process" appReveal [revealDelay]="520">
          <h3>How We Work</h3>
          <div class="process-steps">
            <div *ngFor="let step of process; let i = index" class="step">
              <span class="step-index">{{ (i + 1).toString().padStart(2, '0') }}</span>
              <div>
                <h4>{{ step.title }}</h4>
                <p>{{ step.details }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .services {
      background: linear-gradient(180deg, #0f1f1d 0%, #162b28 100%);
      position: relative;
    }

    .services__header {
      text-align: center;
      margin-bottom: 3.5rem;
    }

    .services__grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;

      @media (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .service-card {
      :host ::ng-deep .neon-card__content {
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      h3 {
        font-family: 'Bebas Neue', monospace;
        font-size: 1.05rem;
        color: #fff;
        margin-bottom: 0.75rem;
      }

      p {
        color: #b6d8cc;
        font-size: 0.95rem;
        line-height: 1.6;
        margin-bottom: 1rem;
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      li {
        font-size: 0.85rem;
        color: #d4d4d8;
        padding-left: 1rem;
        position: relative;

        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.5rem;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #b8ffe6;
          box-shadow: 0 0 10px rgba(184, 255, 230, 0.6);
        }
      }

      .timeline {
        margin-top: auto;
        display: inline-flex;
        align-self: flex-start;
        padding: 0.35rem 0.75rem;
        border-radius: 999px;
        border: 1px solid rgba(110, 194, 168, 0.35);
        background: rgba(110, 194, 168, 0.12);
        color: #6ec2a8;
        font-family: 'Courier Prime', monospace;
        font-size: 0.75rem;
      }
    }

    .services__process {
      margin-top: 3rem;
      padding: 1.5rem;
      border: 1px solid rgba(184, 255, 230, 0.2);
      border-radius: 16px;
      background: rgba(184, 255, 230, 0.04);

      h3 {
        margin-bottom: 1.25rem;
        color: #b8ffe6;
        font-size: 1.15rem;
      }

      .process-steps {
        display: grid;
        gap: 1rem;

        @media (min-width: 768px) {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      .step {
        display: flex;
        gap: 0.75rem;
      }

      .step-index {
        font-family: 'Bebas Neue', monospace;
        color: #b8ffe6;
        font-weight: 700;
        font-size: 0.9rem;
        min-width: 1.8rem;
      }

      h4 {
        color: #fff;
        font-size: 0.95rem;
        margin-bottom: 0.25rem;
      }

      p {
        margin: 0;
        color: #b6d8cc;
        font-size: 0.85rem;
        line-height: 1.6;
      }
    }
  `]
})
export class ServicesComponent {
  services: ServiceItem[] = [
    {
      title: 'Landing Page Conversion',
      description: 'Build fast, responsive pages focused on clear CTA and lead conversion.',
      deliverables: ['Responsive UI', 'Tracking events', 'SEO basics'],
      timeline: '1-2 weeks'
    },
    {
      title: 'Web App Development',
      description: 'Develop production-ready modules with clean architecture and maintainable code.',
      deliverables: ['Feature module', 'API integration', 'Role-based flows'],
      timeline: '2-6 weeks'
    },
    {
      title: 'Maintenance & Optimization',
      description: 'Stabilize existing codebase, improve performance, and reduce regression risk.',
      deliverables: ['Bug backlog fix', 'Performance audit', 'Refactor hotspots'],
      timeline: 'Ongoing'
    }
  ];

  process: ProcessStep[] = [
    {
      title: 'Scope & Plan',
      details: 'Clarify business goal, define deliverables, and break work into milestones.'
    },
    {
      title: 'Build & Review',
      details: 'Implement in short iterations with demo checkpoints and feedback loops.'
    },
    {
      title: 'Launch & Support',
      details: 'Deploy safely, monitor key metrics, and hand over with clear documentation.'
    }
  ];
}
