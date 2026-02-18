import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-glitch-text',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span
      class="glitch-wrapper"
      [attr.data-text]="text"
      [class.glitch-active]="active"
      [class.glitch-hover]="hoverOnly"
    >
      <span class="glitch-text" [ngClass]="textClass">{{ text }}</span>
    </span>
  `,
  styles: [`
    :host {
      display: inline-block;
    }

    .glitch-wrapper {
      position: relative;
      display: inline-block;

      &::before,
      &::after {
        content: attr(data-text);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        opacity: 0;
        pointer-events: none;
      }

      &::before {
        left: 2px;
        text-shadow: -2px 0 #7ab8a2;
        animation: none;
      }

      &::after {
        left: -2px;
        text-shadow: 2px 0 #b8ffe6;
        animation: none;
      }
    }

    // Active state (always glitching)
    .glitch-active {
      &::before,
      &::after {
        opacity: 0.8;
      }

      &::before {
        animation: glitch-1 2s infinite linear alternate-reverse;
      }

      &::after {
        animation: glitch-2 3s infinite linear alternate-reverse;
      }
    }

    // Hover only state
    .glitch-hover {
      &:hover {
        &::before,
        &::after {
          opacity: 0.8;
        }

        &::before {
          animation: glitch-1 0.3s infinite linear alternate-reverse;
        }

        &::after {
          animation: glitch-2 0.3s infinite linear alternate-reverse;
        }
      }
    }

    .glitch-text {
      position: relative;
      z-index: 1;
    }

    @keyframes glitch-1 {
      0% {
        clip-path: inset(40% 0 61% 0);
        transform: translate(-2px, -2px);
      }
      20% {
        clip-path: inset(92% 0 1% 0);
        transform: translate(2px, 2px);
      }
      40% {
        clip-path: inset(43% 0 1% 0);
        transform: translate(-2px, 1px);
      }
      60% {
        clip-path: inset(25% 0 58% 0);
        transform: translate(2px, -1px);
      }
      80% {
        clip-path: inset(54% 0 7% 0);
        transform: translate(-1px, 2px);
      }
      100% {
        clip-path: inset(58% 0 43% 0);
        transform: translate(1px, -2px);
      }
    }

    @keyframes glitch-2 {
      0% {
        clip-path: inset(65% 0 6% 0);
        transform: translate(2px, 2px);
      }
      20% {
        clip-path: inset(12% 0 75% 0);
        transform: translate(-2px, -2px);
      }
      40% {
        clip-path: inset(82% 0 5% 0);
        transform: translate(1px, -1px);
      }
      60% {
        clip-path: inset(32% 0 55% 0);
        transform: translate(-1px, 1px);
      }
      80% {
        clip-path: inset(5% 0 82% 0);
        transform: translate(2px, -2px);
      }
      100% {
        clip-path: inset(72% 0 15% 0);
        transform: translate(-2px, 2px);
      }
    }
  `]
})
export class GlitchTextComponent {
  @Input() text = '';
  @Input() textClass = '';
  @Input() active = true;
  @Input() hoverOnly = false;
}
