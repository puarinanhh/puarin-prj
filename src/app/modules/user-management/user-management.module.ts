import { NgModule } from "@angular/core";
import { UserManagementComponent } from "./user-management.component";
import { SharedModule } from "../../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { UserManagementRoutes } from "./user-management.routes";
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "./state/user.effects";
import { StoreModule } from "@ngrx/store";
import { userReducer } from "./state/user.reducer";
import { FormUserComponent } from "./components/form-user.component";

@NgModule({
  declarations: [
    UserManagementComponent,
    FormUserComponent,
  ],
  imports: [SharedModule, EffectsModule.forFeature([UserEffects]), StoreModule.forFeature('user', userReducer),
          FormsModule, ReactiveFormsModule, RouterModule, RouterModule.forChild(UserManagementRoutes)]
})
export class UserManagementModule {}
