import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

export class HelloWorldBean{
  constructor(public message: String){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http:HttpClient
  ) { }

  executeHelloWorldBeanService(){
    //console.log("Execute Hello WOrld Bean Service");
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world-bean')
  }

  executeHelloWorldBeanServiceWithPathVariable(name){
    //console.log("Execute Hello WOrld Bean Service");
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader()
    // let header = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })

    return this.http.get<HelloWorldBean>(`http://localhost:8080/hello-world-bean/path-variable/${name}`,
    //{headers:header}
    )
  }

  // createBasicAuthenticationHttpHeader(){
  //   let username = 'Caio'
  //   let password = '123'                  /**COnversion in JavaScript to base64, for encode */
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password)
  //   return basicAuthHeaderString
  // }
//   Access to XMLHttpRequest at
//  'http://localhost:8080/hello-world-bean/path-variable/Caio'
//   from origin 'http://localhost:4200' has been blocked by CORS policy:
//   No 'Access-Control-Allow-Origin' header is present on the requested resource.

}
