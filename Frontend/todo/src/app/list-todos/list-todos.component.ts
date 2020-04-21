import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date,
  ){

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  message: String
  todos: Todo[]
  // todos =[
  //   new Todo( 1,'Learning Angular',false, new Date()),
  //   new Todo( 2,'Trying Angular',false, new Date()),
  //   new Todo( 3,'Improve Angular',false, new Date()),
  //   new Todo( 4,'Expert Angular',false, new Date()),

  //   // {id: 1,description: 'Learning Angular'},
  //   // {id: 2,description: 'Trying Angular'},
  //   // {id: 3,description: 'Improve Angular'},
  //   // {id: 4,description: 'Expert Angular'},
  // ]

  constructor(
    private service:TodoDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.refreshTodos()
  }

  refreshTodos(){
    this.service.retriveAllTodos('Caio').subscribe(
      response=>{
        console.log(response);

        this.todos = response
      }
    )
  }

  deleteTodo(id){
    console.log(`delete todo ${id}`);
    this.service.deleteTodo(`Caio`,id).subscribe(
      response=>{
        console.log(response);
        this.message = `Delete Todo ${id} Sucessfull!`
        this.refreshTodos()
      }
    )
  }

  updateTodo(id){
    console.log(`Update Todo ${id}`);
    this.router.navigate(['todos',id])
  }

  addTodo(){
    this.router.navigate(['todos',-1])
  }
}
