import { Component,inject,EventEmitter, Output } from "@angular/core";
import { CommonModule } from '@angular/common'; 
import { Todo, TodosService} from "../todos.Service";


@Component({
    imports:[CommonModule],
    standalone:true,
    selector:'app-todo-footer',
    templateUrl:'./footer.component.html',
    

})

export class FooterComponent{

    private todoService=inject(TodosService)
    private defauleState:string='all'

    stateArr=['all','active','completed']

    @Output() State = new EventEmitter<string>();
    get todos(): Todo[]{
        const filter = 'all';
        return this.todoService.getItems(filter);
    }

    get current(): string{
        return this.defauleState
    }

    set current(state:string){
        this.defauleState=state

    }

    get length(): number{
        return this.todos.filter(item=>!item.completed).length
    }

    changeState=(state:string)=>{
       
        this.current=state
        this.State.emit(state)

    }

    removeAll(){
        this.todoService.clearCompleted()
    }



    
    
    
    

}