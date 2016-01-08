/**
 * Created by jgluhov on 07/01/16.
 */
import {Component, View} from 'angular2/core';
import {TodoComponent} from './todo/components/todo.component';

@Component({
    selector: 'app'
})

@View({
    directives: [TodoComponent],
    template: `
    <h1>The best programmer is {{name}}</h1>
    `
})

export class AppComponent {
    name:string = 'JGluhov';
}