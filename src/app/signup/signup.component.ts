import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUp } from '../sign-up';
import { SignupService } from '../signup.service';
import { UserTokenService } from '../user-token.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private router:Router , private _SignupService:SignupService , private userToken:UserTokenService) { }

  ngOnInit(): void {
  }

  nameError:string = '';
  emailError:string = '';
  passwordError:string = '';


  signUp(signUp:SignUp){
    this._SignupService.signup(signUp.userName , signUp.userEmail , signUp.userPassword).subscribe(
      (data)=>{
        console.log(data);
        if(data.body.status == 'failed'){
          if(data.body.message.name !=null){
            this.nameError = data.body.message.name;
            console.log(this.nameError);
          }

          if(data.body.message.email !=null){
            this.emailError = data.body.message.email;
            console.log(this.emailError);
          }

          if(data.body.message.password !=null){
            this.passwordError = data.body.message.password;
            console.log(this.passwordError);
          }
        }

        else if(data.body.status == 'success'){
          localStorage.setItem('userToken' , data.body.authorisation.token);
          this.userToken.Token.next(true);
          this.router.navigate(['home']);
        }
      },

      (err)=>{
        console.log(err);
      },

      ()=>{
        alert('User Created Succesfully, you are loggedin now');
      }
    );
  }

  login(){
    this.router.navigate(['/login/signup/login']);
  }

}



//Signup get data from service and continue
