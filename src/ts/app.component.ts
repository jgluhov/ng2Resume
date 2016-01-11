/**
 * Created by jgluhov on 07/01/16.
 */
import {Component, View, provide} from 'angular2/core';
//import {TodoComponent} from './todo/components/todo.component';

import {
    RouteConfig,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    LocationStrategy,
    HashLocationStrategy
} from 'angular2/router';

import {Routes, APP_ROUTES} from './routes.config'

@Component({
    selector: 'app',
    providers: [
        ROUTER_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy})
    ]
})

@View({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h1>The best programmer is {{name}}</h1>
    <a [routerLink]="routes.home.link">Home</a>
    <a [routerLink]="routes.about.link">About</a>
    <router-outlet></router-outlet>
    `
})

@RouteConfig(APP_ROUTES)

export class AppComponent {
    name:string = 'JGluhov';
    routes = Routes;
}