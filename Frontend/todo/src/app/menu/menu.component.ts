import { Component, OnInit } from '@angular/core';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isUserLoggedIn: boolean = false

  constructor(public hardcodeAutenthicationService: HardcodeAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
  // this.isUserLoggedIn =  this.hardcodeAutenthicationService.isUserLoggedIn()
    this.isUserLoggedIn = this.basicAuthenticationService.isUserLoggedIn()
  }

}
