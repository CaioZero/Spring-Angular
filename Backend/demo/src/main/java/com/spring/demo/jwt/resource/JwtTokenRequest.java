package com.spring.demo.jwt.resource;

import java.io.Serializable;

import lombok.Getter;
import lombok.Setter;

@Getter @Setter
public class JwtTokenRequest implements Serializable {

	private static final long serialVersionUID = -5616176897013108345L;

	private String username;
	private String password;

	// {
	// 	"token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJpbjI4bWludXRlcyIsImV4cCI6MTU4NzY4OTg0MiwiaWF0IjoxNTg3NjI5MzYyfQ.pySdFISaDu06uNr9gsBsTVzPO8P_9Lql4dvhZVs1ClQE_wvsQFJNXclGO68T0rZqzrX9tO1I43Si3OXzi4V1IA"
	// }

	public JwtTokenRequest() {
		super();
	}

	public JwtTokenRequest(String username, String password) {
		this.setUsername(username);
		this.setPassword(password);
	}
}