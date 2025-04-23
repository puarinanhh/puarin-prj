import { NgModule } from "@angular/core";
import { authRoutes } from "./auth.routes";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";

@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    declarations: [LoginComponent]
})
export class AuthModule {}