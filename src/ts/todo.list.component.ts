/**
 * Created by jgluhov on 07/01/16.
 */
import {Component, Input} from 'angular2/core';
import {TodoItemComponent} from './todo.item.component';
import {TodoService} from "./todo.service";
import {TodoSearchPipe} from './todo.search.pipe';
import {TodoStartedPipe} from './todo.started.pipe';

@Component({
    selector: 'todo-list',
    pipes: [TodoStartedPipe, TodoSearchPipe],
    directives: [TodoItemComponent],
    template: `<div>
        <ul>
            <li *ngFor="#todo of todoService.todos | started: status | search: term ">
                <todo-item [todo]="todo" (toggle)="todoService.toggleTodo($event)"></todo-item>
            </li>
        </ul>
    </div>`
})

export class TodoListComponent {
    @Input() status: string;
    @Input() term: string;
    constructor(public todoService: TodoService) {}
}