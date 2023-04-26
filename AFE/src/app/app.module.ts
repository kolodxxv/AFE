import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule, HashLocationStrategy } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { HashMap, TranslocoService } from '@ngneat/transloco';
import { LanguageService } from './language.service';
import { AppRoutingModule } from './app-routing.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { StepperComponent } from './users/stepper/stepper/stepper.component';
import { SurnamePipe } from './users/shared/pipe/surname.pipe';
import { ChangeColorDirective } from './users/shared/directive/change-color.directive';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UsersService } from './users/shared/users.service';
import { TasksComponent } from './tasks/tasks.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { NavbarComponent } from './navbar/navbar.component';

export function preloadLong(
  languageService: LanguageService,
  translocoService: TranslocoService
): () => Promise<HashMap> {
  let currentLang: string = languageService.getLanguage().toLowerCase();
  const availableLangs: string[] = translocoService.getAvailableLangs() as string[];

  if(!currentLang || !(availableLangs.includes(currentLang))) {
    currentLang = 'en';
    localStorage.setItem('lang', JSON.stringify('en'));
  }

  // @ts-ignore
  return () => translocoService.load(currentLang).toPromise();
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    UsersComponent,
    StepperComponent,
    SurnamePipe,
    ChangeColorDirective,
    UserDetailsComponent,
    TasksComponent,
    NavbarComponent,
    
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatSelectModule,
    HttpClientModule,
    TranslocoRootModule,
    MatToolbarModule
  ],
  providers: [
    UsersService,
    HashLocationStrategy,       
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [LanguageService, TranslocoService],
      useFactory: preloadLong,
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
