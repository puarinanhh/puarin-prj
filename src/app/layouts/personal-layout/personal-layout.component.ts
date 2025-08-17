import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-personal-layout',
  template: `
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class PersonalLayoutComponent {

}
