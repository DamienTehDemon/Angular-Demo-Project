import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Todo } from "../Models/todo"
import { Observable } from 'rxjs'

//options to accept/give json
const httpOptions={
  headers: new HttpHeaders({
    'Content-Type': "application/json"
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoLimit:string = "?_limit=5"
  apiUrl:string = "http://jsonplaceholder.typicode.com/todos"
  constructor(private http:HttpClient) { }
  // the method returns a obeservable
  getTodos():Observable<Todo[]>{
    //specify what to bring the data in as, and uses string interpelation to combine the two strings to limit the amount
    return this.http.get<Todo[]>(`${this.apiUrl}${this.todoLimit}`);
  }
  //put request is for updating !  using any since it doesnt match our model
  toggleCompleted(todo:Todo):Observable<any>{
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions)
  }

  deleteTodo(todo:Todo):Observable<any>{
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions)
  }
}
