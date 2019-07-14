import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsComponent } from './logins/logins.component';
import { LoginnComponent } from './loginn/loginn.component';
import { DataentryComponent } from './dataentry/dataentry.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'logins',component:LoginsComponent},
  {path:'loginn',component:LoginnComponent},
  {path:'dataentry',component:DataentryComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
