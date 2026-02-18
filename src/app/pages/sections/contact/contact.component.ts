import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NeonButtonComponent } from '../../../shared/components/neon-button/neon-button.component';
import { NeonCardComponent } from '../../../shared/components/neon-card/neon-card.component';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link?: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NeonButtonComponent, NeonCardComponent, RevealDirective],
  template: `
    <section id="contact" class="contact section">
      <div class="container">
        <!-- Section Title -->
        <div class="contact__header" appReveal>
          <h2 class="section-title">Get In Touch</h2>
          <p class="section-subtitle">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </div>

        <div class="contact__content">
          <!-- Contact Info -->
          <div class="contact__info" appReveal [revealDirection]="'left'" [revealDelay]="200">
            <h3>Let's Connect</h3>
            <p>
              I'm always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision.
            </p>

            <div class="info-list">
              <div *ngFor="let info of contactInfo" class="info-item">
                <div class="info-icon" [innerHTML]="info.icon"></div>
                <div class="info-content">
                  <span class="info-label">{{ info.label }}</span>
                  <a
                    *ngIf="info.link; else plainText"
                    [href]="info.link"
                    class="info-value"
                    target="_blank"
                  >
                    {{ info.value }}
                  </a>
                  <ng-template #plainText>
                    <span class="info-value">{{ info.value }}</span>
                  </ng-template>
                </div>
              </div>
            </div>

            <!-- Decorative -->
            <div class="contact__decoration">
              <div class="deco-circle"></div>
              <div class="deco-line"></div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact__form" appReveal [revealDirection]="'right'" [revealDelay]="300">
            <app-neon-card [variant]="'cyan'" [hoverable]="false" [glow]="false">
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    formControlName="name"
                    placeholder="Your name"
                    [class.error]="isFieldInvalid('name')"
                  />
                  <span *ngIf="isFieldInvalid('name')" class="error-message">
                    Please enter your name
                  </span>
                </div>

                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    formControlName="email"
                    placeholder="your.email@example.com"
                    [class.error]="isFieldInvalid('email')"
                  />
                  <span *ngIf="isFieldInvalid('email')" class="error-message">
                    Please enter a valid email
                  </span>
                </div>

                <div class="form-group">
                  <label for="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    formControlName="subject"
                    placeholder="Project inquiry"
                    [class.error]="isFieldInvalid('subject')"
                  />
                  <span *ngIf="isFieldInvalid('subject')" class="error-message">
                    Please enter a subject
                  </span>
                </div>

                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea
                    id="message"
                    formControlName="message"
                    rows="5"
                    placeholder="Tell me about your project..."
                    [class.error]="isFieldInvalid('message')"
                  ></textarea>
                  <span *ngIf="isFieldInvalid('message')" class="error-message">
                    Please enter your message (min 10 characters)
                  </span>
                </div>

                <div class="form-actions">
                  <app-neon-button
                    type="submit"
                    variant="primary"
                    [fullWidth]="true"
                    [disabled]="isSubmitting"
                  >
                    {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                  </app-neon-button>
                </div>

                <div *ngIf="submitStatus === 'success'" class="form-message success">
                  Message sent successfully! I'll get back to you soon.
                </div>
                <div *ngIf="submitStatus === 'error'" class="form-message error">
                  Something went wrong. Please try again later.
                </div>
              </form>
            </app-neon-card>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      background: #0f1f1d;
      position: relative;
    }

    .contact__header {
      text-align: center;
      margin-bottom: 4rem;
    }

    .contact__content {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3rem;

      @media (min-width: 1024px) {
        grid-template-columns: 1fr 1.2fr;
        gap: 4rem;
      }
    }

    .contact__info {
      h3 {
        font-family: 'Bebas Neue', monospace;
        font-size: 1.5rem;
        color: white;
        margin-bottom: 1rem;
      }

      > p {
        color: #b6d8cc;
        line-height: 1.7;
        margin-bottom: 2rem;
      }

      .info-list {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .info-item {
        display: flex;
        align-items: flex-start;
        gap: 1rem;

        .info-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(184, 255, 230, 0.1);
          border: 1px solid rgba(184, 255, 230, 0.2);
          border-radius: 10px;
          color: #b8ffe6;
          flex-shrink: 0;

          :host ::ng-deep svg {
            width: 20px;
            height: 20px;
          }
        }

        .info-content {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;

          .info-label {
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: #6f9388;
          }

          .info-value {
            color: white;
            font-size: 1rem;
            text-decoration: none;
            transition: color 0.3s ease;

            &:hover {
              color: #b8ffe6;
            }
          }
        }
      }
    }

    .contact__decoration {
      margin-top: 3rem;
      position: relative;

      .deco-circle {
        width: 100px;
        height: 100px;
        border: 2px solid rgba(110, 194, 168, 0.2);
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        animation: pulse 4s ease-in-out infinite;
      }

      .deco-line {
        width: 150px;
        height: 2px;
        background: linear-gradient(90deg, #6ec2a8, transparent);
        position: absolute;
        top: 50px;
        left: 30px;
      }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); opacity: 0.5; }
      50% { transform: scale(1.1); opacity: 0.8; }
    }

    .contact__form {
      form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .form-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        label {
          font-family: 'PT Sans', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #b6d8cc;
        }

        input,
        textarea {
          padding: 0.875rem 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: white;
          font-family: 'PT Sans', sans-serif;
          font-size: 1rem;
          transition: all 0.3s ease;

          &::placeholder {
            color: #52525b;
          }

          &:focus {
            outline: none;
            border-color: #b8ffe6;
            box-shadow: 0 0 20px rgba(184, 255, 230, 0.1);
          }

          &.error {
            border-color: #7ab8a2;
          }
        }

        textarea {
          resize: vertical;
          min-height: 120px;
        }

        .error-message {
          font-size: 0.8rem;
          color: #7ab8a2;
        }
      }

      .form-actions {
        margin-top: 0.5rem;
      }

      .form-message {
        padding: 1rem;
        border-radius: 8px;
        font-size: 0.9rem;
        text-align: center;

        &.success {
          background: rgba(57, 255, 20, 0.1);
          border: 1px solid rgba(57, 255, 20, 0.3);
          color: #9ad7b0;
        }

        &.error {
          background: rgba(122, 184, 162, 0.1);
          border: 1px solid rgba(122, 184, 162, 0.3);
          color: #7ab8a2;
        }
      }
    }
  `]
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  contactInfo: ContactInfo[] = [
    {
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
      label: 'Email',
      value: 'contact@puarin.dev',
      link: 'mailto:contact@puarin.dev'
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',
      label: 'Location',
      value: 'Ho Chi Minh City, Vietnam'
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
      label: 'GitHub',
      value: 'github.com/puarin',
      link: 'https://github.com/puarin'
    },
    {
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',
      label: 'LinkedIn',
      value: 'linkedin.com/in/puarin',
      link: 'https://linkedin.com/in/puarin'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return field ? field.invalid && field.touched : false;
  }

  async onSubmit(): Promise<void> {
    if (this.contactForm.invalid) {
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;
    this.submitStatus = 'idle';

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      this.submitStatus = 'success';
      this.contactForm.reset();
    } catch {
      this.submitStatus = 'error';
    } finally {
      this.isSubmitting = false;
    }
  }
}
