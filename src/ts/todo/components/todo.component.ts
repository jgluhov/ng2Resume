/**
 * Created by jgluhov on 08/01/16.
 */
import {Component, View} from 'angular2/core';
import {TodoFormComponent} from './todo.form.component.ts';
import {TodoListComponent} from './todo.list.component.ts';
import {TodoSelectorComponent} from './todo.selector.component.ts';
import {TodoSearchFormComponent} from './todo.search.form.component.ts';

@Component({
    directives: [
        TodoFormComponent,
        TodoListComponent,
        TodoSelectorComponent,
        TodoSearchFormComponent
    ],
    selector: 'todo',
    template: `<div>
    <todo-search-form (update)="term = $event"></todo-search-form>
    <todo-form></todo-form>
    <todo-selector (select)="status = $event"></todo-selector>
    <todo-list [status]="status" [term]="term"></todo-list>
    </div>`

})

export class TodoComponent {}