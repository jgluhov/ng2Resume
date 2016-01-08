/**
 * Created by jgluhov on 07/01/16.
 */
import {Component} from 'angular2/core';
import {TodoService} from "./todo.service";
import {TodoModel} from './todo.model';

@Component({
    selector: 'todo-form',
    template: `<div>
        <form (submit)="onSubmit()">
            <input type="text" [(ngModel)]="todoModel.title">
        </form>
    </div>`
})

export class TodoFormComponent {
    todoModel:TodoModel = new TodoModel();

    constructor(public todoService:TodoService) {
    }

    onSubmit() {
        this.todoService.addTodo(this.todoModel);
        this.todoModel = new TodoModel();
        console.log(this.todoService.todos)
    }
}
