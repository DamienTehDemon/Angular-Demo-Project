import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Models/todo'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  //used to import services only!!!!
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id:1,
        title:"test 1",
        completed:false
      },
      {
        id:2,
        title:"test 2",
        completed:false
      },
      {
        id:3,
        title:"test 3",
        completed:false
      },
      {
        id:4,
        title:"test 4",
        completed:false
      },
    ]
  }

}
