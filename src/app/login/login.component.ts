import { Component, OnInit } from '@angular/core';
import { LoginService } from './../login.service';
import {Login } from "../login";
import { Router } from '@angular/router';
import { UserTokenService } from '../user-token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _LoginService:LoginService , private router:Router , private userToken:UserTokenService) { }

  wrongUser:boolean =false;
  errorMessage:string ='';
  ngOnInit(): void {
  }

logIn(loginForm:Login){
  this._LoginService.login(loginForm.userEmail, loginForm.userPassword).subscribe(
  (data)=>{
    localStorage.setItem('userToken' , data.body.authorisation.token);
    this.wrongUser = false;
    this.userToken.Token.next(true);
    this.router.navigate(['home']);
  },

  (err)=>{
    this.wrongUser = true;
    this.errorMessage = err.error.message;
  },

  ()=>{
    console.log('done');
  }
);
}

signUp(){
  this.router.navigate(['/login/signup/signup']);
}

}






