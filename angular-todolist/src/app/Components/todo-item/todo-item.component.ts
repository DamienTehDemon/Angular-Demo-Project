import { Component, OnInit, Input } from '@angular/core';
//Input allows you to pass through values ^
import { Todo } from '../../Models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {
  //Allows you to pass through something from the pervious component that is calling this one.
  @Input() todo:Todo

  constructor() { }

  ngOnInit(): void {
  }

}
