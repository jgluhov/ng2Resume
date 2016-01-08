/**
 * Created by jgluhov on 07/01/16.
 */
import {Component,Inject} from 'angular2/core';
import {TodoService} from "./../services/todo.service.ts";
import {TodoModel} from './../services/todo.model.ts';

@Component({
    selector: 'todo-form',
    providers: [TodoService],
    template: `<div>
        <form (submit)="onSubmit()">
            <input type="text" [(ngModel)]="todoModel.title" placeholder="What do you need to do?">
        </form>
    </div>`
})

export class TodoFormComponent {
    todoModel:TodoModel = new TodoModel();

    constructor(public todoService:TodoService) {}

    onSubmit() {
        this.todoService.addTodo(this.todoModel);
        this.todoModel = new TodoModel();
    }
}
