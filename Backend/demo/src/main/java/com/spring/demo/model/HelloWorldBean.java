package com.spring.demo.model;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class HelloWorldBean {
    private String message;

    public HelloWorldBean(String string) {
        this.message = string;
	}

	@Override
    public String toString(){
        return String.format("Hello World Bean [%smessage]", message);
    }
}