package com.spring.demo.service;

import java.util.List;

import com.spring.demo.model.*;

import org.springframework.stereotype.Service;

@Service
public interface TodoService {

	List<Todo> findAll();

	Todo deleteById(long id);

}