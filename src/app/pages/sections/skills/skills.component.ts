import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeonCardComponent } from '../../../shared/components/neon-card/neon-card.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
  color: string;
}

interface SkillCategory {
  id: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, NeonCardComponent, RevealDirective],
  template: `
    <section id="skills" class="skills section">
      <div class="container">
        <!-- Section Title -->
        <div class="skills__header" appReveal>
          <h2 class="section-title">Skills & Technologies</h2>
          <p class="section-subtitle">
            Technologies I've been working with and continuously improving on.
          </p>
        </div>

        <!-- Category Filter -->
        <div class="skills__filter" appReveal [revealDelay]="200">
          <button
            *ngFor="let cat of categories"
            class="filter-btn"
            [class.active]="activeCategory === cat.id"
            (click)="setCategory(cat.id)"
          >
            <span class="filter-icon" [innerHTML]="cat.icon"></span>
            {{ cat.label }}
          </button>
        </div>

        <!-- Skills Grid -->
        <div class="skills__grid">
          <div
            *ngFor="let skill of filteredSkills; let i = index"
            class="skill-card"
            appReveal
            [revealDelay]="300 + (i * 50)"
          >
            <app-neon-card [variant]="'default'" [hoverable]="true" [glow]="true">
              <div class="skill-content">
                <div class="skill-header">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level" [style.color]="skill.color">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div
                    class="skill-progress"
                    [style.width.%]="skill.level"
                    [style.background]="'linear-gradient(90deg, ' + skill.color + ' 0%, ' + adjustColor(skill.color, 30) + ' 100%)'"
                  >
                    <div class="skill-glow" [style.background]="skill.color"></div>
                  </div>
                </div>
              </div>
            </app-neon-card>
          </div>
        </div>

        <!-- Additional Skills -->
        <div class="skills__additional" appReveal [revealDelay]="500">
          <h3>Also Familiar With</h3>
          <div class="additional-tags">
            <span *ngFor="let tech of additionalSkills" class="tech-tag">{{ tech }}</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills {
      background: #0a0a0f;
      position: relative;
    }

    .skills__header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .skills__filter {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-bottom: 3rem;
      flex-wrap: wrap;

      .filter-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.5rem;
        font-family: 'Rajdhani', sans-serif;
        font-size: 0.9rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #71717a;
        background: transparent;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 30px;
        cursor: pointer;
        transition: all 0.3s ease;

        .filter-icon {
          width: 18px;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;

          :host ::ng-deep svg {
            width: 100%;
            height: 100%;
          }
        }

        &:hover {
          color: #00f5ff;
          border-color: rgba(0, 245, 255, 0.3);
        }

        &.active {
          color: #00f5ff;
          background: rgba(0, 245, 255, 0.1);
          border-color: rgba(0, 245, 255, 0.5);
          box-shadow: 0 0 20px rgba(0, 245, 255, 0.2);
        }
      }
    }

    .skills__grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1.5rem;

      @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .skill-card {
      .skill-content {
        padding: 0.5rem;
      }

      .skill-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.75rem;

        .skill-name {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: white;
        }

        .skill-level {
          font-family: 'Orbitron', monospace;
          font-size: 0.875rem;
          font-weight: 600;
        }
      }

      .skill-bar {
        height: 6px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 3px;
        overflow: hidden;
        position: relative;

        .skill-progress {
          height: 100%;
          border-radius: 3px;
          position: relative;
          transition: width 1s ease;

          .skill-glow {
            position: absolute;
            top: 0;
            right: 0;
            width: 20px;
            height: 100%;
            filter: blur(8px);
            opacity: 0.8;
          }
        }
      }
    }

    .skills__additional {
      margin-top: 4rem;
      text-align: center;

      h3 {
        font-size: 1.25rem;
        color: #71717a;
        margin-bottom: 1.5rem;
        font-weight: 500;
      }

      .additional-tags {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 0.75rem;

        .tech-tag {
          padding: 0.5rem 1rem;
          background: rgba(191, 0, 255, 0.1);
          border: 1px solid rgba(191, 0, 255, 0.2);
          border-radius: 20px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.8rem;
          color: #bf00ff;
          transition: all 0.3s ease;

          &:hover {
            background: rgba(191, 0, 255, 0.2);
            transform: translateY(-2px);
          }
        }
      }
    }
  `]
})
export class SkillsComponent {
  categories: SkillCategory[] = [
    { id: 'all', label: 'All', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>' },
    { id: 'frontend', label: 'Frontend', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 18.178l-4.62-1.256-.328-3.544h2.27l.157 1.844 2.52.683 2.52-.683.26-2.935H6.96l-.635-6.678h11.35l-.227 2.21H8.822l.204 2.256h8.217l-.624 6.778L12 18.178z"/></svg>' },
    { id: 'backend', label: 'Backend', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2zm0 2v14h14V5H5zm2 2h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"/></svg>' },
    { id: 'tools', label: 'Tools', icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>' }
  ];

  activeCategory = 'all';

  skills: Skill[] = [
    { name: 'Angular', level: 95, category: 'frontend', color: '#dd0031' },
    { name: 'TypeScript', level: 92, category: 'frontend', color: '#3178c6' },
    { name: 'JavaScript', level: 90, category: 'frontend', color: '#f7df1e' },
    { name: 'HTML/CSS', level: 95, category: 'frontend', color: '#e34f26' },
    { name: 'Tailwind CSS', level: 88, category: 'frontend', color: '#06b6d4' },
    { name: 'RxJS', level: 85, category: 'frontend', color: '#b7178c' },
    { name: 'Node.js', level: 85, category: 'backend', color: '#339933' },
    { name: 'NestJS', level: 80, category: 'backend', color: '#e0234e' },
    { name: 'PostgreSQL', level: 82, category: 'backend', color: '#336791' },
    { name: 'MongoDB', level: 78, category: 'backend', color: '#47a248' },
    { name: 'Git', level: 90, category: 'tools', color: '#f05032' },
    { name: 'Docker', level: 75, category: 'tools', color: '#2496ed' }
  ];

  additionalSkills = [
    'React', 'Vue.js', 'Redux', 'GraphQL', 'REST API',
    'Jest', 'Cypress', 'AWS', 'Firebase', 'Linux',
    'Nginx', 'Redis', 'WebSocket', 'Figma'
  ];

  get filteredSkills(): Skill[] {
    if (this.activeCategory === 'all') {
      return this.skills;
    }
    return this.skills.filter(s => s.category === this.activeCategory);
  }

  setCategory(categoryId: string): void {
    this.activeCategory = categoryId;
  }

  adjustColor(hex: string, percent: number): string {
    const num = parseInt(hex.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return '#' + (
      0x1000000 +
      (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
      (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
      (B < 255 ? B < 1 ? 0 : B : 255)
    ).toString(16).slice(1);
  }
}
