package com.spring.demo.controller;

import com.spring.demo.model.HelloWorldBean;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {

    @GetMapping("/")
    public String helloWorld() {
        return "(Springboot) Hello World";
    }

    @GetMapping("/hello-world-bean")
    public HelloWorldBean helloWorldBean() {
        throw new RuntimeException("(Springboot) Some Error Has happened " );
      //  return new HelloWorldBean("Hello World Modified");
    }

    @GetMapping("/hello-world-bean/path-variable/{name}")
    public HelloWorldBean helloWorldBeanPathVariable(@PathVariable String name) {
        return new HelloWorldBean(String.format("(Springboot) Hello World, "+name));
    }


    
}