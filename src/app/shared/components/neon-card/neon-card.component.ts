import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-neon-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="neon-card"
      [class.neon-card--hoverable]="hoverable"
      [class.neon-card--glow]="glow"
      [ngClass]="'neon-card--' + variant"
    >
      <div class="neon-card__border"></div>
      <div class="neon-card__content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    .neon-card {
      position: relative;
      background: #12121a;
      border-radius: 12px;
      overflow: hidden;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .neon-card__border {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 12px;
      padding: 1px;
      background: linear-gradient(135deg, rgba(0, 245, 255, 0.2) 0%, rgba(191, 0, 255, 0.2) 100%);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
      transition: background 0.3s ease;
    }

    .neon-card__content {
      position: relative;
      z-index: 1;
      padding: 1.5rem;
    }

    // Hoverable
    .neon-card--hoverable {
      cursor: pointer;

      &:hover {
        transform: translateY(-5px);

        .neon-card__border {
          background: linear-gradient(135deg, rgba(0, 245, 255, 0.5) 0%, rgba(191, 0, 255, 0.5) 100%);
        }
      }
    }

    // Glow effect
    .neon-card--glow {
      &:hover {
        box-shadow:
          0 0 20px rgba(0, 245, 255, 0.2),
          0 0 40px rgba(191, 0, 255, 0.1),
          0 10px 40px rgba(0, 0, 0, 0.3);
      }
    }

    // Variants
    .neon-card--cyan {
      .neon-card__border {
        background: linear-gradient(135deg, rgba(0, 245, 255, 0.3) 0%, rgba(0, 245, 255, 0.1) 100%);
      }

      &:hover .neon-card__border {
        background: linear-gradient(135deg, rgba(0, 245, 255, 0.6) 0%, rgba(0, 245, 255, 0.3) 100%);
      }
    }

    .neon-card--purple {
      .neon-card__border {
        background: linear-gradient(135deg, rgba(191, 0, 255, 0.3) 0%, rgba(191, 0, 255, 0.1) 100%);
      }

      &:hover .neon-card__border {
        background: linear-gradient(135deg, rgba(191, 0, 255, 0.6) 0%, rgba(191, 0, 255, 0.3) 100%);
      }
    }

    .neon-card--pink {
      .neon-card__border {
        background: linear-gradient(135deg, rgba(255, 0, 128, 0.3) 0%, rgba(255, 0, 128, 0.1) 100%);
      }

      &:hover .neon-card__border {
        background: linear-gradient(135deg, rgba(255, 0, 128, 0.6) 0%, rgba(255, 0, 128, 0.3) 100%);
      }
    }

    .neon-card--gradient {
      .neon-card__border {
        background: linear-gradient(135deg, #bf00ff 0%, #00f5ff 50%, #ff0080 100%);
        background-size: 200% 200%;
        animation: gradient-shift 3s ease infinite;
      }
    }

    @keyframes gradient-shift {
      0%, 100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }
  `]
})
export class NeonCardComponent {
  @Input() variant: 'default' | 'cyan' | 'purple' | 'pink' | 'gradient' = 'default';
  @Input() hoverable = true;
  @Input() glow = true;
}
