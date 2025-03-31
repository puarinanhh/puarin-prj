import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  template: `
 <!-- header.component.html -->
<nav class="bg-white shadow-lg animate-fade-in">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex justify-between items-center h-16">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <span class="text-2xl font-bold text-blue-600">My Portfolio</span>
      </div>

      <!-- Menu Desktop -->
      <div class="hidden md:flex space-x-8">
        <a *ngFor="let item of menuItems"
           [routerLink]="item.link"
           class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md transition-all duration-300">
          {{ item.title }}
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button class="md:hidden" (click)="toggleMenu()">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/>
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="md:hidden" [class.hidden]="!isMenuOpen">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a *ngFor="let item of menuItems"
           [routerLink]="item.link"
           class="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
          {{ item.title }}
        </a>
      </div>
    </div>
  </div>
</nav>
  `,
  styles: [],
  imports: [RouterModule],
  standalone: true,
})
export class HeaderComponent {
  isMenuOpen = false;
  toggleMenu() {

  }
}
