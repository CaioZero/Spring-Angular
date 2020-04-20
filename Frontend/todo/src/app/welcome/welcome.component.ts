import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  message = 'Fala ae mermao'
  name = ''
  welcomeMessageFromService: String

  constructor(private router: ActivatedRoute,
    private service:WelcomeDataService) { }

  ngOnInit(): void {
    console.log(this.message);
   // this.router.snapshot.params['name']
    this.name =  this.router.snapshot.params['name']
  }

  getWelcomeMessage(){
    console.log(this.service.executeHelloWorldBeanService());
    /**The subscribe has the same behavio for async await from javascript
     * so, when the funcion it`s subscribed, it will await for another function
     * for response
     */
    this.service.executeHelloWorldBeanService().subscribe
    (response=>  this.handleSucessfullResponse(response),
    error=> this.handleErrorResponse(error)
    )

    console.log("last line");

  }

  getWelcomeMessageWithParameter(){
    console.log(this.service.executeHelloWorldBeanService());
    /**The subscribe has the same behavio for async await from javascript
     * so, when the funcion it`s subscribed, it will await for another function
     * for response
     */
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe
    (response=>  this.handleSucessfullResponse(response),
    error=> this.handleErrorResponse(error)
    )

    console.log("last line");

  }

  handleSucessfullResponse(response){
    this.welcomeMessageFromService = response.message
   // console.log(response.message);
  }

  handleErrorResponse(error){
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);

    this.welcomeMessageFromService = error.error.message
  }
}
