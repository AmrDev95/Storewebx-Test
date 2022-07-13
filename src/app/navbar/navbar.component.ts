import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserTokenService } from '../user-token.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router , private userToken:UserTokenService) { }

  
  showLogout:any = '';

  ngOnInit(): void {
    this.userToken.Token.subscribe(
      (data)=>{
        this.showLogout = data;
        console.log(this.showLogout);
      }
    );
  }

  logout(){
    localStorage.removeItem('userToken');
    this.userToken.Token.next(false);
    this.router.navigate(['login/signup']);
  }

}
