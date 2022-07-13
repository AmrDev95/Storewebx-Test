import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DisplayService } from './display.service';
import { httpInterceptor } from './http.interceptor';
import { DeleteService } from './delete.service';
import { UpdateService } from './update.service';
import { CreateService } from './create.service';
import { CategoriesService } from './categories.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    SignupPageComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DisplayService,{
      provide: HTTP_INTERCEPTORS,
      useClass:httpInterceptor,
      multi:true
    },
    DeleteService,{
      provide: HTTP_INTERCEPTORS,
      useClass:httpInterceptor,
      multi:true
    },
    UpdateService,{
      provide:HTTP_INTERCEPTORS,
      useClass:httpInterceptor,
      multi:true
    },
    CreateService,{
      provide:HTTP_INTERCEPTORS,
      useClass:httpInterceptor,
      multi:true
    },
    CategoriesService,{
      provide:HTTP_INTERCEPTORS,
      useClass:httpInterceptor,
      multi:true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
