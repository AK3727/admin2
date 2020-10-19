import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CardsComponent } from "./cards/cards.component";
import { TablesComponent } from "./tables/tables.component";
import { ChartsComponent } from "./charts/charts.component";
import { BlankComponent } from "./blank/blank.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ForgotPassComponent } from "./forgot-pass/forgot-pass.component";
import { AuthGuardService } from "./auth/auth_guard"
const routes: Routes = [
  {
    path: 'home',
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'cards',
    component: DashboardComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'charts',
    component: ChartsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'forgot_pass',
    component: ForgotPassComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '404',
    component: PageNotFoundComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'blank',
    component: BlankComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'tables',
    component: TablesComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
