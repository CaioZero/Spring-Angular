package com.spring.demo.controller;

import com.spring.demo.model.AuthenticationBean;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class AuthenticationController {

    @GetMapping("/basicauth")
    public AuthenticationBean helloWorldBean() {
      //  throw new RuntimeException("(Springboot) Some Error Has happened " );
       return new AuthenticationBean("You are Authenticated");
    }
    
}