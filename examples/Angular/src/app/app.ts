import { Component, signal,inject } from '@angular/core';
import { CommonModule } from '@angular/common';  // ✅ 必须导入
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import { TodoListComponent } from './todo-list/todoList.component';
import { FooterComponent } from './footer/footer.component';
import {Todo, TodosService } from './todos.Service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,TodoListComponent,FooterComponent,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular');
  private todoService=inject(TodosService)
   get todos(): Todo[] {
      const filter = 'all';
      return this.todoService.getItems(filter);
    }

    currentState: string = 'all';

  
  handleState(state: string) {
    this.currentState = state;
  }
    


}
