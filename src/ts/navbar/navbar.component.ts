/**
 * Created by jgluhov on 11/01/16.
 */
import './navbar.component.styl';
import {Component, View, provide} from 'angular2/core';

import {
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS,
    LocationStrategy,
    HashLocationStrategy
} from 'angular2/router';

import {Routes} from './../routes.config'

@Component({
    selector: 'navbar',
    providers: [
        ROUTER_PROVIDERS,
        provide(LocationStrategy, {useClass: HashLocationStrategy})
    ]
})

@View({
    directives: [ROUTER_DIRECTIVES],
    templateUrl: './src/ts/navbar/navbar.component.html'
})

export class NavbarComponent {
    routes = Routes;
}