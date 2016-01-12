/**
 * Created by jgluhov on 07/01/16.
 */
//import {Injectable} from 'angular2/core';
import {TodoModel} from './todo.model.ts';

//@Injectable()
export class TodoService {
    todos: Array<TodoModel> = [
        new TodoModel("eat"),
        new TodoModel("sleep"),
        new TodoModel("code"),
        new TodoModel("party", "completed"),
        new TodoModel("work"),
        new TodoModel("play"),
        new TodoModel("record", "completed"),
        new TodoModel("earn"),
        new TodoModel("charm", "completed"),
        new TodoModel("exercise"),
        new TodoModel("swim", "completed"),
        new TodoModel("find")
    ];

    addTodo(todo: TodoModel) {
        this.todos = [...this.todos, todo];
    }

    toggleTodo(todo: TodoModel) {
        let i = this.todos.indexOf(todo);

        let status =
                todo.status == "started"
                    ? "completed"
                    : "started";

        let toggledTodo = <TodoModel>_.assign(todo, {status});

        this.todos = [
            ...this.todos.slice(0, i),
            toggledTodo,
            ...this.todos.slice(i + 1)
        ];
    }
}