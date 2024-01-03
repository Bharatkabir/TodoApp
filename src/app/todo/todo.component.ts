import { Component } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']

})
export class TodoComponent {
  todoForm: FormGroup;
  newTodo: any;
  constructor(private fb: FormBuilder, private Service: TodoServiceService) {
    this.todoForm = this.fb.group({
      title: ['', Validators.required],
    });
    this.getTodo()
  }
  todos: any[] | undefined;
  inputValue: string = '';
  getTodo() {
    this.Service.getAllTodos().subscribe(todos => {
      this.todos = todos;
      console.log(todos)
    })
  }

  Add(title: any) {
    debugger;
    this.Service.addTodo(title).subscribe(() => {
      this.getTodo();
      location.reload()
    });
  }
  onEdit() {


  }
  Delete(id: number): void {
    debugger;
    const confirmDelete = window.confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
      this.Service.deleteTodo(id).subscribe(()=>{
        });
      console.warn('Todo deleted successfully.');
      location.reload();
    }
  }

//   fetchTodoTitle(id: number): void {
//   this.service.getTodoTitleById(id).subscribe(
//     (todo: { id: number, title: string }) => {
//       this.todos = [todo]; // Convert the object to an array with a single element
//       console.log(todo);
//     },
//     (error: any) => {
//       console.error('Error fetching todo title:', error);
//     }
//   );
// }

}