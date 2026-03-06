import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodosService } from '../todos.Service';


@Component({
  standalone: true,
  selector: 'app-todo-header',
  templateUrl: './header.component.html',
  imports:[FormsModule]
})
export class HeaderComponent {
  text ='';
  private todoService=inject(TodosService)



  addTodo(){
  if(this.text){
    this.todoService.addItem(this.text)
  }
  this.text=''
  }

  
}
