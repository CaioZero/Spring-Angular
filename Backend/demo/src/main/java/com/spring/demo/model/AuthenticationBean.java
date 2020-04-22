package com.spring.demo.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter @NoArgsConstructor
public class AuthenticationBean {
    private String message;

    public AuthenticationBean(String message){
        this.message = message;
    }
}
