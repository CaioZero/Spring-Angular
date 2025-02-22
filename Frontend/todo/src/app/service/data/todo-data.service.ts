import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { API_URL, API_URL_JPA } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retriveAllTodos(username){
    //console.log("Execute Hello WOrld Bean Service");
    return this.http.get<Todo[]>(`${API_URL_JPA}/users/${username}/todos`)
  }

  deleteTodo(username,id){
    return this.http.delete(`${API_URL_JPA}/users/${username}/todos/${id}`)
  }

  retriveTodo(username,id){
    return this.http.get<Todo>(`${API_URL_JPA}/users/${username}/todos/${id}`)
  }

  updateTodo(username,id,todo){
    return this.http.put<Todo>(`${API_URL_JPA}/users/${username}/todos/${id}`,todo)
  }

  createTodo(username,todo){
    return this.http.post<Todo>(`${API_URL_JPA}/users/${username}/todos`,todo)
  }
}
