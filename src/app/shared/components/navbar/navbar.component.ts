import { Component, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface NavItem {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav
      class="navbar"
      [class.navbar--scrolled]="isScrolled"
      [class.navbar--hidden]="isHidden"
    >
      <div class="navbar__container">
        <!-- Logo -->
        <a href="#hero" class="navbar__logo" (click)="scrollToSection($event, 'hero')">
          <span class="logo-text">PUARIN</span>
          <span class="logo-dot"></span>
        </a>

        <!-- Desktop Navigation -->
        <ul class="navbar__menu">
          <li *ngFor="let item of navItems">
            <a
              [href]="item.href"
              class="navbar__link"
              [class.navbar__link--active]="activeSection === item.href.substring(1)"
              (click)="scrollToSection($event, item.href.substring(1))"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>

        <!-- Mobile Menu Button -->
        <button
          class="navbar__toggle"
          [class.active]="isMobileMenuOpen"
          (click)="toggleMobileMenu()"
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        class="navbar__mobile-menu"
        [class.open]="isMobileMenuOpen"
      >
        <ul>
          <li *ngFor="let item of navItems; let i = index">
            <a
              [href]="item.href"
              class="navbar__mobile-link"
              [style.animation-delay]="(i * 0.1) + 's'"
              (click)="scrollToSection($event, item.href.substring(1)); closeMobileMenu()"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 100;
      padding: 1rem 0;
      transition: all 0.3s ease;

      &--scrolled {
        background: rgba(15, 31, 29, 0.9);
        backdrop-filter: blur(10px);
        padding: 0.75rem 0;
        box-shadow: 0 0 30px rgba(184, 255, 230, 0.1);
      }

      &--hidden {
        transform: translateY(-100%);
      }
    }

    .navbar__container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .navbar__logo {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      text-decoration: none;

      .logo-text {
        font-family: 'Bebas Neue', monospace;
        font-size: 1.5rem;
        font-weight: 700;
        color: #b8ffe6;
        letter-spacing: 0.1em;
        text-shadow: 0 0 10px rgba(184, 255, 230, 0.5);
      }

      .logo-dot {
        width: 8px;
        height: 8px;
        background: #6ec2a8;
        border-radius: 50%;
        animation: pulse 2s ease-in-out infinite;
      }
    }

    .navbar__menu {
      display: none;
      list-style: none;
      gap: 2rem;

      @media (min-width: 768px) {
        display: flex;
      }
    }

    .navbar__link {
      font-family: 'PT Sans', sans-serif;
      font-size: 0.9rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #b6d8cc;
      text-decoration: none;
      padding: 0.5rem 0;
      position: relative;
      transition: color 0.3s ease;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, #6ec2a8 0%, #b8ffe6 100%);
        transition: width 0.3s ease;
      }

      &:hover,
      &--active {
        color: #b8ffe6;

        &::after {
          width: 100%;
        }
      }
    }

    .navbar__toggle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      width: 30px;
      height: 30px;
      background: transparent;
      border: none;
      cursor: pointer;
      z-index: 101;

      @media (min-width: 768px) {
        display: none;
      }

      span {
        display: block;
        width: 100%;
        height: 2px;
        background: #b8ffe6;
        transition: all 0.3s ease;
        transform-origin: center;
      }

      &.active {
        span:nth-child(1) {
          transform: rotate(45deg) translateY(10px);
        }
        span:nth-child(2) {
          opacity: 0;
        }
        span:nth-child(3) {
          transform: rotate(-45deg) translateY(-10px);
        }
      }
    }

    .navbar__mobile-menu {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(15, 31, 29, 0.98);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;

      @media (min-width: 768px) {
        display: none;
      }

      &.open {
        opacity: 1;
        visibility: visible;
      }

      ul {
        list-style: none;
        text-align: center;
      }

      li {
        margin: 1.5rem 0;
      }
    }

    .navbar__mobile-link {
      font-family: 'Bebas Neue', monospace;
      font-size: 1.5rem;
      font-weight: 600;
      color: white;
      text-decoration: none;
      opacity: 0;
      transform: translateY(20px);
      display: inline-block;
      transition: color 0.3s ease;

      .open & {
        animation: fadeInUp 0.5s ease forwards;
      }

      &:hover {
        color: #b8ffe6;
        text-shadow: 0 0 20px rgba(184, 255, 230, 0.5);
      }
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.2); }
    }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `]
})
export class NavbarComponent {
  navItems: NavItem[] = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  isScrolled = false;
  isHidden = false;
  isMobileMenuOpen = false;
  activeSection = 'hero';
  private lastScrollY = 0;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (!this.isBrowser) return;

    const currentScrollY = window.scrollY;

    this.isScrolled = currentScrollY > 50;
    this.isHidden = currentScrollY > this.lastScrollY && currentScrollY > 200;
    this.lastScrollY = currentScrollY;

    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    const sections = ['hero', 'about', 'services', 'projects', 'contact'];

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    if (!this.isBrowser) return;

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isBrowser) {
      document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    if (this.isBrowser) {
      document.body.style.overflow = '';
    }
  }
}
