import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard',
    component: HomeComponent
  },
  { path: 'user', loadChildren: () => import('./modules/user-management/user-management.module').then(c => c.UserManagementModule) },

];
