import { Routes } from "@angular/router";

const ManagementLayoutRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../../features/dashboard/pages/overview.component').then(m => m.OverviewComponent)
  }
]

export default ManagementLayoutRoutes;
