import { Routes } from "@angular/router";

const AdminLayoutRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../../features/auth/pages/login/login.component').then(m => m.LoginComponent)
  }
]

export default AdminLayoutRoutes;
