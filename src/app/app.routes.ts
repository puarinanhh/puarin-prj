import { Routes } from '@angular/router';
import { ManagementLayoutComponent } from './layouts/management-layout/management-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { PersonalLayoutComponent } from './layouts/personal-layout/personal-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/auth-layout/auth-layout.routes').then(m => m.default)
      }
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./layouts/admin-layout/admin-layout.routes').then(m => m.default) }
    ]
  },
  {
    path: 'management',
    component: ManagementLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/management-layout/management-layout.routes').then(m => m.default)
      }
    ]
  },
  {
    path: 'personal',
    component: PersonalLayoutComponent,
    children: [
      { path: '', loadChildren: () => import('./layouts/personal-layout/personal-layout.routes').then(m => m.default) }
    ]
  },
];
