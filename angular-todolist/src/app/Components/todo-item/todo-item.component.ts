import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
//Input allows you to pass through values ^  EventEmitter and Output to be able to emit upwards to the parent component.
import { TodoService } from "../../services/todo.service"
import { Todo } from '../../Models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {
  //Allows you to pass through something from the pervious component that is calling this one.
  @Input() todo:Todo
  //output to parent component, need to catch this in the parent component (Todos)
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

   //set dynamic classes
   //only allows classes to be on based on true or false values
   setClasses(){
     let classes = {
       todo: true,
       isCompleted: this.todo.completed
     }
     return classes;
   }
   
   onToggle(todo){
     //Toggle in ui only
    todo.completed = !todo.completed;
    //Toggle on server.
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
   }

   onDelete(todo){
    //need to access the todos in ui which are in the component above it so we need to emit upwards, see top of file.
    this.deleteTodo.emit(todo);
   }
}
