import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'Caio'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  constructor(
    private router: Router,
    private hardcodeAuthentication: HardcodeAuthenticationService) {}

  ngOnInit(): void {
  }

  handleLogin(){
    //Redirect to Welcome Page
   // if (this.username === 'Caio' && this.password ==='123') {
    if (this.hardcodeAuthentication.authenticate(this.username,this.password)) {
      this.invalidLogin = false
      this.router.navigate(['welcome',this.username])
    }else{
      this.invalidLogin = true
    }

  }
}
