import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'users', loadChildren: () => import('./modules/user-management/user-management.routes').then(c => c.UserManagementRoutes) },
];
