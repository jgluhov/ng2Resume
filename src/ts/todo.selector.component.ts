/**
 * Created by jgluhov on 08/01/16.
 */
import {Component, Output, EventEmitter} from "angular2/core";

@Component({
    selector: 'todo-selector',
    template: `<div>
        <select #sel (change)="select.emit(sel.value)">
            <option *ngFor="#status of statuses">
                {{status}}
            </option>
        </select>
    </div>`
})

export class TodoSelectorComponent {
    @Output() select = new EventEmitter();
    statuses = ["started", "completed"];

    ngOnInit() {
        this.select.emit(this.statuses[0])
    }
}