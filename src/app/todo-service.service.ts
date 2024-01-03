import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  private baseUrl = 'https://localhost:7024/api/Todo';
  getTodo: any;


  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
  getTodoById(Id:number){
    return this.http.get<any[]>(`${this.baseUrl}/${Id}`)
  }
  addTodo(todo: any): Observable<any> {
    return this.http.post<any>(this.baseUrl +'/POST',{title:todo});
  }  

  deleteTodo(Id:number):  Observable<any>{
    console.log(Id);
    
   return this.http.delete<any>(`${this.baseUrl}/${Id}`)
  }
}
