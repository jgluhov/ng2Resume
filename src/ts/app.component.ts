/**
 * Created by jgluhov on 07/01/16.
 */
import {Component, View, provide} from 'angular2/core';
//import {TodoComponent} from './todo/components/todo.component';
import {NavbarComponent} from './navbar/navbar.component';

import {RouteConfig} from 'angular2/router';
import {Routes, APP_ROUTES} from './routes.config'

@Component({
    selector: 'app'
})

@View({
    directives: [NavbarComponent],
    template: `
    <h1>The best programmer is {{name}}</h1>
    <navbar></navbar>
    `
})

@RouteConfig(APP_ROUTES)

export class AppComponent {
    name:string = 'JGluhov';
}