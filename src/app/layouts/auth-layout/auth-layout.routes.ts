import { Routes } from "@angular/router";

const AuthRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
  }
]

export default AuthRoutes;
