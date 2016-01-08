/**
 * Created by jgluhov on 07/01/16.
 */
import {Pipe} from 'angular2/core';
import {TodoModel} from './todo.model'

@Pipe({
    name: "started"
})

export class TodoStartedPipe {
    transform(todos: Array<TodoModel>, [status]) {
        return todos.filter((item: TodoModel) => item.status == status);
    }
}