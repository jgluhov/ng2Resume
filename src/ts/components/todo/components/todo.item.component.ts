/**
 * Created by jgluhov on 07/01/16.
 */
import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {ViewEncapsulation} from 'angular2/core';
import {TodoModel} from "./../services/todo.model.ts";

@Component({
    encapsulation: ViewEncapsulation.Native,
    selector: 'todo-item',
    template: `
    <style>
        .completed {
            text-decoration: line-through;
        }
    </style>
    <span [ngClass]="todo.status">{{todo.title | uppercase}}</span>
    <button (click)="toggle.emit(todo)">Toggle</button>
    `
})

export class TodoItemComponent {
    @Input() todo:TodoModel;
    @Output() toggle = new EventEmitter();
}