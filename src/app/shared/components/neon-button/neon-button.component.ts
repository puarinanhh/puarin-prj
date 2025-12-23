import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-neon-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [type]="type"
      [disabled]="disabled"
      [class]="buttonClasses"
      (click)="onClick.emit($event)"
    >
      <span class="btn-content">
        <ng-content></ng-content>
      </span>
      <span class="btn-glow"></span>
    </button>
  `,
  styles: [`
    :host {
      display: inline-block;
    }

    button {
      position: relative;
      padding: 0.875rem 2rem;
      font-family: 'Orbitron', monospace;
      font-size: 0.875rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      overflow: hidden;
      transition: all 0.3s ease;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }

    .btn-content {
      position: relative;
      z-index: 1;
    }

    .btn-glow {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    // Primary variant (filled)
    .btn-primary {
      background: linear-gradient(135deg, #bf00ff 0%, #00f5ff 100%);
      color: white;

      .btn-glow {
        background: linear-gradient(135deg, #bf00ff 0%, #00f5ff 100%);
        filter: blur(15px);
      }

      &:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 0 30px rgba(0, 245, 255, 0.5), 0 0 60px rgba(191, 0, 255, 0.3);

        .btn-glow {
          opacity: 0.5;
        }
      }

      &:active:not(:disabled) {
        transform: translateY(0);
      }
    }

    // Outline variant
    .btn-outline {
      background: transparent;
      color: #00f5ff;
      border: 2px solid #00f5ff;

      .btn-glow {
        background: #00f5ff;
        filter: blur(15px);
      }

      &:hover:not(:disabled) {
        background: rgba(0, 245, 255, 0.1);
        transform: translateY(-2px);
        box-shadow: 0 0 20px rgba(0, 245, 255, 0.4), inset 0 0 20px rgba(0, 245, 255, 0.1);

        .btn-glow {
          opacity: 0.3;
        }
      }

      &:active:not(:disabled) {
        transform: translateY(0);
      }
    }

    // Ghost variant
    .btn-ghost {
      background: transparent;
      color: #a1a1aa;
      border: 1px solid rgba(255, 255, 255, 0.1);

      &:hover:not(:disabled) {
        color: #00f5ff;
        border-color: rgba(0, 245, 255, 0.3);
        background: rgba(0, 245, 255, 0.05);
      }
    }

    // Pink variant
    .btn-pink {
      background: linear-gradient(135deg, #ff0080 0%, #bf00ff 100%);
      color: white;

      .btn-glow {
        background: linear-gradient(135deg, #ff0080 0%, #bf00ff 100%);
        filter: blur(15px);
      }

      &:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 0 30px rgba(255, 0, 128, 0.5), 0 0 60px rgba(191, 0, 255, 0.3);

        .btn-glow {
          opacity: 0.5;
        }
      }
    }

    // Size variants
    .btn-sm {
      padding: 0.5rem 1rem;
      font-size: 0.75rem;
    }

    .btn-lg {
      padding: 1rem 2.5rem;
      font-size: 1rem;
    }

    // Full width
    .btn-full {
      width: 100%;
    }
  `]
})
export class NeonButtonComponent {
  @Input() variant: 'primary' | 'outline' | 'ghost' | 'pink' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled = false;
  @Input() fullWidth = false;

  @Output() onClick = new EventEmitter<MouseEvent>();

  get buttonClasses(): string {
    const classes = [
      `btn-${this.variant}`,
      this.size !== 'md' ? `btn-${this.size}` : '',
      this.fullWidth ? 'btn-full' : ''
    ];
    return classes.filter(Boolean).join(' ');
  }
}
