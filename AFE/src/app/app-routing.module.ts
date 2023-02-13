import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { StepperComponent } from './users/stepper/stepper/stepper.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'}, 
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'stepper', component: StepperComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
