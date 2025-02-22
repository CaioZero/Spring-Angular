package com.spring.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

import com.spring.demo.model.*;
import com.spring.demo.repository.TodoRepository;
import com.spring.demo.service.TodoService;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoJPAController {

    @Autowired
    private TodoService todoService;

    @Autowired
    private TodoRepository todoRepository;

    @GetMapping("/jpa/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username) {
        return todoRepository.findByUsername(username);
      //  return todoService.findAll();
    }

    @GetMapping("/jpa/users/{username}/todos/{id}")
    public Todo getTodo(@PathVariable String username, @PathVariable long id) {
        return todoRepository.findById(id).get();
       // return todoService.findById(id);
    }

   @DeleteMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
    //    Todo todo = todoService.deleteById(id);
        todoRepository.deleteById(id);
        return ResponseEntity.noContent().build();
       // return ResponseEntity.notFound().build();
    }

    @PutMapping("/jpa/users/{username}/todos/{id}")
    public ResponseEntity<Todo> updateTodo(@PathVariable String username, @PathVariable long id, @RequestBody Todo todo){
      //  Todo todoUpdated = todoService.save(todo);
      Todo todoUpdated = todoRepository.save(todo);

        return new ResponseEntity<Todo>(todo, HttpStatus.OK);
    }

    @PostMapping("/jpa/users/{username}/todos")
    public ResponseEntity<Void> createTodo(@PathVariable String username, @RequestBody Todo todo){
        //  Todo todoCreated = todoService.save(todo);
        todo.setUsername(username);
      Todo todoCreated = todoRepository.save(todo);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                  .path("/{id}").buildAndExpand(todoCreated.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }
}