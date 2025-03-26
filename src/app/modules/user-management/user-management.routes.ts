import { Routes } from '@angular/router';
import { UserManagementComponent } from './user-management.component';
import { CreateUserComponent } from './pages/create-user/create-user.component';
export const UserManagementRoutes: Routes = [
      { path: '', component: UserManagementComponent },
      { path: 'create', component: CreateUserComponent}
]
