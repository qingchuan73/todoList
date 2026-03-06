import { Component,Input,inject } from '@angular/core';
import { todoItemComponent } from '../todo-item/todoItem.component';
import { CommonModule } from '@angular/common';
import {Todo, TodosService } from '../todos.Service';  


@Component({
  imports:[todoItemComponent,CommonModule],
  standalone: true,
  selector: 'app-todo-todoList',
  templateUrl: './todoList.component.html',
})
export class TodoListComponent {
    private todoService=inject(TodosService)
     @Input() filterState: string = 'all'; // ✅ 接收父组件传来的筛选状态

 

  get todos(): Todo[] {
    const filter = 'all';
    return this.todoService.getItems(this.filterState);
  }

   get allCompleted(): boolean {
  return this.todos.length > 0 && this.todos.every(item => item.completed);
}

  toggleAll(){
    
   
    let complete=false
    this.todos.forEach(todo=>{
      if(todo.completed==false){
        complete=true
      }
    })
    this.todoService.toggleAll(complete)
  }




  
 
}
