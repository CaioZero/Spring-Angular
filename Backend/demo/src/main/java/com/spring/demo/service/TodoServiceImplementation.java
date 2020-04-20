package com.spring.demo.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.spring.demo.model.Todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoServiceImplementation implements TodoService {

    // @Autowired
    // TodoRepository todoRepository;

    public static List<Todo> todos = new ArrayList<>();
    public static int idCounter=0;

    static{
        todos.add(new Todo(++idCounter, "Caio Augusto", "Learning Spring", new Date(), false));
        todos.add(new Todo(++idCounter, "Caio Augusto", "Learning Angular", new Date(), false));
        todos.add(new Todo(++idCounter, "Caio Augusto", "Learning Join All", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
    }

    @Override
    public Todo deleteById(long id) {
       Todo todo = findById(id);
       if(todo == null) return null;

       if(todos.remove(todo)) return todo;
       return null;
    }

    private Todo findById(long id) {
        for(Todo todo:todos){
            if(todo.getId() == id){
                return todo;
            }
        }
        return null;
    }

   
    

}