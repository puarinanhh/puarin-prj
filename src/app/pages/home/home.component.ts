import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../sections/hero/hero.component';
import { AboutComponent } from '../sections/about/about.component';
import { ServicesComponent } from '../sections/services/services.component';
import { ProjectsComponent } from '../sections/projects/projects.component';
import { ContactComponent } from '../sections/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    ContactComponent
  ],
  template: `
    <main class="home">
      <app-hero></app-hero>
      <app-about></app-about>
      <app-services></app-services>
      <app-projects></app-projects>
      <app-contact></app-contact>
    </main>
  `,
  styles: [`
    .home {
      width: 100%;
    }
  `]
})
export class HomeComponent {}
