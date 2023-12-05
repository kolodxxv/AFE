import { NgModule } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { StepperComponent } from './users/stepper/stepper/stepper.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { TasksComponent } from './tasks/tasks.component';
import { AuthGuard } from './shared/authguard.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'}, 
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'users/:id', component: UserDetailsComponent, canActivate: [AuthGuard]},
  { path: 'stepper', component: StepperComponent, canActivate: [AuthGuard]},
  { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
