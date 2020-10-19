import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(email: string, pass: string){
    if(email == "kanil3727@gmail.com" && pass == "123456"){
      localStorage.setItem('token', "loggedIn");
      this.router.navigate(['/home']);
    }
  }
}
