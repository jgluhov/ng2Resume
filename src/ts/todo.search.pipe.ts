/**
 * Created by jgluhov on 07/01/16.
 */
import {Pipe} from 'angular2/core';
import {TodoModel} from './todo.model';
import * as _ from 'lodash';

@Pipe({
    name: "search"
})

export class TodoSearchPipe {
    transform(todo: Array<TodoModel>, [term]) {
        return todo.filter((item: TodoModel) => _.startsWith(item.title,term));
    }
}