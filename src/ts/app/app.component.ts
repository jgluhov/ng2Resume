/**
 * Created by jgluhov on 07/01/16.
 */
import './app.component.styl';
import {Component, View, provide} from 'angular2/core';
//import {TodoComponent} from './todo/components/todo.component';
import {NavbarComponent} from '../components/navbar/navbar.component.ts';

import {
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    LocationStrategy,
    HashLocationStrategy
} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {APP_ROUTES} from './../routes.config'

@Component({
    selector: 'app',
    providers: [
        ROUTER_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy})
    ]
})

@View({
    directives: [ROUTER_DIRECTIVES, NavbarComponent],
    template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
    `
})

@RouteConfig(APP_ROUTES)

export class AppComponent {
    constructor(){}
}