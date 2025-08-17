import { Routes } from "@angular/router";
import { PersonalLayoutComponent } from "./personal-layout.component";

const PersonalLayoutRoutes: Routes = [
  {
    path: '',
    component: PersonalLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('../../features/home/home.component').then(m => m.HomeComponent)
      }
    ]
  }
]

export default PersonalLayoutRoutes;
