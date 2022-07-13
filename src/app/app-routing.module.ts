import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '' , redirectTo:'home' , pathMatch:'full'},
  {path:'home' , component:HomeComponent , canActivate:[AuthenticationGuard] , title:'home'},
  {path:'login/signup' , component: LoginPageComponent , title:'login/signup' , children:[
    {path:'' , redirectTo:'login' , pathMatch:'full'},
    {path:'login' ,component: LoginComponent , title:'login' },
    {path:'signup' , component:SignupComponent , title:'Sign Up'}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
