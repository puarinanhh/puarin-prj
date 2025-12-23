import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <!-- Cyber Grid Background -->
    <div class="cyber-grid-bg"></div>

    <!-- Scan Line Effect -->
    <div class="scan-line-overlay"></div>

    <!-- Navigation -->
    <app-navbar></app-navbar>

    <!-- Main Content -->
    <router-outlet></router-outlet>

    <!-- Footer -->
    <app-footer></app-footer>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
      position: relative;
    }
  `]
})
export class AppComponent {}
