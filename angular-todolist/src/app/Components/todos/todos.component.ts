import { Component, OnInit } from '@angular/core';
import { TodoService } from "../../services/todo.service"
import { Todo } from '../../Models/todo'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  //used to import services only!!!!
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    //subscribes to this asynchronous method, so it knows whever it changes.
    this.todoService.getTodos().subscribe(todos =>{
      //sets the todos to the new todos.
      this.todos=todos;
    });
  }
  
  deleteTodo(todo:Todo){
    //this deletes it from the ui
    this.todos = this.todos.filter(t => t.id != todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

}
