/**
 * Created by jgluhov on 08/01/16.
 */
import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'todo-search-form',
    template: `<div>
        <input #input type="text" (input)="update.emit(input.value)">
    </div>`
})

export class TodoSearchFormComponent {
    @Output() update = new EventEmitter();

    ngOnInit() {
        this.update.emit('');
    }
}