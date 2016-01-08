/**
 * Created by jgluhov on 07/01/16.
 */
import {Component, Input} from 'angular2/core';
import {TodoItemComponent} from './todo.item.component.ts';
import {TodoService} from "./../services/todo.service.ts";
import {TodoSearchPipe} from './../pipes/todo.search.pipe.ts';
import {TodoStartedPipe} from './../pipes/todo.started.pipe.ts';

@Component({
    selector: 'todo-list',
    pipes: [TodoStartedPipe, TodoSearchPipe],
    directives: [TodoItemComponent],
    providers: [TodoService],
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