import { Component, inject,Input,ViewChild, AfterViewChecked,ElementRef  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Todo, TodosService } from '../todos.Service';
import { CommonModule } from '@angular/common'; 


@Component({
  standalone: true,
  imports:[FormsModule,CommonModule],
  selector: 'app-todo-todoItem',
  templateUrl: './todoItem.component.html',
})
export class todoItemComponent {
  private tosoService=inject(TodosService)
  edit=false
   @ViewChild('inputRef') inputRef!: ElementRef;

  
  @Input()
  todo!:Todo;
  

  ngAfterViewChecked() {

    if (this.edit && this.inputRef) {
      this.inputRef.nativeElement.focus();
    }
  }

  changeEdit(){
    
    if(this.inputRef.nativeElement.value!==''){
      this.todo.text=this.inputRef.nativeElement.value
    }
    this.edit=false
   

  }

  dbclick(){
    this.edit=true

  }
  

  toggleTodo(){
    this.todo.completed=!this.todo.completed
  }

  removeTodo(todo:Todo){
    this.tosoService.removeItem(todo)

  }

  
}
