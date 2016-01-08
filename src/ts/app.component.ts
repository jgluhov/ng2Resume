/**
 * Created by jgluhov on 07/01/16.
 */
import {Component, View} from 'angular2/core';
import {TodoFormComponent} from './todo.form.component';
import {TodoListComponent} from './todo.list.component';
import {TodoSelectorComponent} from './todo.selector.component';
import {TodoSearchFormComponent} from './todo.search.form.component';

@Component({
    selector: 'app'
})

@View({
    directives: [TodoFormComponent, TodoListComponent, TodoSelectorComponent, TodoSearchFormComponent],
    template: `
    <h1>The best programmer is {{name}}</h1>
    <todo-form></todo-form>
    <todo-search-form (update)="term = $event"></todo-search-form>
    <todo-selector (select)="status = $event"></todo-selector>
    <todo-list [status]="status" [term]="term"></todo-list>
    `
})

export class AppComponent {
    name:string = 'JGluhov';
}